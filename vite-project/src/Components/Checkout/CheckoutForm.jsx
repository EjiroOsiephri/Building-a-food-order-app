import React from "react";
import CheckoutButton from "./CheckoutButton";
import Classes from "../../Sass/Checkoutform.module.scss";

const CheckoutForm = (props) => {
  return (
    <React.Fragment>
      {props.cartHasItems && (
        <div className={Classes.checkOutFormText}>
          <h1>Total Amount</h1>
          <h1>₦{props.Total}</h1>
        </div>
      )}
      <CheckoutButton
        onClick={props.onClick}
        cartHasItems={props.cartHasItems}
      ></CheckoutButton>
    </React.Fragment>
  );
};

export default CheckoutForm;
