import React, { useContext } from "react";
import CartContex from "../../Context/CartContext";
import Classes from "../../Sass/OrderMealsItem.module.scss";
import Eba from "../../assets/eba.jpg";
import Jollof from "../../assets/jolllof.jpg";
import Sushi from "../../assets/sushi-rolls.jpg";
import Burger from "../../assets/burger.jpg";

const OrderMealsSummary = () => {
  const ctx = useContext(CartContex);
  const arraySummary = [];
  let imgSource;

  ctx.mealCart.map((item) => {
    return arraySummary.push({
      Name: item.Name,
      totalValue: item.totalValue,
      id: item.id,
      Amount: item.Amount,
    });
  });

  console.log(arraySummary);

  return (
    <div className={Classes.allOrders}>
      <h1>Summary</h1>
      {arraySummary.map((item) => {
        return (
          <section key={item.id}>
            <div className={Classes.imgDiv}>
              <div className={Classes.arraySummaryInfo}>
                <img src={Burger} alt="" />
                <h1>{item.Name}</h1>
              </div>
              <h4>x{item.totalValue}</h4>
            </div>
            <aside>
              <div className={Classes.total}>
                <h2>Total</h2>
                <h3>₦{item.Amount}</h3>
              </div>
              <div className={Classes.shipping}>
                <h2>Shipping $ VAT</h2>
                <h3>₦3000</h3>
              </div>
              <div className={Classes.grandTotal}>
                <h2>GrandTotal</h2>
                <h3>₦{item.Amount + 3000}</h3>
              </div>
            </aside>
          </section>
        );
      })}
    </div>
  );
};

export default OrderMealsSummary;
