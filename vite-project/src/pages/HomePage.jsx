import { Fragment } from "react";
import Classes from "../Sass/HomeNav.module.scss";
import { Link } from "react-router-dom";
import BgImg from "../assets/downloadEjiro.png";
import Restaurant from "../assets/restaurant.jpg";
import { Cursor } from "react-simple-typewriter";

const HomeNavBar = () => {
  return (
    <Fragment>
      <nav className={Classes.navbar}>
        <div className={Classes.imgFlex}>
          <img src={BgImg} alt="" />
          <h1>Ejiro's Kitchen</h1>
        </div>
        <div className={Classes["login-page"]}>
          <ul>
            <li>
              <Link>Sign In</Link>
            </li>
            <li>
              <Link>Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={Classes["Main-text-div"]}>
        <img src={Restaurant} alt="" />
        <div className="text-section"></div>
      </div>
    </Fragment>
  );
};

export default HomeNavBar;
