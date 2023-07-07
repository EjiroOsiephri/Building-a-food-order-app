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
        id: 1,
      },
    ],
    SecondArr: [
      {
        Name: "Eba and Egusi Soup",
        Ingredients: "Garri and White-Seed-Melon",
        Amount: 1500,
        id: 2,
      },
    ],
    ThirdArr: [
      {
        Name: "Sushi",
        Ingredients: "Finest fish and vegies",
        Amount: 3000,
        id: 3,
      },
    ],
    FourthArr: [
      {
        Name: "Berbecue Burger",
        Ingredients: "American, raw and healthy",
        Amount: 1500,
        id: 4,
      },
    ],
  };

  const mealSectionArray = Object.values(MealSection);

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <BodyModal></BodyModal>

      <div className={MainBody.mealSection}>
        {mealSectionArray.map((item) => {
          return (
            <div key={item[0].id} className={MainBody.MealSectionBody}>
              <div className={MainBody.mealSectionText}>
                <h2>{item[0].Name}</h2>
                <h4>{item[0].Ingredients}</h4>
                <h1>{item[0].Amount}</h1>
              </div>
              <div className={MainBody.mealSectionLogic}>
                <div className={MainBody.mealSectionInput}>
                  <h2>Amount</h2>
                  <input type="number" />
                </div>
                <button>+ Add</button>
              </div>
              <div className={MainBody.line}>
                <hr />
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
