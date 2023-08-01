import React, { useState } from "react";
import MainHeader from "./Components/MainSection/MainHeader";
import CartContex from "./Context/CartContext";
import NavBar from "./Components/NavBar/NavBar";
import Availablemeal from "./Components/MainSection/Availablemeal";
import Carts from "./Components/Carts/Carts";
import OrderMeals from "./Components/order section/OrderMeals";
import axios from "axios";
import HomeNavBar from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [mealCart, setMealCart] = useState([]);

  const [cartIsShown, setCartIsShown] = useState(false);

  const [showOrder, setShowOrder] = useState(false);

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
    const existingItemIndex = mealCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...mealCart];
      updatedCart[existingItemIndex].quantity += 1;
      updatedCart[existingItemIndex].totalValue =
        updatedCart[existingItemIndex].quantity * item.amount;
      setMealCart(updatedCart);
    } else {
      const newItem = { ...item, quantity: 1, totalValue: item.amount };
      setMealCart((prevValue) => [...prevValue, newItem]);
    }
  };

  const sendPostRequest = async (meals) => {
    const response = await axios.post(
      "https://ejiro-s-kitchen-default-rtdb.firebaseio.com/Meals.json",
      meals
    );
    console.log(response.data);
    console.log(meals);
  };

  return (
    <CartContex.Provider
      value={{
        mealCart: mealCart,
        setMealCart: setMealCart,
      }}
    >
      <Routes>
        <Route path="/" element={<HomeNavBar />} />
        <Route
          path="/navbar"
          element={
            <NavBar
              showImg={showOrder}
              mealValue={mealValue}
              onShowCart={showCart}
            />
          }
        />
        {showOrder ? (
          <Route
            path="/ordermeals"
            element={<OrderMeals sendPostRequest={sendPostRequest} />}
          />
        ) : (
          <Route
            path="/mainheader"
            element={
              <section>
                <MainHeader />
                <Availablemeal addMeals={addMealsToCart} />
                {cartIsShown && (
                  <Carts
                    onClick={hideCart}
                    setShowOrder={setShowOrder}
                    noOfValueInCart={valueInCart}
                  />
                )}
              </section>
            }
          />
        )}
      </Routes>
    </CartContex.Provider>
  );
}

export default App;
