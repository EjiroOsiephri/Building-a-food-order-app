import React, { useContext } from "react";
import CheckoutButton from "./CheckoutButton";
import Classes from "../../Sass/Checkoutform.module.scss";
import AuthContext from "../../Context/AuthContext";

const CheckoutForm = (props) => {
  const orderCtx = useContext(AuthContext);

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
        setShowOrder={orderCtx.setShowOrder}
        cartHasItems={props.cartHasItems}
      ></CheckoutButton>
    </React.Fragment>
  );
};

export default CheckoutForm;
