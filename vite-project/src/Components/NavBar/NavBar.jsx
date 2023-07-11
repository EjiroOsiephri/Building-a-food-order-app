import React, { useState } from "react";
import Nav from "../../Sass/NavBar.module.scss";
import { BsCart4 } from "react-icons/bs";
import HomeImg from "../../assets/meals.jpg";
import Carts from "../Carts/Carts";

const NavBar = () => {
  const [cart, setCart] = useState(false);

  function showCart() {
    setCart((prevCartValue) => !prevCartValue);
  }

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
