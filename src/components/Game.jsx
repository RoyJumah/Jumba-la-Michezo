import PropTypes from "prop-types";

const Game = ({ game, onSelectedGame }) => {
  return (
    <li
      onClick={() => onSelectedGame(game.id)}
      className="relative grid grid-cols-4rem-1fr auto-rows-auto text-base gap-x-1 cursor-pointer py-1 px-2 border border-b-gray-400 hover:bg-gray-600"
    >
      <img
        className="w-full row-span-full self-center"
        src={game.background_image}
        alt={game.name}
      />

      <div className="flex flex-col gap-2">
        <h3 className="text-base font-bold text-white">{game.name}</h3>
        <p className="flex gap-1">
          <span className="text-white">1️⃣</span>
          <span className="text-white">{game.released}</span>
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
