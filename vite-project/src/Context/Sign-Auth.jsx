import React, { useState } from "react";

const SignAuth = React.createContext({
  isLoggedIn: false,
  token: "",
  signUpWithGoogle: (token) => {},
  signUp: () => {},
  signIn: () => {},
  logout: () => {},
});

export default SignAuth;

export const SignAuthProvider = (props) => {
  const [token, setToken] = useState(null);
  const [emailToken, setEmailToken] = useState(null);

  let userIsLoggedIn = !!token;

  let emailLogIn = !!emailToken;

  const signUpWithGoogle = (token) => {
    setToken(token);
  };

  const signUp = (token) => {
    setEmailToken(token);
  };

  const contextValue = {
    isLoggedIn: userIsLoggedIn,
    token: token,
    loginWithGoogle: signUpWithGoogle,
    emailLogIn,
    signUp,
  };

  return (
    <SignAuth.Provider value={contextValue}>{props.children}</SignAuth.Provider>
  );
};
