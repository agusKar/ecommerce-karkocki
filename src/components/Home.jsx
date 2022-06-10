import Hero from './Hero';
import ItemListContainer from './ItemListContainer';

const Home = ({booksArray}) => {
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
            booksArray={booksArray}
          />
        </div>
      </div>
    </>
  )
}

export default Home