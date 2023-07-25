import React from "react";
import Classes from "../../Sass/OrderMeals.module.scss";

const OrderMealsItem = (props) => {
  function formSubmission(e) {
    e.preventDefault();
    props.formSubmissionHandler();
  }
  return (
    <>
      <form className={Classes.app} onSubmit={formSubmission}>
        <h1>Checkout</h1>
        <div className={Classes["control-group"]}>
          <div className={Classes["form-control"]}>
            <h2>BILLING DETAILS</h2>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              onBlur={firstNameIsBlur}
              onChange={firstNameChangeHandler}
              id="name"
              value={enteredFirstName}
            />
          </div>
          <div className={Classes["form-control"]}>
            <label htmlFor="name">Last Name</label>
            <input
              onBlur={lastNameIsBlur}
              onChange={lastNameChangeHandler}
              value={enteredLastName}
              type="text"
              id="name"
            />
          </div>

          <div className={Classes["form-control"]}>
            <label htmlFor="name">E-Mail Address</label>
            <input
              onBlur={emailIsBlur}
              onChange={emailChangeHandler}
              value={enteredEmail}
              type="text"
              id="name"
            />
          </div>
          <div className={Classes["form-control"]}>
            <h2>Shipping info</h2>
            <label htmlFor="name">Your Address</label>
            <input
              onBlur={adressIsBlur}
              onChange={adressChangeHandler}
              value={enteredAddress}
              type="text"
              id="name"
            />
          </div>
          <div className={Classes["form-control"]}>
            <label htmlFor="name">Zip code</label>
            <input
              type="number"
              onBlur={zipIsBlur}
              value={enteredZipCode}
              onChange={zipChangeHandler}
              id="name"
            />
          </div>
          <div className={Classes["form-control"]}>
            <label htmlFor="name">City</label>
            <input
              onBlur={cityIsBlur}
              onChange={cityChangeHandler}
              value={enteredCity}
              type="text"
              id="name"
            />
          </div>
          <div className={Classes["form-control"]}>
            <label htmlFor="name">Country</label>
            <input
              onBlur={countryIsBlur}
              onChange={countryChangeHandler}
              value={enteredCountry}
              type="text"
              id="name"
            />
          </div>
        </div>
        <section className={Classes.app}>
          <div className={Classes["form-actions"]}>
            <button>Submit</button>
          </div>
        </section>
      </form>
    </>
  );
};

export default OrderMealsItem;
