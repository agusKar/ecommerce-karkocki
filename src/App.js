// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const booksList = [
    {
      id: 1,
      name: "The Hobbit",
      author: "J.R.R. Tolkien",
      date: "Sep 21 1937",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ex ipsum commodi, inventore earum nemo iusto architecto ullam omnis reiciendis vitae unde voluptatibus itaque vel optio suscipit voluptates? Consectetur, cupiditate.",
      photo: 'hobbit_cover.jpg'
    },
    {
      id: 2,
      name: "The Silmarillion",
      author: "J.R.R. Tolkien",
      date: "Sep 21 1977",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ex ipsum commodi, inventore earum nemo iusto architecto ullam omnis reiciendis vitae unde voluptatibus itaque vel optio suscipit voluptates? Consectetur, cupiditate.",
      photo: 'the_silmarillion.jpg'
    },
    {
      id: 3,
      name: "Call of Cthulhu",
      author: "H.P. Lovecraft",
      date: "Feb 1928 ",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ex ipsum commodi, inventore earum nemo iusto architecto ullam omnis reiciendis vitae unde voluptatibus itaque vel optio suscipit voluptates? Consectetur, cupiditate.",
      photo: 'call_of_cthulhu.jpeg'
    },
  ]
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
          <ItemListContainer booksList={booksList} />
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
