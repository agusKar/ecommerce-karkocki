// Components
import { useState } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

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
        <div className="row">          
          <ItemDetailContainer />
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
