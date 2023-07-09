import React from "react";

const AuthContext = React.createContext({
  cartVisibility: true,
  item: [],
  removeItemHandler: (id) => {},
  addItemHandler: (item) => {},
  totalAmont: 0,
});

export default AuthContext;
