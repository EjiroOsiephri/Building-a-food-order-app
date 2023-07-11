import React, { useState } from "react";
import MealItemForm from "./MealItemForm";
import MainBody from "../../Sass/MainHeader.module.scss";
import CartContex from "../../Context/CartContext";

function Availablemeal(props) {
  const [arrayItemsValue, setArrayItemsValue] = useState(1);
  const MealSection = {
    FirstArr: [
      {
        Name: "Jollof Rice and Chicken",
        Ingredients: "Rice and Chicken",
        Amount: 1200,
        id: "m1",
        quantity: 1,
      },
    ],
    SecondArr: [
      {
        Name: "Eba and Egusi Soup",
        Ingredients: "Garri and White-Seed-Melon",
        Amount: 1500,
        id: "m2",
        quantity: 1,
      },
    ],
    ThirdArr: [
      {
        Name: "Sushi",
        Ingredients: "Finest fish and vegies",
        Amount: 3000,
        id: "m3",
        quantity: 1,
      },
    ],
    FourthArr: [
      {
        Name: "Berbecue Burger",
        Ingredients: "American, raw and healthy",
        Amount: 1500,
        id: "m4",
        quantity: 1,
      },
    ],
  };
  const mealSectionArray = Object.values(MealSection);

  const addMeals = (item) => {
    props.addMeals(item);
  };

  function arrayItems(item) {
    props.arrayItems(item);
  }

  return (
    <CartContex.Provider
      value={{
        mealSectionArray: mealSectionArray,
      }}
    >
      <main className={MainBody.mealSection}>
        {mealSectionArray.map((item, index) => {
          return (
            <aside key={item[0].id} className={MainBody.MealSectionBody}>
              <div className={MainBody.mealSectionText}>
                <h2>{item[0].Name}</h2>
                <h4>{item[0].Ingredients}</h4>
                <h1>{item[0].Amount}</h1>
              </div>
              <aside className={MainBody.mealSectionLogic}>
                <div className={MainBody.mealSectionInput}>
                  <label htmlFor={mealSectionArray[0].id}>Amount</label>
                  <MealItemForm
                    index={index}
                    item={item[0]}
                    addMeals={addMeals}
                    arrayItems={arrayItems}
                  />
                </div>
                <hr />
              </aside>
            </aside>
          );
        })}
      </main>
    </CartContex.Provider>
  );
}
export default Availablemeal;
