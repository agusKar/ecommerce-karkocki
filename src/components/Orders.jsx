import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";

const Orders = () => {
  const [arrayOrders, setArrayOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const { getOrders } = useContext(CartContext);

  let navigate = useNavigate();

  const getAllOrders = async () => {
    setLoading(true);
    try {
      const data = await getOrders();
      setArrayOrders(data);
      setLoading(false);
    } catch (error) {
      console.log(`Error: ${error}`);
      if (arrayOrders.length <= 0) {
        return navigate("/");
      }
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="container top-to-navbar-2" style={{ minHeight: "80vh" }}>
      <div className="table-responsive">
        <h1 className="text-center mb-5">Your orders</h1>
        {loading ? (
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-4">Loading orders...</span>
            <div
              className="spinner-grow bg-gradient shadow-lg "
              role="status"
            ></div>
          </div>
        ) : (
          <>
            {arrayOrders && arrayOrders.length > 0 ? (
              <table className="table table-dark table-striped">
                <thead className="p-2">
                  <tr>
                    <th>Order Id</th>
                    <th>Products</th>
                    <th>Date</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {arrayOrders.length > 0 &&
                    arrayOrders.map(
                      (order) =>
                        order && (
                          <tr key={order.id} className="align-middle">
                            <td className="align-items-center fw-bold">
                              {order.id}
                            </td>
                            <td>
                              {order.data.items.length > 0 &&
                                order.data.items.map((item) => (
                                  <div key={item.id}>
                                    <div className="d-flex">
                                      <b className="text-orange me-2">
                                        {item.name}
                                      </b>
                                      <span className="fw-light">
                                        {item.quantity} x ${item.price}
                                      </span>
                                    </div>
                                    ---------
                                  </div>
                                ))}
                            </td>
                            <td>
                              {order.data.date
                                .toDate()
                                .toLocaleString("en-GB", {
                                  timeZone: "America/Buenos_Aires",
                                })}
                            </td>
                            <td className="fw-bold">${order.data.total}</td>
                          </tr>
                        )
                    )}
                </tbody>
              </table>
            ) : (
              <h4 className="text-center">No orders yet</h4>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Orders;
