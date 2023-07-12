import PropTypes from "prop-types";

const Game = ({ game, onSelectedGame }) => {
  return (
    <li
      onClick={() => onSelectedGame(game.id)}
      className="relative flex items-center gap-x-2 cursor-pointer py-6 px-12 border-b border-secondary-light hover:bg-secondary-light"
    >
      <img
        className="w-16 h-16 object-cover"
        src={game.background_image}
        alt={game.name}
      />
      <div className="flex flex-col">
        <h3 className="text-base font-bold text-white">{game.name}</h3>
        <p className="text-white">
          <span className="text-white"></span> {game.released}
        </p>
      </div>
    </li>
  );
};

Game.propTypes = {
  game: PropTypes.object.isRequired,
  onSelectedGame: PropTypes.func.isRequired,
};

export default Game;
