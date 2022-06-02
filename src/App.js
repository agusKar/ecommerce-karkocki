// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';
import { useState } from 'react';

function App() {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  return (
    <div id="app">
      <NavBar cartItemsCount={cartItemsCount} />
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
          <ItemListContainer
            cartItemsCount={cartItemsCount}
            setCartItemsCount={setCartItemsCount}
          />
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
