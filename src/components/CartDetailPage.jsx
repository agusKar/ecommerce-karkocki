import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
const CartDetailPage = () => {
  const { clear, totalPriceCart, removeItem, cartItems } =
    useContext(CartContext);
  return (
    <div className="top-to-navbar-2" style={{ minHeight: "80vh" }}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1>Your Cart</h1>
          </div>
        </div>
        {cartItems.length > 0 ? (
          <div className="row">
            <div className="col-8 mx-auto">
              <table className="table table-bordered table-dark table-hover">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {cartItems.length > 0 &&
                    cartItems.map((item) => (
                      <tr className="align-middle" key={item.id}>
                        <th>
                          <button
                            className="btn text-white"
                            onClick={() => removeItem(item.id)}
                          >
                            x
                          </button>
                        </th>
                        <th>
                          <img
                            src={require(`../assets/img/${item.photo}`)}
                            alt={item.name}
                            width="80"
                          />
                        </th>
                        <td>
                          <Link className="text-white" to={`/item/${item.id}`}>
                            {item.name}
                          </Link>
                        </td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <b>${item.quantity * item.price}</b>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="col-4">
              <div className="bg-dark p-3">
                <h5 className="text-center mb-3">Cart Total</h5>
                <p>
                  Subtotal: <span>${totalPriceCart()}</span>
                </p>
                <h5 className="mb-4">
                  Total: <span>${totalPriceCart()}</span>
                </h5>
                <button className="btn btn-success w-100">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <h4 className="text-center">Your cart is empty</h4>
        )}
      </div>
    </div>
  );
};

export default CartDetailPage;
