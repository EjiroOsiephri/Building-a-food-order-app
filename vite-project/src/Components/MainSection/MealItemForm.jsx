import React, { useState } from "react";
import Input from "./Input";
import CartContext from "../../Context/CartContext";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = parseInt(amount);
    props.addMeals({ ...props.item, amount: enteredAmount });
    // Pass the selected amount back to the App component
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <Input
          label="Amount"
          input={{
            id: "Amount_" + props.item.id,
            type: "number",
            min: "1",
            max: "5",
            value: amount,
            onChange: amountChangeHandler,
          }}
        />
        <button>+ Add</button>
      </form>
    </React.Fragment>
  );
};

export default MealItemForm;
