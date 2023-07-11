import React, { useState } from "react";
import MainHeader from "./Components/MainSection/MainHeader";
import CartContex from "./Context/CartContext";
import NavBar from "./Components/NavBar/NavBar";
import Availablemeal from "./Components/MainSection/Availablemeal";

function App() {
  const [mealCart, setMealCart] = useState([]);

  const addMealsToCart = (item) => {
    setMealCart((prevValue) => [...prevValue, item]);
  };

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
