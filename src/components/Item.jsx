import { useEffect, useState, useContext } from "react";
import Alert from "./Alert";
import ItemInfo from "./ItemInfo";
import { CartContext } from "../context/CartContextProvider";

const Item = ({ book }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const { name, photo, author, date, info, stock, id, price } = book;
  const [quantity, setQuantity] = useState(0);
  const [alert, setAlert] = useState(false);
  const [buttonDisplay, setButtonDisplay] = useState(true);

  useEffect(() => {
    if (isInCart(id)) {
      setButtonDisplay(false);
    }
  }, []);
  useEffect(() => {
    if (quantity > 0 && !isInCart(id)) {
      addItem(book, quantity);
      setButtonDisplay(false);
      setAlert(true);
    }
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [quantity]);

  return (
    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
      <div className="box pb-3 mb-2">
        <div className="box-header">
          <div className="box-image">
            <img src={require(`../assets/img/${photo}`)} alt={name} />
          </div>
        </div>
        <div className="box-body p-3">
          <p className="book-title">{name}</p>
          <p className="book-author">{author}</p>
          <p className="book-date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar3 me-2"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            {date}
          </p>
          <p className="book-info pe-3">{info}</p>
          <p>
            <span className="price">${price}</span>
          </p>
          <ItemInfo
            id={id}
            stock={stock}
            buttonDisplay={buttonDisplay}
            setQuantity={setQuantity}
          />
        </div>
      </div>
      {alert && (
        <Alert type="success">
          Added to cart <b>successfully</b>
        </Alert>
      )}
    </div>
  );
};

export default Item;
