import React from "react";
import Input from "./Input";
import { useRef } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.addMeals(props.item, amountInputRef.current?.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "Amount_" + props.item.id,
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
