import React, { useState } from "react";
import MainHeader from "./Components/MainSection/MainHeader";
import CartContex from "./Context/CartContext";
import NavBar from "./Components/NavBar/NavBar";
import Availablemeal from "./Components/MainSection/Availablemeal";
import Carts from "./Components/Carts/Carts";
import OrderMeals from "./Components/order section/OrderMeals";

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

  return (
    <CartContex.Provider
      value={{
        mealCart: mealCart,
        setMealCart: setMealCart,
      }}
    >
      <NavBar mealValue={mealValue} onShowCart={showCart} />
      {showOrder ? (
        <OrderMeals />
      ) : (
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
      )}
    </CartContex.Provider>
  );
}

export default App;
