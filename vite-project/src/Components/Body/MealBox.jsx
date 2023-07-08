import MealBoxStyles from "../../Sass/Mealbox.module.scss";
import React from "react";

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

const MealBox = (props) => {
  return (
    <React.Fragment>
      <Modal></Modal>
      <BackDropOverlay></BackDropOverlay>
    </React.Fragment>
  );
};

export default Modal;
