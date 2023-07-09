import MealBox from "../Body/MealBox";
import Classes from "../../Sass/Carts.module.scss";
import CheckoutForm from "../Checkout/CheckoutForm";

const Carts = () => {
  const MealBoxArray = [
    {
      name: "Sushi",
      Amount: "3000",
      orders: "× 1",
    },
  ];
  return (
    <MealBox>
      <section className={Classes.totalMeals}>
        <main className={Classes.mealClassifications}>
          <h1>{MealBoxArray[0].name}</h1>
          <section className={Classes.mealOrders}>
            <p>${MealBoxArray[0].Amount}</p>
            <div className={Classes.mealOrderValue}>
              <p>{MealBoxArray[0].orders}</p>
            </div>
          </section>
          <hr />
        </main>
        <aside>
          <button>-</button>
          <button>+</button>
        </aside>
      </section>
      <CheckoutForm></CheckoutForm>
    </MealBox>
  );
};

export default Carts;
