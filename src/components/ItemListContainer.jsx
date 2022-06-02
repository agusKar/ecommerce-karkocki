import { useEffect, useState } from 'react'
import Alert from './Alert';
import ItemList from './ItemList'

const ItemListContainer = ({ cartItemsCount, setCartItemsCount }) => {

  const [booksList, setBooksList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const booksArray = [
    {
      id: 1,
      name: "The Hobbit",
      author: "J.R.R. Tolkien",
      date: "Sep 21 1937",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ex ipsum commodi, inventore earum nemo iusto architecto ullam omnis reiciendis vitae unde voluptatibus itaque vel optio suscipit voluptates? Consectetur, cupiditate.",
      photo: 'hobbit_cover.jpg',
      stock: 15
    },
    {
      id: 2,
      name: "The Silmarillion",
      author: "J.R.R. Tolkien",
      date: "Sep 21 1977",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ex ipsum commodi, inventore earum nemo iusto architecto ullam omnis reiciendis vitae unde voluptatibus itaque vel optio suscipit voluptates? Consectetur, cupiditate.",
      photo: 'the_silmarillion.jpg',
      stock: 0
    },
    {
      id: 3,
      name: "Call of Cthulhu",
      author: "H.P. Lovecraft",
      date: "Feb 1928 ",
      info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias ex ipsum commodi, inventore earum nemo iusto architecto ullam omnis reiciendis vitae unde voluptatibus itaque vel optio suscipit voluptates? Consectetur, cupiditate.",
      photo: 'call_of_cthulhu.jpeg',
      stock: 4
    },
  ]

  useEffect(() => {
    const bookPromise = new Promise((res, rej) => {
      setLoading(true)
      setTimeout(() => {
        res(booksArray)
        /*
          Descomentar esta linea para ver lo que ocurre en un error
          rej('Error')
        */
      }, 2000);
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

  }, []);


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
              cartItemsCount={cartItemsCount}
              setCartItemsCount={setCartItemsCount}
            />
      }
    </>
  )
}

export default ItemListContainer