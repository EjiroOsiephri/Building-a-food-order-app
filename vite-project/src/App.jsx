import React, { useState } from "react";
import MainHeader from "./Components/MainSection/MainHeader";
import CartContex from "./Context/CartContext";
import NavBar from "./Components/NavBar/NavBar";
import Availablemeal from "./Components/MainSection/Availablemeal";

function App() {
  const [mealCart, setMealCart] = useState([]);

  const addMealsToCart = (item) => {
    const existingItem = mealCart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      console.log("Item already exists in the cart!");
    } else {
      setMealCart((prevValue) => [...prevValue, item]);
    }
  };
  console.log(mealCart);
  return (
    <CartContex.Provider
      value={{
        mealCart: mealCart,
      }}
    >
      <NavBar />
      <MainHeader />
      <Availablemeal addMeals={addMealsToCart} />
    </CartContex.Provider>
  );
}

export default App;
