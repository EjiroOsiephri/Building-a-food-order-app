import React, { useState } from "react";
import MainHeader from "./Components/MainSection/MainHeader";
import CartContex from "./Context/CartContext";
import NavBar from "./Components/NavBar/NavBar";
import Availablemeal from "./Components/MainSection/Availablemeal";
import Carts from "./Components/Carts/Carts";

function App() {
  const [mealCart, setMealCart] = useState([]);

  const [arrayItemsValue, setArrayItemsValue] = useState(1);

  function arrayItems(item) {
    setArrayItemsValue(item);
  }

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
  console.log(arrayItemsValue);
  return (
    <CartContex.Provider
      value={{
        mealCart: mealCart,
        arrayItemsValue: arrayItemsValue,
      }}
    >
      <NavBar mealValue={mealValue} onShowCart={showCart} />
      <MainHeader />
      <Availablemeal arrayItems={arrayItems} addMeals={addMealsToCart} />
      {cartIsShown && (
        <Carts onClick={hideCart} noOfValueInCart={valueInCart} />
      )}
    </CartContex.Provider>
  );
}

export default App;
