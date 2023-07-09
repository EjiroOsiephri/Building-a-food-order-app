import React from "react";
import CheckoutButton from "./CheckoutButton";

const CheckoutForm = () => {
  return (
    <React.Fragment>
      <div className="checkOutFormText">
        <h1>Total Amount</h1>
        <h1>$60</h1>
      </div>
      <CheckoutButton></CheckoutButton>
    </React.Fragment>
  );
};

export default CheckoutForm;
