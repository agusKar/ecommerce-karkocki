import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [idParam, setIdParam] = useState(null);
  const [singleBook, setSingleBook] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams()
  
  useEffect(() => {
    setIdParam(id)
  }, [id]);

  useEffect(() => {
    setLoading(true)
    const getSingleBook = () => {
      fetch('https://mocki.io/v1/69609f9d-a174-4a9b-a7f9-6a717c6f7ed0')
        .then(res => res.json())
        .then(data => {
          setSingleBook(data)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
    getSingleBook()
  }, []);

  return (
    <div className="container top-to-navbar-2">
      <div className="row">
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
      </div>
    </div>
  )
}

export default ItemDetailContainer