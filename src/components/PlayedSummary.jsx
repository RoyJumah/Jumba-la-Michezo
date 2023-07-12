import PropTypes from "prop-types";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const PlayedSummary = ({ played }) => {
  const avgRating = average(played?.map((played) => played.rating));
  const avgUserRating = average(played?.map((played) => played.userRating));
  const avgPlaytime = average(played?.map((played) => played.playtime));

  return (
    <div className="rounded-lg bg-secondary-light pt-5 pr-8 pb-5 pl-8 shadow-inner-primary text-white">
      <h2 className="uppercase text-base mb-2 font-games">Games you played</h2>
      <div className="flex items-center gap-6 text-lg">
        <p className="flex items-center gap-3">
          <span>#️⃣</span>
          <span>{played.length} games</span>
        </p>
        <p className="flex items-center gap-3">
          <span>⭐</span>
          <span>{avgRating.toFixed(2)}</span>
        </p>
        <p className="flex items-center gap-3">
          <span>⭐</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p className="flex items-center gap-3">
          <span>⏳</span>
          <span>{avgPlaytime} hrs</span>
        </p>
      </div>
    </div>
  );
};
PlayedSummary.propTypes = {
  played: PropTypes.array,
};

export default PlayedSummary;
