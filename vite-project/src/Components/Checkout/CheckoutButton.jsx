import React, { useContext } from "react";
import Button from "../../Sass/Button.module.scss";

const CheckoutButton = (props) => {
  const navigatePage = () => {
    props.setShowOrder(true);
  };

  return (
    <div className={Button.div}>
      <button onClick={props.onClick} className={Button.close}>
        Close
      </button>
      {props.cartHasItems && (
        <button onClick={navigatePage} className={Button.order}>
          Order
        </button>
      )}
    </div>
  );
};

export default CheckoutButton;
