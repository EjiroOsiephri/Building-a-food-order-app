import React, { useRef, useState } from "react";
import NavBar from "../NavBar/NavBar";
import BodyModal from "../Body/BodyModal";
import Availablemeal from "./Availablemeal";
const MainHeader = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <BodyModal></BodyModal>
      <Availablemeal></Availablemeal>
    </React.Fragment>
  );
};

export default MainHeader;
