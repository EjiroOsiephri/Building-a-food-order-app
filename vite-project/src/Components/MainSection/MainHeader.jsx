import React from "react";
import NavBar from "../NavBar/NavBar";
import BodyModal from "../Body/BodyModal";
import MainBody from "../../Sass/MainHeader.module.scss";

const MainHeader = () => {
  const MealSection = {
    FirstArr: [
      {
        Name: "Jollof Rice and Chicken",
        Ingredients: "Rice and Chicken",
        Amount: 1200,
      },
    ],
    SecondArr: [
      {
        Name: "Eba and Egusi Soup",
        Ingredients: "Garri and White-Seed-Melon",
        Amount: 1500,
      },
    ],
    ThirdArr: [
      {
        Name: "Sushi",
        Ingredients: "Finest fish and vegies",
        Amount: 3000,
      },
    ],
    FourthArr: [
      {
        Name: "Berbecue Burger",
        Ingredients: "American raw and healthy",
        Amount: 1500,
      },
    ],
  };

  const mealSectionArray = Object.values(MealSection);

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <BodyModal></BodyModal>

      <div className="mealSection">
        {mealSectionArray.map((item) => {
          console.log(item[0].Name);
        })}
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
