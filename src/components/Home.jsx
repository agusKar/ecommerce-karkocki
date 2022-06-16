import { useContext } from 'react';
import {CartContext} from '../context/CartContextProvider';
import Hero from './Hero';
import ItemListContainer from './ItemListContainer';

const Home = () => {
  const {books} = useContext(CartContext);
  return (
    <>
      <Hero />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Week offers</h3>
          </div>
          <hr />
        </div>
        <div className="row g-3">
          <ItemListContainer
            books={books}
          />
        </div>
      </div>
    </>
  )
}

export default Home