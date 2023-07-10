import PropTypes from "prop-types";

const NumResults = ({ games }) => {
  const numGames = games.length;
  return (
    <div className="text-lg">
      Found <span className="font-bold">{numGames}</span> Results
    </div>
  );
};

NumResults.propTypes = {
  games: PropTypes.array.isRequired,
};

export default NumResults;
