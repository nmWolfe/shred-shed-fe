import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <label htmlFor="search" className="search-box__label">
        Search
      </label>
      <input
        type="text"
        id="search"
        className="search-box__input"
        placeholder="What are you looking for..."
      />
    </div>
  );
};

export default SearchBar;