import React, { useState } from "react";
import MainHeader from "./Components/MainSection/MainHeader";
import CartContex from "./Context/CartContext";
import NavBar from "./Components/NavBar/NavBar";
import Availablemeal from "./Components/MainSection/Availablemeal";
import Carts from "./Components/Carts/Carts";

function App() {
  const [mealCart, setMealCart] = useState([]);

  const [cartIsShown, setCartIsShown] = useState(false);

  function showCart() {
    setCartIsShown(true);
  }
  function hideCart() {
    setCartIsShown(false);
  }

  // cart item value
  const [mealValue, setMealValue] = useState(0);

  function valueInCart(item) {
    setMealValue(item);
  }

  const addMealsToCart = (item) => {
    const existingItem = mealCart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      console.log("Item already exists in the cart!");
    } else {
      setMealCart((prevValue) => [...prevValue, item]);
    }
  };

  return (
    <CartContex.Provider
      value={{
        mealCart: mealCart,
        setMealCart: setMealCart,
      }}
    >
      <NavBar mealValue={mealValue} onShowCart={showCart} />
      <MainHeader />
      <Availablemeal addMeals={addMealsToCart} />
      {cartIsShown && (
        <Carts onClick={hideCart} noOfValueInCart={valueInCart} />
      )}
    </CartContex.Provider>
  );
}

export default App;
