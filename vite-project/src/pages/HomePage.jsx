import { Fragment } from "react";
import Classes from "../Sass/HomeNav.module.scss";

const HomeNavBar = () => {
  return (
    <Fragment>
      <nav className={Classes.navbar}>
        <h1>Ejiro's Kitchen</h1>
        <div className="login-page">
          <li>Sign In</li>
          <li>Sign up</li>
        </div>
      </nav>
    </Fragment>
  );
};

export default HomeNavBar;
