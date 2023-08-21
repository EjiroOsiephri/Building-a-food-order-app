import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SignAuthProvider } from "./Context/Sign-Auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SignAuthProvider>
        <App />
      </SignAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
