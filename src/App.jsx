import GamesList from "./components/GamesList";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import Main from "./components/Main";
import Header from "./components/Header";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import GameDetails from "./components/GameDetails";
import PlayedGameList from "./components/PlayedGameList";
import PlayedSummary from "./components/PlayedSummary";

const KEY = "9f8f8f52e7fd4e629f25af8440bcd243";
const App = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const [played, setPlayed] = useState(() => {
    const storedValue = localStorage.getItem("played");
    return JSON.parse(storedValue) || [];
  });
  function handleSelectedGame(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }
  function handleAddGame(games) {
    setPlayed((played) => [...played, games]);
    console.log(games);
  }
  function handleCloseGame() {
    setSelectedId(null);
  }

  function handleDeletePlayed(id) {
    setPlayed((played) => played.filter((games) => games.name !== id));
  }

  useEffect(() => {
    localStorage.setItem("played", JSON.stringify(played));
  }, [played]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchGames() {
      try {
        setIsloading(true);
        setError("");
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${KEY}&search=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Cannot fetch games");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Game not found");
        setGames(data.results);
        setError("");
        console.log(data.results);
      } catch (err) {
        console.log(err.message);
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsloading(false);
      }
    }
    if (query.length < 3) {
      setGames([]);
      setError("");
      return;
    }

    fetchGames();
    return () => {
      controller.abort();
    };
  }, [query]);
  return (
    <>
      <div className="text-dark bg-secondary-dark min-h-screen">
        <NavBar>
          <Header />
          <Search query={query} setQuery={setQuery} games={games} />
          <NumResults games={games} />
        </NavBar>
        <Main>
          <Container>
            {isLoading && <Loader />}
            {!isLoading && !error && (
              <GamesList
                query={query}
                setQuery={setQuery}
                games={games}
                onSelectedGame={handleSelectedGame}
                onDeletePlayed={handleDeletePlayed}
              />
            )}
            {error && <ErrorMessage />}
          </Container>
          <Container>
            {selectedId ? (
              <GameDetails
                selectedId={selectedId}
                onAddPlayed={handleAddGame}
                played={played}
                onCloseGame={handleCloseGame}
              />
            ) : (
              <>
                <PlayedSummary played={played} />
                <PlayedGameList
                  played={played}
                  onDeletePlayed={handleDeletePlayed}
                />
              </>
            )}
          </Container>
        </Main>
      </div>
    </>
  );
};

export default App;
