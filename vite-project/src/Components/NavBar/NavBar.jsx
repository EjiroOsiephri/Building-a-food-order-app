import React, { useContext, useState } from "react";
import Nav from "../../Sass/NavBar.module.scss";
import { BsCart4 } from "react-icons/bs";
import HomeImg from "../../assets/meals.jpg";
import Carts from "../Carts/Carts";
import CartContex from "../../Context/CartContext";

const NavBar = (props) => {
  const cartCtx = useContext(CartContex);

  const [cart, setCart] = useState(false);
  const [cartText, setCartText] = useState("");

  function showCart() {
    setCart((prevValue) => !prevValue);
  }

  console.log(cartCtx.addMealsToCart);

  return (
    <React.Fragment>
      <nav className={Nav.navbar}>
        <h1>Ejiro's Kitchen</h1>
        <div onClick={showCart} className={Nav["cart-section"]}>
          <BsCart4></BsCart4>
          <h4>Your Cart</h4>
          <div className={Nav.count}>
            <p>3</p>
          </div>
        </div>
      </nav>
      <div className={Nav.image}>
        <img className={Nav["Curved-img"]} src={HomeImg} alt="" />
      </div>
      {cart && <Carts></Carts>}
    </React.Fragment>
  );
};

export default NavBar;
