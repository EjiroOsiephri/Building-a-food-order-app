import MealBoxStyles from "../../Sass/Mealbox.module.scss";
import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return (
    <div className={MealBoxStyles.modal}>
      <div className={MealBoxStyles.content}>{props.children}</div>
    </div>
  );
};

const BackDropOverlay = (props) => {
  return <div className={MealBoxStyles.backdrop}></div>;
};

const portalElement = document.getElementById("overlays");

const MealBox = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Modal>{props.children}</Modal>, portalElement)}
      {ReactDOM.createPortal(<BackDropOverlay />, portalElement)}
    </React.Fragment>
  );
};

export default MealBox;
