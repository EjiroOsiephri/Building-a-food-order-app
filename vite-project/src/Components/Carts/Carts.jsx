import MealBox from "../Body/MealBox";
import Classes from "../../Sass/Carts.module.scss";
import CheckoutForm from "../Checkout/CheckoutForm";
import CartContex from "../../Context/CartContext";
import { useState, useContext } from "react";

const Carts = (props) => {
  const [cart, showCart] = useState(false);

  const cartCtx = useContext(CartContex);

  const cartHasItems = cartCtx.mealCart.length > 0;

  props.noOfValueInCart(cartCtx.mealCart.length);

  const calculateTotal = () => {
    let total = 0;
    cartCtx.mealCart.forEach((item) => {
      total += item.totalValue * item.Amount;
    });
    return total;
  };

  const removeItem = (id) => {
    cartCtx.setMealCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            if (item.totalValue === 1) {
              return null;
            } else {
              return {
                ...item,
                totalValue: item.totalValue - 1,
              };
            }
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const addItem = (id) => {
    cartCtx.setMealCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            totalValue: item.totalValue + 1,
          };
        }
        return item;
      })
    );
  };

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
                    <div className={Classes.main}>
                      <section className={Classes.mealOrders}>
                        <p>₦{item.Amount}</p>
                        <div className={Classes.mealOrderValue}>
                          <p>{item.totalValue}</p>
                        </div>
                      </section>
                      <aside>
                        <button
                          onClick={() => {
                            removeItem(item.id);
                          }}
                          className={Classes.button}
                        >
                          -
                        </button>
                        <button
                          onClick={() => {
                            addItem(item.id);
                          }}
                          className={Classes.button}
                        >
                          +
                        </button>
                      </aside>
                    </div>
                    <hr />
                  </main>
                );
              })}
              <div className={Classes.totalValue}></div>
            </section>
          )}
          <CheckoutForm
            Total={calculateTotal()}
            onClick={props.onClick}
            cartHasItems={cartHasItems}
          ></CheckoutForm>
        </MealBox>
      )}
    </CartContex.Provider>
  );
};

export default Carts;
