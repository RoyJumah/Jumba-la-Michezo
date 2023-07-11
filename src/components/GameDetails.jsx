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

  const isPlayed = played?.map((game) => game.id).includes(selectedId);
  const watchedUserRating = played?.find(
    (game) => game.id === selectedId
  )?.userRating;

  const {
    name,
    id,
    background_image: image,
    description_raw: details,
    rating,
    playtime,
    released,
    // developers: [{ name: developerName }],
  } = games;

  function handleAdd() {
    const newPlayedGame = {
      id: selectedId,
      name,
      released,
      image,
      rating: Number(rating),
      playtime: Number(playtime.split(" ").at(0)),
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
        console.log(data);
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
              className="items-center flex aspect-1 bg-white rounded-full grow-0 shrink-0 justify-center absolute text-secondary-dark border-0 cursor-pointer font-bold font-sans z-999 top-1 h-8 text-2xl"
            >
              &larr;
            </button>
            <img className="w-33" src={image} alt={name} />
            <div className="font-games flex flex-col gap-2 bg-secondary-light py-6 px-8 w-full">
              <h2 className="text-2xl mb-1">{name}</h2>
              <p className="font-inherit items-center gap-1 text-base font-normal ">
                {released} &bull; {playtime}hrs
              </p>
              <p className="font-games text-base font-normal">
                <span>⭐</span>
                {rating} rating
              </p>
            </div>
          </header>
          <section className="gap-4 p-10 flex flex-col">
            <div className="font-bold gap-7 mb-3 flex rounded-xl flex-col bg-secondary-light py-8 px-9">
              {!isPlayed ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="bg-primary border-0 text-dark cursor-pointer text-base font-bold rounded-xl p-3 transition-all duration-300"
                      onClick={handleAdd}
                    >
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated this game {watchedUserRating}
                  <span>⭐</span>
                </p>
              )}
            </div>
            <p className="text-base font-normal">
              <em>{details?.split(" ").slice(0, 30).join(" ")}...</em>
            </p>
            {/* <p>Game created by {developerName}</p> */}
          </section>
        </>
      )}
      {error && <ErrorMessage />}
    </div>
  );
};

GameDetails.propTypes = {
  selectedId: PropTypes.number.isRequired,
  onAddPlayed: PropTypes.func.isRequired,
  onCloseGame: PropTypes.func.isRequired,
  played: PropTypes.array.isRequired,
};

export default GameDetails;
