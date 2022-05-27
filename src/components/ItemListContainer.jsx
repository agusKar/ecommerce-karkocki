import Item from './Item'

const ItemListContainer = ({booksList}) => {
  return (
    <>
      {
        booksList.map(book => (
          <Item book={book} key={book.id} />
        ))
      }
    </>
  )
}

export default ItemListContainer