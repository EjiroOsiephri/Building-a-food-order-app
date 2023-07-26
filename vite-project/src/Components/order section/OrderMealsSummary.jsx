import React, { useContext } from "react";
import CartContex from "../../Context/CartContext";

const OrderMealsSummary = () => {
  const ctx = useContext(CartContex);
  const arraySummary = [];

  ctx.mealCart.map((item) => {
    return arraySummary.push({
      Name: item.Name,
      totalValue: item.totalValue,
      id: item.id,
      Amount: item.Amount,
    });
  });

  return (
    <div>
      <h1>Summary</h1>
      {arraySummary.map((item) => {
        return (
          <section key={item.id}>
            <div className="amountDiv">
              <h1>{item.Name}</h1>
              <h3>₦{item.Amount}</h3>
              <h4>{item.totalValue}</h4>
            </div>
            <aside>
              <div className="total">
                <h2>Total</h2>
                <h3>{item.Amount}</h3>
              </div>
              <div className="shipping">
                <h2>Shipping</h2>
                <h3>₦3000</h3>
              </div>
              <div className="grandTotal">
                <h2>GrandTotal</h2>
                <h3>{item.Amount + 3000}</h3>
              </div>
            </aside>
          </section>
        );
      })}
    </div>
  );
};

export default OrderMealsSummary;
