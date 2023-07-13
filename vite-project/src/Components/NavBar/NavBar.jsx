import React, { useContext } from "react";
import Nav from "../../Sass/NavBar.module.scss";
import { BsCart4 } from "react-icons/bs";
import HomeImg from "../../assets/meals.jpg";
import CartContex from "../../Context/CartContext";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    y: -250,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      type: "tween",
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
      <div className={Nav.image}>
        <img className={Nav["Curved-img"]} src={HomeImg} alt="" />
      </div>
    </React.Fragment>
  );
};

export default NavBar;
