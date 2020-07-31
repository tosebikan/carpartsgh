import React from "react";

const CheckoutSteps = (props) => {
  return (
    <div className="checkout-steps">
      <div className={props.set1 ? "active" : ""}>Signin</div>
      <div className={props.set2 ? "active" : ""}>Shipping</div>
      <div className={props.set3 ? "active" : ""}>Payment</div>
      <div className={props.set4 ? "active" : ""}>Place Order</div>
    </div>
  );
};

export default CheckoutSteps;
