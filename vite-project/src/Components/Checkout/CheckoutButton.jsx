import React from "react";
import Button from "../../Sass/Button.module.scss";
import { useContext } from "react";
import CartContex from "../../Context/CartContext";

const CheckoutButton = () => {
  const ctx = useContext(CartContex);

  function closeCart() {
    ctx.closeBtn(true);
  }

  return (
    <div className={Button.div}>
      <button onClick={closeCart} className={Button.close}>
        Close
      </button>
      <button className={Button.order}>Order</button>
    </div>
  );
};

export default CheckoutButton;
