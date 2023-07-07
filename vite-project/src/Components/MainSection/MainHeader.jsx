import React from "react";
import NavBar from "../NavBar/NavBar";
import BodyModal from "../Body/BodyModal";
import MainBody from "../../Sass/MainHeader.module.scss";

const MainHeader = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <BodyModal></BodyModal>
    </React.Fragment>
  );
};

export default MainHeader;
