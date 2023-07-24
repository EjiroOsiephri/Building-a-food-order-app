import React, { useContext, useState } from "react";
import Nav from "../../Sass/NavBar.module.scss";
import { BsCart4 } from "react-icons/bs";
import HomeImg from "../../assets/meals.jpg";
import CartContex from "../../Context/CartContext";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: -250,
  },
  visible: {
    x: 0,
    color: "white",
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
      mass: 0.4,
      damping: 8,
      yoyo: Infinity,
    },
  },
};

const NavBar = (props) => {
  const cartCtx = useContext(CartContex);

  const numberOfCartItems = cartCtx.mealCart.reduce((curNumber, item) => {
    return curNumber + item.totalValue;
  }, 0);

  return (
    <React.Fragment>
      <nav className={Nav.navbar}>
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          Ejiro's Kitchen
        </motion.h1>
        <div onClick={props.onShowCart} className={Nav["cart-section"]}>
          <BsCart4></BsCart4>
          <h4>Your Cart</h4>
          <motion.div className={Nav.count}>
            <p>{numberOfCartItems}</p>
          </motion.div>
        </div>
      </nav>
      {!props.showImg && (
        <div className={Nav.image}>
          <img className={Nav["Curved-img"]} src={HomeImg} alt="" />
        </div>
      )}
    </React.Fragment>
  );
};

export default NavBar;
