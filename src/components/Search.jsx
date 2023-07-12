import PropTypes from "prop-types";

const Search = ({ query, setQuery }) => {
  return (
    <div>
      <input
        value={query}
        className="bg-primary-light placeholder:text-gray-300  border-none  p-1 rounded-md outline-none text-dark"
        placeholder="Search Games..."
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
};

Search.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Search;
