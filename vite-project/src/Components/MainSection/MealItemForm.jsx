import React, { useState } from "react";
import Input from "./Input";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
    },
  },
};

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);

  const [animate, setAnimate] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = parseInt(amount);
    props.addMeals({ ...props.item, amount: enteredAmount });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  function showAnimate() {
    setAnimate(true);
  }

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
        <motion.button
          onClick={showAnimate}
          variants={buttonVariants}
          whileHover="hover"
        >
          + Add
        </motion.button>
      </form>
    </React.Fragment>
  );
};

export default MealItemForm;
