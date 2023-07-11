import MealBox from "../Body/MealBox";
import Classes from "../../Sass/Carts.module.scss";
import CheckoutForm from "../Checkout/CheckoutForm";
import CartContex from "../../Context/CartContext";
import { useState, useContext } from "react";

const Carts = (props) => {
  const MealBoxArray = [
    {
      name: "Sushi",
      Amount: "3000",
      orders: "× 1",
    },
  ];

  const [cart, showCart] = useState(false);

  const cartCtx = useContext(CartContex);

  const cartHasItems = cartCtx.mealCart.length > 0;

  return (
    <CartContex.Provider
      value={{
        closeBtn: showCart,
      }}
    >
      {!cart && (
        <MealBox>
          <section className={Classes.totalMeals}>
            {cartCtx.mealCart.map((item) => {
              return (
                <main className={Classes.mealClassifications}>
                  <h1>{item.Name}</h1>
                  <section className={Classes.mealOrders}>
                    <p>${item.Amount}</p>
                    <div className={Classes.mealOrderValue}>
                      <p>{}</p>
                    </div>
                  </section>
                  <hr />
                </main>
              );
            })}
            <aside>
              <button>-</button>
              <button>+</button>
            </aside>
          </section>
          <CheckoutForm cartHasItems={cartHasItems}></CheckoutForm>
        </MealBox>
      )}
    </CartContex.Provider>
  );
};

export default Carts;
