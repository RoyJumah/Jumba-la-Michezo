import PropTypes from "prop-types";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const PlayedSummary = ({ played }) => {
  const avgRating = average(played?.map((played) => played.rating));
  const avgUserRating = average(played?.map((played) => played.userRating));
  const avgPlaytime = average(played?.map((played) => played.playtime));

  return (
    <div className="rounded-xl bg-secondary-light pt-9 pr-12 pb-7 pl-12 shadow">
      <h2 className="uppercase text-base mb-2">Games you played</h2>
      <div className="flex items-center gap-9 text-xl font-semibold">
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
          <span>⭐</span>
          <span>{avgPlaytime}</span>
        </p>
      </div>
    </div>
  );
};
PlayedSummary.propTypes = {
  played: PropTypes.array,
};

export default PlayedSummary;
