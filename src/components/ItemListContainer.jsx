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
      info: "The Hobbit is a novel by J.R.R. Tolkien published in 1937. It tells the story of Bilbo Baggins, and his journey to the Lonely Mountain along with Gandalf and Thorin and Company to recover the treasure guarded by the dragon Smaug and also recover the kingdom of Erebor.",
      photo: 'hobbit_cover.jpg',
      stock: 15,
      categories:['fantasy']
    },
    {
      id: 2,
      name: "The Silmarillion",
      author: "J.R.R. Tolkien",
      date: "Sep 21 1977",
      info: "The Silmarillion is a collection of works by J. R. R. Tolkien, edited and published posthumously by his son Christopher Tolkien, in 1977.",
      photo: 'the_silmarillion.jpg',
      stock: 0,
      categories:['fantasy']
    },
    {
      id: 3,
      name: "Call of Cthulhu",
      author: "H.P. Lovecraft",
      date: "Feb 1928 ",
      info: "The Call of Cthulhu is a short story by American writer H. P. Lovecraft. Written in the summer of 1926, it was first published in the pulp magazine Weird Tales in February 1928.",
      photo: 'call_of_cthulhu.jpeg',
      stock: 4,
      categories:['fantasy','horror']
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