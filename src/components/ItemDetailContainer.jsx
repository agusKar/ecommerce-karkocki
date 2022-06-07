import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [singleBook, setSingleBook] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const getSingleBook = () => {
      fetch('https://mocki.io/v1/69609f9d-a174-4a9b-a7f9-6a717c6f7ed0')
      .then( res => res.json() )
      .then( data => {
        setSingleBook(data)
      } )
      .catch( error => {
        console.log(error)
      })
      .finally(() => {        
        setLoading(false)
      })
    }
    setTimeout(() => {
      // para simular MAS el delay del servidor, ya que la API responde rapido, SACAR esta linea para un uso real.
      getSingleBook()
    }, 2500);
  }, []);

  return (
    <>
      {
        loading ? 
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-4">Loading book...</span>
            <div className="spinner-grow bg-gradient shadow-lg " role="status"></div>
          </div>
        :
        <ItemDetail 
          singleBook={singleBook}
        />
      }
    </>
  )
}

export default ItemDetailContainer