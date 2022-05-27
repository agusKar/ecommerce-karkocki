const Footer = () => {
  return (
    
      <div className="container-fluid p-0">
        <footer className="py-3 mt-5">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./">Home</a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <span>-</span>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-category" href="category/action"><b>Action</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-category" href="category/drama"><b>Drama</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-category" href="category/horror"><b>Horror</b></a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <span>-</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">Contact</a>
            </li>
          </ul>
          <p className="text-center">© 20<b>22</b> <b>BOOKS</b><sup>KAR</sup></p>
        </footer>
      </div>
  )
}

export default Footer