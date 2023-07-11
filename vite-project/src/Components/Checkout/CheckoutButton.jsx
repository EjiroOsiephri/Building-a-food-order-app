import React from "react";
import Button from "../../Sass/Button.module.scss";
import { useContext } from "react";
import CartContex from "../../Context/CartContext";

const CheckoutButton = (props) => {
  const ctx = useContext(CartContex);

  function closeCart(props) {
    ctx.closeBtn(true);
  }

  return (
    <div className={Button.div}>
      <button onClick={closeCart} className={Button.close}>
        Close
      </button>
      {props.cartHasItems && <button className={Button.order}>Order</button>}
    </div>
  );
};

export default CheckoutButton;
