import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <img
        src="src/assets/img/icon.png"
        alt="shred shed logo"
        className="nav__image"
      />
      <Link to="/" className="nav__link">
        {" "}
        Home{" "}
      </Link>
      <Link to="About" className="nav__link">
        {" "}
        About{" "}
      </Link>
      <Link to="Compare" className="nav__link">
        {" "}
        Compare{" "}
      </Link>
      <Link to="Share" className="nav__link">
        {" "}
        Share{" "}
      </Link>
      <SearchBar />
    </div>
  );
};

export default Nav;
