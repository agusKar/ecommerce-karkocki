import Item from "./Item"

const ItemList = ({booksList, cartItemsCount, setCartItemsCount}) => {
  return (
    <>
      {
        booksList.map(book => (
          <Item
            key={book.id}
            book={book}
            cartItemsCount={cartItemsCount}
            setCartItemsCount={setCartItemsCount}
          />
        ))
      }
    </>
  )
}

export default ItemList