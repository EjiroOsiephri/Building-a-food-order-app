import React, { useContext, useEffect, useState } from "react";
import Nav from "../../Sass/NavBar.module.scss";
import { BsCart4 } from "react-icons/bs";
import HomeImg from "../../assets/meals.jpg";
import CartContex from "../../Context/CartContext";
import { motion } from "framer-motion";

const NavBar = (props) => {
  const cartCtx = useContext(CartContex);

  const numberOfCartItems = cartCtx.mealCart.reduce((curNumber, item) => {
    return curNumber + item.totalValue;
  }, 0);

  return (
    <React.Fragment>
      <nav className={Nav.navbar}>
        <motion.h1
          initial={{ y: -250 }}
          animate={{
            y: 0,
          }}
        >
          Ejiro's Kitchen
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={props.onShowCart}
          className={Nav["cart-section"]}
        >
          <BsCart4></BsCart4>
          <h4>Your Cart</h4>
          <div className={Nav.count}>
            <p>{numberOfCartItems}</p>
          </div>
        </motion.div>
      </nav>
      <div className={Nav.image}>
        <img className={Nav["Curved-img"]} src={HomeImg} alt="" />
      </div>
    </React.Fragment>
  );
};

export default NavBar;
