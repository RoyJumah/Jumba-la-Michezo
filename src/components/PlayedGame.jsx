import PropType from "prop-types";

const PlayedGame = ({ game, onDeletePlayed }) => {
  return (
    <li>
      <img src={game.image} alt={game.name} />
      <h3>{game.name}</h3>
      <div>
        <p>
          <span>⭐</span>
          <span>{game.rating}</span>
        </p>
        <p>
          <span>⭐</span>
          <span>{game.userRating}</span>
        </p>
        <p>
          <span>⌛</span>
          <span>{game.playtime} hr(s)</span>
        </p>
        <button onClick={() => onDeletePlayed(game.name)}></button>
      </div>
    </li>
  );
};

PlayedGame.propTypes = {
  game: PropType.object.isRequired,
  onDeletePlayed: PropType.func.isRequired,
};
export default PlayedGame;
