import React from 'react'

const ItemDetail = ({ singleBook }) => {
  const { name, photo, author, date, info, stock, categories } = singleBook
  return (
    <>
      <div className="col-12 mb-5 text-center">
        <hr />
        <h3>Book detail </h3>
        <small className="fs-6 text-secondary">(Esta vista es temporal, traido desde una api)</small>
      </div>
      {
        photo &&
          <div className="col-12 col-md-4">
            <img src={require(`../assets/img/${photo}`)} alt={name} className="img-thumbnail rounded mx-auto d-block" />
          </div>
      }
      <div className="col-12 col-md-8">
        <h2>{name}</h2>
        <hr/>
        <p>{author}</p>
        <p>{date}</p>
        <cite>{info}</cite>
        <div className="mt-3">
          {
            (categories && categories.length > 0) &&
            categories.map((category, index) => (
              <span key={index} className="badge rounded-pill bg-gradient me-2">
                <a href="#!" className="text-color-background fs-6 p-2">{category}</a>
              </span>
            )
            )
          }
        </div>
      </div>
    </>
  )
}

export default ItemDetail