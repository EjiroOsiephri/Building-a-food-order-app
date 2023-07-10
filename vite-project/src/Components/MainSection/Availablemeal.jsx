import React, { useState } from "react";
import MealItemForm from "./MealItemForm";
import MainBody from "../../Sass/MainHeader.module.scss";
import CartContex from "../../Context/CartContext";
import Carts from "../Carts/Carts";

function Availablemeal() {
  const [mealCart, setMealToCart] = useState(null);

  const MealSection = {
    FirstArr: [
      {
        Name: "Jollof Rice and Chicken",
        Ingredients: "Rice and Chicken",
        Amount: 1200,
        id: "m1",
      },
    ],
    SecondArr: [
      {
        Name: "Eba and Egusi Soup",
        Ingredients: "Garri and White-Seed-Melon",
        Amount: 1500,
        id: "m2",
      },
    ],
    ThirdArr: [
      {
        Name: "Sushi",
        Ingredients: "Finest fish and vegies",
        Amount: 3000,
        id: "m3",
      },
    ],
    FourthArr: [
      {
        Name: "Berbecue Burger",
        Ingredients: "American, raw and healthy",
        Amount: 1500,
        id: "m4",
      },
    ],
  };
  const mealSectionArray = Object.values(MealSection);

  const addMeals = (item) => {
    setMealToCart(item);
  };

  return (
    <CartContex.Provider
      value={{
        addMealsToCart: mealCart,
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
                    Name={mealSectionArray[0].Name}
                    id={mealSectionArray[0].id}
                    Ingredients={mealSectionArray[0].Ingredients}
                    Amount={mealSectionArray[0].Amount}
                    addMeals={addMeals}
                  />
                </div>
                <hr />
              </aside>
            </aside>
          );
        })}
        {<Carts></Carts>}
      </main>
    </CartContex.Provider>
  );
}
export default Availablemeal;
