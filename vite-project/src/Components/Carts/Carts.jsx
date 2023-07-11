import MealBox from "../Body/MealBox";
import Classes from "../../Sass/Carts.module.scss";
import CheckoutForm from "../Checkout/CheckoutForm";
import CartContex from "../../Context/CartContext";
import { useState, useContext, useEffect } from "react";

const Carts = (props) => {
  const [cart, showCart] = useState(false);

  const cartCtx = useContext(CartContex);

  const cartHasItems = cartCtx.mealCart.length > 0;

  props.noOfValueInCart(cartCtx.mealCart.length);

  return (
    <CartContex.Provider
      value={{
        closeBtn: showCart,
      }}
    >
      {!cart && (
        <MealBox>
          {!cartHasItems ? (
            <h1 className={Classes.noCartData}>
              No orders yet? No worries, Click on the add button to place an
              order.
            </h1>
          ) : (
            <section className={Classes.totalMeals}>
              {cartCtx.mealCart.map((item, index) => {
                return (
                  <main key={index} className={Classes.mealClassifications}>
                    <h1>{item.Name}</h1>
                    <section className={Classes.mealOrders}>
                      <p>${item.Amount}</p>
                      <div className={Classes.mealOrderValue}>
                        <p>{"x4"}</p>
                      </div>
                    </section>
                    {/* <aside>
                      <button className={Classes.button}>-</button>
                      <button className={Classes.button}>+</button>
                    </aside> */}
                    <hr />
                  </main>
                );
              })}
            </section>
          )}
          <CheckoutForm cartHasItems={cartHasItems}></CheckoutForm>
        </MealBox>
      )}
    </CartContex.Provider>
  );
};

export default Carts;
