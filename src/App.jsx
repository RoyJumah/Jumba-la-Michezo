import GamesList from "./components/GamesList";
import NavBar from "./components/NavBar";
import { useState } from "react";
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
import { useGames } from "./useGames";
import { useLocalStorage } from "./useLocalStorage";

const App = () => {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { games, isLoading, error } = useGames(query);
  const [played, setPlayed] = useLocalStorage([], "played");
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
    setPlayed((played) => played.filter((games) => games.id !== id));
  }

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
