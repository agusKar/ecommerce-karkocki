import { useEffect, useState } from 'react'
import Alert from './Alert';
import ItemList from './ItemList'

const ItemListContainer = ({ books }) => {

  const [booksList, setBooksList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);


  useEffect(() => {
    const bookPromise = new Promise((res, rej) => {
      setLoading(true)
      setTimeout(() => {
        res(books)
        /*
          Descomentar esta linea para ver lo que ocurre en un error
          rej('Error')
        */
      }, 800);
    })

    bookPromise
      .then(result => {
        setBooksList(result)
      })
      .catch(error => {
        setAlert(true)
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [books]);


  return (
    <>
      {
        loading ?
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-4">Loading books...</span>
            <div className="spinner-grow bg-gradient shadow-lg " role="status"></div>
          </div>
          :
          alert ?
            <Alert type="danger">
              Error
            </Alert>
            :
            <ItemList
              booksList={booksList}
            />
      }
    </>
  )
}

export default ItemListContainer