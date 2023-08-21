import React, { useContext, useState } from "react";
import Classes from "../Sass/signup.module.scss";
import logo from "../assets/downloadEjiro.png";
import google from "../assets/google.png";
import { auth, provider } from "../Firebase/Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import SignAuth from "../Context/Sign-Auth";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [userLoggedIn, setIsLoggedIn] = useState(false);

  const setUserIsLoggedIn = () => {
    setIsLoggedIn(true);
  };

  const ctx = useContext(SignAuth);

  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        ctx.loginWithGoogle(credential.idToken);
        navigate("/ordermeals/all/");
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(credential.message);
      });
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSignUpwithEmail = async (e) => {
    e.preventDefault();
    let url;
    if (userLoggedIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2EHUbjhBBzh1NXaOEn-QrqLrK2dUF2A8";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2EHUbjhBBzh1NXaOEn-QrqLrK2dUF2A8";
    }
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      ctx.signUp(data.idToken);
      navigate("/ordermeals/all/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <main className={Classes.SignUp}>
        <aside className={Classes["logo-section"]}>
          <img src={logo} alt="" />
          <h4>Ejiro's Kitchen</h4>
        </aside>
        <aside className={Classes["header-section-sign-up"]}>
          <h1>{userLoggedIn ? "Log in" : "Sign up to get started"}</h1>
        </aside>
        <section className={Classes["signinwithgoogle"]}>
          <button onClick={signInWithGoogle}>
            <img src={google} alt="" />{" "}
            <span>
              {userLoggedIn ? "Sign in with Google" : "Sign up with Google"}
            </span>
          </button>
        </section>
        <p>or</p>
        <form onSubmit={handleSignUpwithEmail}>
          <div className={Classes["email-section"]}>
            <label htmlFor="">What's your email</label>
            <input
              onChange={handleEmailChange}
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className={Classes["password-section"]}>
            <label htmlFor="">
              {userLoggedIn ? "Password" : "Create a password"}
            </label>
            <input
              onChange={handlePasswordChange}
              type="password"
              placeholder="Create a password"
            />
          </div>
          <div className={Classes["sign-up-btn"]}>
            <button>Sign {userLoggedIn ? "in" : "up"}</button>
          </div>
        </form>
        <div className={Classes["login-div"]}>
          <p>Already have an account</p>
          <Link onClick={setUserIsLoggedIn}>Log in</Link>
        </div>
      </main>
    </>
  );
};

export default SignUp;
