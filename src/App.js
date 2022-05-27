// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero';

function App() {

  return (
    <div id="app">
      <NavBar />
      <Hero />
      {/* content */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Week offers</h3>
          </div>
          <hr />
        </div>
        <div className="row g-3">
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="box py-3">
              <div className="box-header">
                <div className="box-image">
                  <img src={require('./assets/img/hobbit_cover.jpg')} alt="" />
                </div>
              </div>
              <div className="box-body p-3">
                <p className='book-title'>The Hobbit</p>
                <p className='book-author'>J.R.R. Tolkien</p>
                <p className='book-date'>Sep 21 1937</p>
                <p className='book-info pe-3 m-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum necessitatibus consectetur, impedit porro iure mollitia atque aliquam repudiandae laudantium corrupti modi vitae beatae dicta soluta iusto ex, incidunt quos? Aut? </p>
                <button type="button" className="btn btn-outline-accent rounded-pill  mt-3">Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
            <div className="box py-3">
              <div className="box-header">
                <div className="box-image">
                  <img src={require('./assets/img/hobbit_cover.jpg')} alt="" />
                </div>
              </div>
              <div className="box-body p-3">
                <p className='book-title'>The Hobbit</p>
                <p className='book-author'>J.R.R. Tolkien</p>
                <p className='book-date'>Sep 21 1937</p>
                <p className='book-info pe-3 m-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum necessitatibus consectetur, impedit porro iure mollitia atque aliquam repudiandae laudantium corrupti modi vitae beatae dicta soluta iusto ex, incidunt quos? Aut? </p>
                <button type="button" className="btn btn-outline-accent rounded-pill mt-3">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
