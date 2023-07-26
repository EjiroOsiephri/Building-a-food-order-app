import React, { useReducer } from "react";
import "../../Sass/OrderMeals.scss";

const SET_FIRST_NAME = "SET_FIRST_NAME";
const SET_FIRST_NAME_TOUCHED = "SET_FIRST_NAME_TOUCHED";
const SET_LAST_NAME = "SET_LAST_NAME";
const SET_LAST_NAME_TOUCHED = "SET_LAST_NAME_TOUCHED";
const SET_EMAIL = "SET_EMAIL";
const SET_EMAIL_TOUCHED = "SET_EMAIL_TOUCHED";
const SET_ZIP_CODE = "SET_ZIP_CODE";
const SET_ZIP_CODE_TOUCHED = "SET_ZIP_CODE_TOUCHED";
const SET_CITY = "SET_CITY";
const SET_CITY_TOUCHED = "SET_CITY_TOUCHED";
const SET_COUNTRY = "SET_COUNTRY";
const SET_COUNTRY_TOUCHED = "SET_COUNTRY_TOUCHED";
const SET_ADRESS = "SET_ADRESS";
const SET_ADRESS_TOUCHED = "SET_ADRESS_TOUCHED";
const RESET_FORM = "RESET_FORM";

const formReducer = (state, action) => {
  if (action.type === SET_FIRST_NAME) {
    return {
      ...state,
      enteredFirstName: action.value,
    };
  }

  if (action.type === SET_FIRST_NAME_TOUCHED) {
    return {
      ...state,
      enteredFirstNameIsTouched: true,
    };
  }

  if (action.type === SET_LAST_NAME) {
    return {
      ...state,
      enteredLastName: action.value,
    };
  }

  if (action.type === SET_LAST_NAME_TOUCHED) {
    return {
      ...state,
      enteredLastNameIsTouched: true,
    };
  }

  if (action.type === SET_EMAIL) {
    return {
      ...state,
      enteredEmail: action.value,
    };
  }

  if (action.type === SET_EMAIL_TOUCHED) {
    return {
      ...state,
      enteredEmailIsTouched: true,
    };
  }
  if (action.type === SET_ZIP_CODE) {
    return {
      ...state,
      enteredZipCode: action.value,
    };
  }
  if (action.type === SET_ZIP_CODE_TOUCHED) {
    return {
      ...state,
      enteredZipCodeIsTouched: true,
    };
  }
  if (action.type === SET_CITY) {
    return {
      ...state,
      enteredCity: action.value,
    };
  }
  if (action.type === SET_CITY_TOUCHED) {
    return {
      ...state,
      enteredCityIsTouched: true,
    };
  }
  if (action.type === SET_COUNTRY) {
    return {
      ...state,
      enteredCountry: action.value,
    };
  }
  if (action.type === SET_COUNTRY_TOUCHED) {
    return {
      ...state,
      enteredCountryIsTouched: true,
    };
  }

  if (action.type === SET_ADRESS) {
    return {
      ...state,
      enteredAddress: action.value,
    };
  }

  if (action.type === SET_ADRESS_TOUCHED) {
    return {
      ...state,
      enteredAddressIsTouched: true,
    };
  }

  if (action.type === RESET_FORM) {
    return {
      enteredFirstName: "",
      enteredFirstNameIsTouched: false,
      enteredLastName: "",
      enteredLastNameIsTouched: false,
      enteredEmail: "",
      enteredEmailIsTouched: false,
      enteredZipCode: "",
      enteredZipCodeIsTouched: false,
      enteredCountry: "",
      enteredCountryIsTouched: false,
      enteredCity: "",
      enteredCityIsTouched: false,
      enteredAddress: "",
      enteredAddressIsTouched: false,
    };
  }

  return state;
};

const OrderMeals = () => {
  const [formState, dispatchFn] = useReducer(formReducer, {
    enteredFirstName: "",
    enteredFirstNameIsTouched: false,
    enteredLastName: "",
    enteredLastNameIsTouched: false,
    enteredEmail: "",
    enteredEmailIsTouched: false,
    enteredZipCode: "",
    enteredZipCodeIsTouched: false,
    enteredCountry: "",
    enteredCountryIsTouched: false,
    enteredCity: "",
    enteredCityIsTouched: false,
    enteredAddress: "",
    enteredAddressIsTouched: false,
  });

  const {
    enteredFirstName,
    enteredFirstNameIsTouched,
    enteredLastName,
    enteredLastNameIsTouched,
    enteredEmail,
    enteredEmailIsTouched,
    enteredZipCode,
    enteredZipCodeIsTouched,
    enteredCountry,
    enteredCountryIsTouched,
    enteredCity,
    enteredCityIsTouched,
    enteredAddress,
    enteredAddressIsTouched,
  } = formState;

  let formIsValid = false;

  const enteredFirstNameIsValid = enteredFirstName.trim() !== "";
  const enteredLastNameIsValid = enteredLastName.trim() !== "";
  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const enteredCountryIsValid = enteredCountry.trim() !== "";
  const enteredZipCodeIsValid = enteredZipCode.trim() !== "";
  const enteredCityIsValid = enteredCity.trim() !== "";
  const enteredAddressIsValid = enteredAddress.trim() !== "";

  const enteredValidity =
    enteredEmailIsValid &&
    enteredFirstNameIsValid &&
    enteredAddressIsValid &&
    enteredCountryIsValid &&
    enteredCityIsValid &&
    enteredCityIsValid &&
    enteredLastNameIsValid &&
    enteredZipCodeIsValid;

  const enteredFirstNameIsInValid =
    !enteredFirstNameIsValid && enteredFirstNameIsTouched;
  const enteredLastNameIsInValid =
    !enteredLastNameIsValid && enteredLastNameIsTouched;
  const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailIsTouched;
  const enteredZipCodeIsInValid =
    !enteredZipCodeIsValid && enteredZipCodeIsTouched;
  const enteredCountryIsInValid =
    !enteredCountryIsValid && enteredCountryIsTouched;
  const enteredCityIsInValid = !enteredCityIsValid && enteredCityIsTouched;
  const enteredAddressIsInValid =
    !enteredAddressIsValid && enteredAddressIsTouched;

  if (enteredValidity) {
    formIsValid = true;
  }

  const firstNameChangeHandler = (e) => {
    dispatchFn({ type: SET_FIRST_NAME, value: e.target.value });
  };

  const firstNameIsBlur = () => {
    dispatchFn({ type: SET_FIRST_NAME_TOUCHED });
  };

  const lastNameChangeHandler = (e) => {
    dispatchFn({ type: SET_LAST_NAME, value: e.target.value });
  };

  const lastNameIsBlur = () => {
    dispatchFn({ type: SET_LAST_NAME_TOUCHED });
  };

  const emailChangeHandler = (e) => {
    dispatchFn({ type: SET_EMAIL, value: e.target.value });
  };

  const emailIsBlur = () => {
    dispatchFn({ type: SET_EMAIL_TOUCHED });
  };

  const adressChangeHandler = (e) => {
    dispatchFn({ type: SET_ADRESS, value: e.target.value });
  };

  const adressIsBlur = () => {
    dispatchFn({ type: SET_ADRESS_TOUCHED });
  };

  const cityChangeHandler = (e) => {
    dispatchFn({ type: SET_CITY, value: e.target.value });
  };

  const cityIsBlur = () => {
    dispatchFn({ type: SET_CITY_TOUCHED });
  };

  const countryChangeHandler = (e) => {
    dispatchFn({ type: SET_COUNTRY, value: e.target.value });
  };

  const countryIsBlur = () => {
    dispatchFn({ type: SET_COUNTRY_TOUCHED });
  };

  const zipChangeHandler = (e) => {
    dispatchFn({ type: SET_ZIP_CODE, value: e.target.value });
  };

  const zipIsBlur = () => {
    dispatchFn({ type: SET_ZIP_CODE_TOUCHED });
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    dispatchFn({ type: SET_FIRST_NAME_TOUCHED });
    dispatchFn({ type: SET_LAST_NAME_TOUCHED });
    dispatchFn({ type: SET_EMAIL_TOUCHED });
    dispatchFn({ type: SET_ZIP_CODE_TOUCHED });
    dispatchFn({ type: SET_CITY_TOUCHED });
    dispatchFn({ type: SET_COUNTRY_TOUCHED });
    dispatchFn({ type: SET_ADRESS_TOUCHED });

    console.log(enteredFirstName);
    console.log(enteredAddress);
    console.log(enteredCity);
    console.log(enteredCountry);
    console.log(enteredEmail);
    console.log(enteredLastName);
    console.log(enteredZipCode);
    dispatchFn({ type: RESET_FORM });
  };

  const firstNameClass = enteredFirstNameIsInValid
    ? "form-control invalid"
    : "form-control";
  const lastNameClass = enteredLastNameIsInValid
    ? "form-control invalid"
    : "form-control";
  const EmailClass = enteredEmailIsInValid
    ? "form-control invalid"
    : "form-control";
  const ZipCodeClass = enteredZipCodeIsInValid
    ? "form-control invalid"
    : "form-control";
  const AddressClass = enteredAddressIsInValid
    ? "form-control invalid"
    : "form-control";
  const CityClass = enteredCityIsInValid
    ? "form-control invalid"
    : "form-control";
  const CountryClass = enteredCountryIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <>
      <button className="button goBack">GO BACK</button>
      <form className={"app"} onSubmit={formSubmissionHandler}>
        <h1>CHECKOUT</h1>

        {/* billing details */}
        <div className="control-group">
          <section className="Billing-details">
            <div className={firstNameClass}>
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
            <div className={lastNameClass}>
              <label htmlFor="name">Last Name</label>
              <input
                onBlur={lastNameIsBlur}
                onChange={lastNameChangeHandler}
                value={enteredLastName}
                className="lastName-label"
                type="text"
                id="name"
              />
            </div>

            <div className={EmailClass}>
              <label htmlFor="name">E-Mail Address</label>
              <input
                onBlur={emailIsBlur}
                onChange={emailChangeHandler}
                value={enteredEmail}
                type="text"
                id="name"
              />
            </div>
          </section>
        </div>
        {/* Shipping DETAILS */}

        <section className="shippingDetails">
          <div className={AddressClass}>
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
          <div className={ZipCodeClass}>
            <label htmlFor="name">Zip code</label>
            <input
              type="number"
              onBlur={zipIsBlur}
              value={enteredZipCode}
              onChange={zipChangeHandler}
              id="name"
            />
          </div>
          <div className={CityClass}>
            <label htmlFor="name">City</label>
            <input
              onBlur={cityIsBlur}
              onChange={cityChangeHandler}
              value={enteredCity}
              type="text"
              id="name"
            />
          </div>
          <div className={CountryClass}>
            <label htmlFor="name">Country</label>
            <input
              onBlur={countryIsBlur}
              onChange={countryChangeHandler}
              value={enteredCountry}
              type="text"
              id="name"
            />
          </div>
        </section>

        {/* Checkout button */}

        <section className="app">
          <div className={["form-actions"]}>
            <button className="button" disabled={!formIsValid}>
              Submit
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default OrderMeals;
