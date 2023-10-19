// import { ChangeEventHandler } from "react";
import "./SearchBar.scss";

// type SearchBarProps = {
//   onChange: ChangeEventHandler<HTMLInputElement>;
// };

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
        // onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
