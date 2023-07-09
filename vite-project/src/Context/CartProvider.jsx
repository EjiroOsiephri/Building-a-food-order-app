import React, { useReducer } from "react";
import CartContex from "./CartContext";

const cartDefaultValue = {
  item: [],
  totalAmont: 0,
};

const cartReducer = (state, action) => {
  return cartDefaultValue;
};

const CartProvider = (props) => {
  const [state, dipatchCartAction] = useReducer(cartReducer, cartDefaultValue);

  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};

  const cartContextObject = {
    cartVisibility: true,
    item: [],
    removeItemHandler: removeItemHandler,
    addItemHandler: addItemHandler,
    totalAmont: 0,
  };

  return (
    <CartContex.Provider value={cartContextObject}>
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
