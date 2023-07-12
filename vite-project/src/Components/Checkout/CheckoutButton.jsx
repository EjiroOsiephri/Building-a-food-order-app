import React from "react";
import Button from "../../Sass/Button.module.scss";

const CheckoutButton = (props) => {
  return (
    <div className={Button.div}>
      <button onClick={props.onClick} className={Button.close}>
        Close
      </button>
      {props.cartHasItems && <button className={Button.order}>Order</button>}
    </div>
  );
};

export default CheckoutButton;
