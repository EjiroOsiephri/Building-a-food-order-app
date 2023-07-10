import React, { useContext, useState } from "react";
import Input from "./Input";
import { useRef } from "react";
import CartContex from "../../Context/CartContext";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const ctx = useContext(CartContex);

  const submitHandler = (event) => {
    event.preventDefault();
    const selectedMeal = ctx.mealSectionArray[props.index][0];
    props.addMeals(selectedMeal);
    console.log(selectedMeal);
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "Amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
      </form>
    </React.Fragment>
  );
};

export default MealItemForm;
