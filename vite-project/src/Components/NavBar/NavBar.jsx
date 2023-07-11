import React, { useState } from "react";
import Nav from "../../Sass/NavBar.module.scss";
import { BsCart4 } from "react-icons/bs";
import HomeImg from "../../assets/meals.jpg";
import Carts from "../Carts/Carts";

const NavBar = (props) => {
  const [cart, setCart] = useState(false);
  const [mealValue, setMealValue] = useState(0);

  function valueInCart(item) {
    setMealValue(item);
  }

  function showCart() {
    setCart((prevCartValue) => !prevCartValue);
  }
  console.log(mealValue);

  return (
    <React.Fragment>
      <nav className={Nav.navbar}>
        <h1>Ejiro's Kitchen</h1>
        <div onClick={showCart} className={Nav["cart-section"]}>
          <BsCart4></BsCart4>
          <h4>Your Cart</h4>
          <div className={Nav.count}>
            <p>{mealValue}</p>
          </div>
        </div>
      </nav>
      <div className={Nav.image}>
        <img className={Nav["Curved-img"]} src={HomeImg} alt="" />
      </div>
      {cart && <Carts noOfValueInCart={valueInCart}></Carts>}
    </React.Fragment>
  );
};

export default NavBar;
