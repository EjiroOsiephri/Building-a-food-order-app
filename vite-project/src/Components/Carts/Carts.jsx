import MealBox from "../Body/MealBox";
import Classes from "../../Sass/Carts.module.scss";
import CheckoutForm from "../Checkout/CheckoutForm";
import CartContex from "../../Context/CartContext";
import { useState } from "react";

const Carts = () => {
  const MealBoxArray = [
    {
      name: "Sushi",
      Amount: "3000",
      orders: "× 1",
    },
  ];

  const [cart, showCart] = useState(false);

  return (
    <CartContex.Provider
      value={{
        closeBtn: showCart,
      }}
    >
      {!cart && (
        <MealBox>
          <section className={Classes.totalMeals}>
            <main className={Classes.mealClassifications}>
              <h1>{MealBoxArray[0].name}</h1>
              <section className={Classes.mealOrders}>
                <p>${MealBoxArray[0].Amount}</p>
                <div className={Classes.mealOrderValue}>
                  <p>{MealBoxArray[0].orders}</p>
                </div>
              </section>
              <hr />
            </main>
            <aside>
              <button>-</button>
              <button>+</button>
            </aside>
          </section>
          <CheckoutForm></CheckoutForm>
        </MealBox>
      )}
    </CartContex.Provider>
  );
};

export default Carts;
