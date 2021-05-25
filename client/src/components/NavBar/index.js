import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Google Books Searchinator
      </Link>
      <ul className="navbar-nav flex-row mr-auto">
        <NavItem exact to="/">
          Search
        </NavItem>
        <NavItem to="/saved">Saved Books</NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;
