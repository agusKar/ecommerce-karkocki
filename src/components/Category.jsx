import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import ItemListContainer from './ItemListContainer';

import not_found from '../assets/img/not-found.png'
import png_404 from '../assets/img/error-404.png';

const Category = ({booksArray}) => {
  const { id } = useParams()

  const [idParam, setIdParam] = useState(id);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setIdParam(id)
    const books = booksArray.filter(book => book.categories.includes(idParam))
    setBookList(books)
  }, [id, idParam]);
  return (
    <div className="container top-to-navbar-2">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Books by category <br /><span className="text-danger">{idParam}</span></h2>
        </div>
      </div>
      <div className="row mt-5">
        {
          bookList && bookList.length > 0 ?
            <ItemListContainer booksArray={bookList} />
          :
            <div className="col-12 text-center">
              <hr />
              <h3 className="mb-5">No books in this category</h3>
              <img src={not_found} alt="Not found any books icon" className="img-fluid" width="300"/>
            </div>
        }
      </div>
    </div>
  )
}

export default Category