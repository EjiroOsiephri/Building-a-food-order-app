import React from "react";

const CartContex = React.createContext({
  cartVisibility: true,
  item: [],
  removeItemHandler: (id) => {},
  addItemHandler: (item) => {},
  totalAmont: 0,
});

export default CartContex;
