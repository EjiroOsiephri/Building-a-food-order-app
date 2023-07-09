import React from "react";
import Button from "../../Sass/Button.module.scss";

const CheckoutButton = () => {
  return (
    <div className={Button.div}>
      <button className={Button.close}>Close</button>
      <button className={Button.order}>Order</button>
    </div>
  );
};

export default CheckoutButton;
