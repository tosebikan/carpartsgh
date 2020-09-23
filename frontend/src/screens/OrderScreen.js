import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsOrder } from "../actions/orderActions";

function OrderScreen(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsOrder(props.match.params.id));
  }, []);
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  const payHandler = () => {};

  return loading ? (
    <div>Loading ...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>Shipping</h3>
            <div>
              {order.shipping.address},{order.shipping.city},
              {order.shipping.postalcode}, {order.shipping.country}
            </div>
            <div>
              {order.isDelivered
                ? "Delivered at" + order.deliveredAt
                : "Not Delivered"}
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>Payment Method: {order.payment.paymentMethod}</div>
            <div>{order.isPaid ? "Paid at" + order.paidAt : "Not Paid"}</div>
          </div>
          <div>
            <ul className="order-list-container">
              <li>
                <h3>Shopping order</h3>
                <div>Price</div>
              </li>
              {order.orderItems.length === 0 ? (
                <div>order is empty</div>
              ) : (
                order.orderItems.map((item) => (
                  <li key={item.product}>
                    <div className="order-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="order-name">
                      <div>
                        <Link to={"/product/" + item.product}>{item.name}</Link>
                      </div>
                      <div>Qty: {item.qty}</div>
                    </div>
                    <div className="order-price">${item.price}</div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>

        <div className="placeorder-action">
          <ul>
            <li>
              <button
                className="button primary full-width"
                onClick={payHandler}
              >
                Pay Now
              </button>
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>${order.itemsPrice}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>${order.shippingPrice}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>${order.taxPrice}</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>${order.totalPrice}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderScreen;
