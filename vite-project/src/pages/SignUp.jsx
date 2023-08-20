import React from "react";
import Classes from "../Sass/signup.module.scss";
import logo from "../assets/downloadEjiro.png";
import google from "../assets/google.png";

const SignUp = () => {
  return (
    <>
      <main className={Classes.SignUp}>
        <aside className={Classes["logo-section"]}>
          <img src={logo} alt="" />
          <h4>Ejiro's Kitchen</h4>
        </aside>
        <aside className={Classes["header-section-sign-up"]}>
          <h1>Sign up to get started</h1>
        </aside>
        <section className={Classes["signinwithgoogle"]}>
          <button>
            <img src={google} alt="" /> <span>Sign up with Google</span>
          </button>
        </section>
        <p>or</p>
        <form>
          <div className={Classes["email-section"]}>
            <label htmlFor="">What's your email</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className={Classes["password-section"]}>
            <label htmlFor="">Create a password</label>
            <input type="password" placeholder="Create a password" />
          </div>
        </form>
        <div className={Classes["sign-up-btn"]}>
          <button>Sign up</button>
        </div>
      </main>
    </>
  );
};

export default SignUp;
