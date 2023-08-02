import React, { useContext } from "react";
import Button from "../../Sass/Button.module.scss";
import { useNavigate } from "react-router-dom";

const CheckoutButton = (props) => {
  const navigate = useNavigate();

  const navigatePage = () => {
    props.setShowOrder(true);
    navigate("/ordermeals");
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
