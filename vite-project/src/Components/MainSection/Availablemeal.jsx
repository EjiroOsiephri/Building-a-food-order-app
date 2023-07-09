import React from "react";
import MealItemForm from "./MealItemForm";
import MainBody from "../../Sass/MainHeader.module.scss";

function Availablemeal() {
  const MealSection = [
    {
      Name: "Jollof Rice and Chicken",
      Ingredients: "Rice and Chicken",
      Amount: "₦1200",
      id: "m1",
    },

    {
      Name: "Eba and Egusi Soup",
      Ingredients: "Garri and White-Seed-Melon",
      Amount: "₦1500",
      id: "m2",
    },

    {
      Name: "Sushi",
      Ingredients: "Finest fish and vegies",
      Amount: "₦3000",
      id: "m3",
    },

    {
      Name: "Berbecue Burger",
      Ingredients: "American, raw and healthy",
      Amount: "₦1500",
      id: "m4",
    },
  ];
  return (
    <React.Fragment>
      <main className={MainBody.mealSection}>
        {MealSection.map((item) => {
          return (
            <aside key={item.id} className={MainBody.MealSectionBody}>
              <div className={MainBody.mealSectionText}>
                <h2>{item.Name}</h2>
                <h4>{item.Ingredients}</h4>
                <h1>{item.Amount}</h1>
                <hr />
              </div>
              <aside className={MainBody.mealSectionLogic}>
                <div className={MainBody.mealSectionInput}>
                  <label htmlFor={MealSection.id}>Amount</label>
                  <MealItemForm
                    Name={MealSection.Name}
                    id={MealSection.id}
                    Ingredients={MealSection.Ingredients}
                    Amount={MealSection.Amount}
                  />
                </div>
                <hr />
              </aside>
            </aside>
          );
        })}
      </main>
    </React.Fragment>
  );
}
export default Availablemeal;
