import Game from "./Game";
import PropTypes from "prop-types";

const GamesList = ({ games, onSelectedGame }) => {
  return (
    <ul className="list-none py-1 px-0 transition-all duration-300 font-games">
      {games.map((game) => (
        <Game game={game} key={game.id} onSelectedGame={onSelectedGame} />
      ))}
    </ul>
  );
};

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
  onSelectedGame: PropTypes.func.isRequired,
};

export default GamesList;
