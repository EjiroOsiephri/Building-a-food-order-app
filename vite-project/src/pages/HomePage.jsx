import { Fragment } from "react";
import Classes from "../Sass/HomeNav.module.scss";
import { Link } from "react-router-dom";
import BgImg from "../assets/downloadEjiro.png";
import Restaurant from "../assets/restaurant.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HomeNavBar = () => {
  const [text] = useTypewriter({
    words: ["You don Chow?", "Se O ti Jeun?", "Have You Eaten?"],
    loop: 3,
    deleteSpeed: 130,
    typeSpeed: 100,
  });
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
        <div className={Classes["text-section"]}>
          <h1>{text}</h1>
        </div>
        <div className={Classes["brief-setion"]}>
          <h1>Ejiro's kitchen has you covered</h1>
          <h3>
            Hungry? Too tired to cook? Have friends over, or do you simply need
            to chop life? Try us , and let’s deliver happiness to your doorstep
            in minutes.
          </h3>
          <button>Get Started</button>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeNavBar;
