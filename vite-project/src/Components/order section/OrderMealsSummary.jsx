import React, { useContext } from "react";
import CartContex from "../../Context/CartContext";

const OrderMealsSummary = () => {
  const ctx = useContext(CartContex);
  const arraySummary = [];

  ctx.mealCart.map((item) => {
    return arraySummary.push({ Name: item.Name, quantity: item.quantity });
  });

  return <></>;
};

export default OrderMealsSummary;
