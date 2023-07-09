import React from "react";
import MainHeader from "./Components/MainSection/MainHeader";
import CartProvider from "./Context/CartProvider";

function App() {
  return (
    <CartProvider>
      <MainHeader></MainHeader>
    </CartProvider>
  );
}

export default App;
