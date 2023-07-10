import PlayedGame from "./PlayedGame";
import PropTypes from "prop-types";

const PlayedGameList = ({ played, onDeletePlayed }) => {
  return (
    <ul className="list-none py-3 px-0">
      {played?.map((game) => (
        <PlayedGame
          game={game}
          key={game.name}
          onDeletePlayed={onDeletePlayed}
        />
      ))}
    </ul>
  );
};

PlayedGameList.propTypes = {
  played: PropTypes.array,
  onDeletePlayed: PropTypes.func.isRequired,
};

export default PlayedGameList;
