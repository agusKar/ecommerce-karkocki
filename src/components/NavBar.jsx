import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav className="navbar py-3 navbar-expand-lg navbar-dark navbar-white-gray fixed-top" id="navbar">
      <div className="container">
        <a className="navbar-brand" href="#"><b>BOOKS</b><sup>KAR</sup></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-nav-scroll m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./">Home</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle nav-link-category" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="category/action">Action</a></li>
                <li><a className="dropdown-item" href="category/classics">Classics</a></li>
                <li><a className="dropdown-item" href="category/drama">Drama</a></li>
                <li><a className="dropdown-item" href="category/Fantasy">Fantasy</a></li>
                <li><a className="dropdown-item" href="category/horror">Horror</a></li>
                <li><a className="dropdown-item" href="category/romance">Romance</a></li>
                <li><a className="dropdown-item" href="category/sci-fi">Science Fiction</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
          <div className="navbar-nav navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/" target="_blank">
                <CartWidget numItems="1" />
              </a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar