import PropType from "prop-types";

const PlayedGame = ({ game, onDeletePlayed }) => {
  return (
    <li className="flex items-center gap-x-4 border-b-secondary-light text-lg px-8 py-3 relative">
      <img
        className="w-16 h-16 object-cover "
        src={game.image}
        alt={game.name}
      />
      <div className="flex items-center gap-9">
        <div className="flex flex-col gap-2 justify-center">
          <h3>{game.name}</h3>
          <div className="flex gap-2">
            <p className="gap-3 flex">
              <span>⭐</span>
              <span>{game.rating}</span>
            </p>
            <p className="gap-2 flex">
              <span>🌟</span>
              <span>{game.userRating}</span>
            </p>
            <p className="gap-2 flex">
              <span>⌛</span>
              <span>{game.playtime}hrs</span>
            </p>
          </div>
        </div>
        <button
          className=" right-6 h-4 text-xs cursor-pointer font-bold absolute text-tertiary-dark aspect-1 bg-red-light border-0 rounded-full shrink-0 grow-0 "
          onClick={() => onDeletePlayed(game.id)}
        >
          X
        </button>
      </div>
    </li>
  );
};

PlayedGame.propTypes = {
  game: PropType.object.isRequired,
  onDeletePlayed: PropType.func.isRequired,
};
export default PlayedGame;
