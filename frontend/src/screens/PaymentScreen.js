import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { savePayment } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push("placeorder");
  };
  return (
    <div>
      <CheckoutSteps steps1 steps2 steps3></CheckoutSteps>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Payment</h2>
            </li>
            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="paymentMethod">PayPal</label>
              </div>
            </li>
            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paystack"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="paymentMethod">PayStack</label>
              </div>
            </li>

            <li>
              <button className="button primary" type="submit">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default PaymentScreen;
