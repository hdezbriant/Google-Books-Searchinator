import { Link, NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const { pathname } = useLocation();
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Google Books Searchinator
      </Link>
      <ul className="navbar-nav flex-row mr-auto">
        <li className="nav-item mx-3">
          <NavLink className="nav-link" exact to="/">
            Search{" "}
            {pathname === "/" && <span className="sr-only">(current)</span>}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/saved">
            Saved Books{" "}
            {pathname === "/saved" && (
              <span className="sr-only">(current)</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
