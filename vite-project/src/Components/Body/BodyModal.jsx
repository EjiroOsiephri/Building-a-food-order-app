import React from "react";
import Modal from "../../Sass/BodyModal.module.scss";
import { motion } from "framer-motion";

const BodyModal = () => {
  return (
    <React.Fragment>
      <motion.main className={Modal.BodyModal}>
        <h1>Delicious food, Right at your doorstep</h1>
        <h4>
          Choose your Favorite meal over our broad section of available meals
        </h4>
        <h4>
          All our meals are cooked with the required ingredient to ensure good
          health, and off course they are made by delicious chefs
        </h4>
      </motion.main>
    </React.Fragment>
  );
};

export default BodyModal;
