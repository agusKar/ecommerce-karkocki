import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";

const Checkout = () => {
  const { totalPriceCart, cartItems } = useContext(CartContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (cartItems.length <= 0) {
      return navigate("/");
    }
  }, [cartItems]);

  return (
    <div
      className="container checkout top-to-navbar-2"
      style={{ minHeight: "80vh" }}
    >
      <div className="row">
        <div className="col-12 col-md-10 mx-auto">
          <div className="row">
            <div className="col-12 col-md-5 py-4 shadow-lg bg-orange">
              <h3 className="text-center">Your items</h3>
              <div className="row p-2">
                <div className="col-12">
                  <hr />
                  <div className="row">
                    {cartItems.map((item) => (
                      <div className="col-12 col-md-4">
                        <Link className="text-white" to={`/item/${item.id}`}>
                          <img
                            src={require(`../assets/img/${item.photo}`)}
                            alt={item.name}
                            className="img-fluid rounded shadow"
                          />
                          <p className="mt-2 text-center">${item.price}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-12">
                  <hr />
                  <h5 className="mt-5">
                    <span className="fw-light">Cart Total: </span>{" "}
                    <span>${totalPriceCart()}</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 py-4 px-0">
              <form className="p-5 bg-dark shadow-lg">
                <div className="mb-3">
                  <div className="row mb-5">
                    <div className="col-12 col-md-6">
                      <label htmlFor="name" className="form-label fw-light">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        id="name"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="lastName" className="form-label fw-light">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="email" className="form-label fw-light">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        id="email"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-accent text-white bg-gradient  rounded-pill mt-5 w-100"
                >
                  Check out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
