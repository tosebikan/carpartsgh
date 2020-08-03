import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {} from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shipping, payment } = cart;

  if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <div>
      <CheckoutSteps steps1 steps2 steps3 steps4 />
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>Shipping</h3>
            <div>
              {cart.shipping.address},{cart.shipping.city},
              {cart.shipping.postalcode}, {cart.shipping.country}
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>Payment Method: {cart.payment.paymentMethod}</div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>Shopping Cart</h3>
                <div>Price</div>
              </li>
              {cartItems.length === 0 ? (
                <div>Cart is empty</div>
              ) : (
                cartItems.map((item) => (
                  <li key={item.product}>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/product/" + item.product}>{item.name}</Link>
                      </div>
                      <div>Qty: {item.qty}</div>
                    </div>
                    <div className="cart-price">${item.price}</div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="placeorder-action">
          <h3>
            Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : ${" "}
            {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </h3>
          <button
            onClick={checkoutHandler}
            className="button primary full-width"
            disabled={cartItems.length === 0}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrderScreen;
