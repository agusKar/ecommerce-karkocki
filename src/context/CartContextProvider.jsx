import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
  const booksArray = [
    {
      id: 1,
      name: "The Hobbit",
      author: "J.R.R. Tolkien",
      date: "Sep 21 1937",
      info: "The Hobbit is a novel by J.R.R. Tolkien published in 1937. It tells the story of Bilbo Baggins, and his journey to the Lonely Mountain along with Gandalf and Thorin and Company to recover the treasure guarded by the dragon Smaug and also recover the kingdom of Erebor.",
      photo: "hobbit_cover.jpg",
      stock: 15,
      price: 30,
      categories: ["fantasy"],
    },
    {
      id: 2,
      name: "The Silmarillion",
      author: "J.R.R. Tolkien",
      date: "Sep 21 1977",
      info: "The Silmarillion is a collection of works by J. R. R. Tolkien, edited and published posthumously by his son Christopher Tolkien, in 1977.",
      photo: "the_silmarillion.jpg",
      stock: 0,
      price: 35,
      categories: ["fantasy"],
    },
    {
      id: 3,
      name: "Call of Cthulhu",
      author: "H.P. Lovecraft",
      date: "Feb 1928 ",
      info: "The Call of Cthulhu is a short story by American writer H. P. Lovecraft. Written in the summer of 1926, it was first published in the pulp magazine Weird Tales in February 1928.",
      photo: "call_of_cthulhu.jpeg",
      stock: 4,
      price: 25,
      categories: ["horror"],
    },
  ];
  const [books, setBooks] = useState(booksArray);
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      const newItem = {
        ...item,
        quantity,
      };
      setCartItems([...cartItems, newItem]);
    }
  };
  const removeItem = (id) => {
    if (isInCart(id)) {
      const newArray = cartItems?.filter((item) => item.id != id);
      setCartItems(newArray);
    }
  };
  const clear = () => {
    setCartItems([]);
  };
  const isInCart = (id) => {
    return cartItems?.some((item) => item.id === id);
  };
  const findBook = (id) => {
    return booksArray.find((item) => item.id == id);
  };
  const quantityCart = () => {
    return cartItems.length;
  };
  const totalPriceCart = () => {
    return cartItems?.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price * currentValue.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        books,
        cartItems,
        quantityCart,
        setBooks,
        addItem,
        removeItem,
        isInCart,
        clear,
        totalPriceCart,
        findBook,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
