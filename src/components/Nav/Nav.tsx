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
      <Link to="/about" className="nav__link">
        {" "}
        About{" "}
      </Link>
      <Link to="/compare" className="nav__link">
        {" "}
        Compare{" "}
      </Link>
      <Link to="/share" className="nav__link">
        {" "}
        Share{" "}
      </Link>
      <Link to="/blog" className="nav__link">
        {" "}
        Blog{" "}
      </Link>
      <SearchBar />
    </div>
  );
};

export default Nav;
