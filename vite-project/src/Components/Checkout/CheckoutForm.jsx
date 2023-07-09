import React from "react";
import CheckoutButton from "./CheckoutButton";
import Classes from "../../Sass/Checkoutform.module.scss";

const CheckoutForm = () => {
  return (
    <React.Fragment>
      <div className={Classes.checkOutFormText}>
        <h1>Total Amount</h1>
        <h1>$60</h1>
      </div>
      <CheckoutButton></CheckoutButton>
    </React.Fragment>
  );
};

export default CheckoutForm;
