const Item = ({book}) => {
  const {name, photo, author, date, info} = book
  return (
    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
      <div className="box pb-3">
        <div className="box-header">
          <div className="box-image">
            <img src={require(`../assets/img/${photo}`)} alt={name} />
          </div>
        </div>
        <div className="box-body p-3">
          <p className='book-title'>{name}</p>
          <p className='book-author'>{author}</p>
          <p className='book-date'>{date}</p>
          <p className='book-info pe-3 m-0'>{info}</p>
          <button type="button" className="btn btn-outline-accent rounded-pill mt-3">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Item