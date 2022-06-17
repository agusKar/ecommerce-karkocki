import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav
      className="navbar py-3 navbar-expand-lg navbar-dark navbar-white-gray fixed-top"
      id="navbar"
    >
      <div className="container">
        <Link className="navbar-brand grow" to={"/"}>
          <b>BOOKS</b>
          <sup>KAR</sup>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-nav-scroll m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link grow active"
                aria-current="page"
                to="./"
              >
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link grow dropdown-toggle nav-link-category"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="category/action">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="category/classics">
                    Classics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="category/drama">
                    Drama
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="category/fantasy">
                    Fantasy
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="category/horror">
                    Horror
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="category/romance">
                    Romance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="category/sci-fi">
                    Science Fiction
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="navbar-nav navbar-nav-scroll">
            <li className="nav-item grow position-relative">
              <CartWidget />
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
