import React from "react";
import Classes from "../../Sass/OrderMeals.module.scss";

const OrderMeals = () => {
  const formSubmissionHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className={Classes.app} onSubmit={formSubmissionHandler}>
        <h1>Checkout</h1>
        <div className={Classes["control-group"]}>
          <div className={Classes["form-control"]}>
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" />
          </div>
          <div className={Classes["form-control"]}>
            <label htmlFor="name">Last Name</label>
            <input type="text" id="name" />
          </div>
        </div>
        <div className={Classes["form-control"]}>
          <label htmlFor="name">E-Mail Address</label>
          <input type="text" id="name" />
        </div>
        <div className={Classes["form-actions"]}>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default OrderMeals;
