import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { findBook, getCategories } = useContext(CartContext);
  const [singleBook, setSingleBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setSingleBook(findBook(id));
  }, [id]);

  return (
    <div className="container top-to-navbar-2">
      <div className="row">
        {getCategories()}
        <ItemDetail singleBook={singleBook} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
