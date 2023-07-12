import React, { useContext, useEffect, useState } from "react";
import Nav from "../../Sass/NavBar.module.scss";
import { BsCart4 } from "react-icons/bs";
import HomeImg from "../../assets/meals.jpg";
import CartContex from "../../Context/CartContext";

const NavBar = (props) => {
  const cartCtx = useContext(CartContex);

  const numberOfCartItems = cartCtx.mealCart.reduce((curNumber, item) => {
    return curNumber + item.totalValue;
  }, 0);

  return (
    <React.Fragment>
      <nav className={Nav.navbar}>
        <h1>Ejiro's Kitchen</h1>
        <div onClick={props.onShowCart} className={Nav["cart-section"]}>
          <BsCart4></BsCart4>
          <h4>Your Cart</h4>
          <div className={Nav.count}>
            <p>{numberOfCartItems}</p>
          </div>
        </div>
      </nav>
      <div className={Nav.image}>
        <img className={Nav["Curved-img"]} src={HomeImg} alt="" />
      </div>
    </React.Fragment>
  );
};

export default NavBar;
