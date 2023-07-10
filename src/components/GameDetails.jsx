import { useEffect, useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import StarRating from "./StarRating";
import PropTypes from "prop-types";

const KEY = "9f8f8f52e7fd4e629f25af8440bcd243";

const GameDetails = ({ selectedId, onAddPlayed, onCloseGame, played }) => {
  const [games, setGames] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userRating, setUserRating] = useState("");
  const {
    name,
    background_image: image,
    description_raw: details,
    playtime,
    released,
    publishers,
    rating,
  } = games;

  const isPlayed = played?.map((game) => game.name).includes(selectedId);

  const watchedUserRating = played?.find(
    (game) => game.name === selectedId
  )?.userRating;

  function handleAdd() {
    const newPlayedGame = {
      name: selectedId,
      released,
      image,
      rating: Number(rating),
      playtime: Number(playtime),
      userRating,
    };
    onAddPlayed(newPlayedGame);
    onCloseGame();
  }

  useEffect(() => {
    async function getGameDetails() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://api.rawg.io/api/games/${selectedId}?key=${KEY}`
        );
        if (!res.ok)
          throw new Error("Something is wrong with fetching the game details");
        const data = await res.json();
        setGames(data);
        setError("");
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getGameDetails();
  }, [selectedId]);

  useEffect(() => {
    const callback = (e) => {
      if (e.code === "Escape") {
        onCloseGame();
      }
    };
    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [onCloseGame]);

  useEffect(() => {
    if (!name) return;
    document.title = `Game | ${name}`;

    return () => {
      document.title = "Jumba la Michezo";
    };
  }, [name]);

  return (
    <div className="leading-6 text-xl">
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <>
          <header className="flex">
            <button
              onClick={onCloseGame}
              className="items-center flex aspect-1 bg-white rounded-full grow-0 shrink-0 justify-center absolute text-secondary-dark border-0 cursor-pointer font-bold font-sans z-999 top-2 h-12 text-4xl"
            >
              &larr;
            </button>
            <img className="w-33" src={image} alt={name} />
            <div className="font-games flex flex-col gap-6 bg-secondary-light py-8 px-12">
              <h2>{name}</h2>
              <p className="font-games">
                {released} &bull; {playtime}hr(s)
              </p>
              <p className="font-games">
                <span>⭐</span>
                {rating} rating
              </p>
            </div>
          </header>
          <section>
            <div>
              {!isPlayed ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button onClick={handleAdd}>+ Add to List</button>
                  )}
                </>
              ) : (
                <p>
                  You rated this game {watchedUserRating}
                  <span>⭐</span>
                </p>
              )}
            </div>
          </section>
        </>
      )}
      {error && <ErrorMessage />}
    </div>
  );
};

GameDetails.propTypes = {
  selectedId: PropTypes.string.isRequired,
  onAddPlayed: PropTypes.func.isRequired,
  onCloseGame: PropTypes.func.isRequired,
  played: PropTypes.array.isRequired,
};

export default GameDetails;
