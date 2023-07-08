import Modal from "../Body/MealBox";

const Carts = () => {
  const MealBoxArray = [
    {
      name: "Sushi",
      Amount: "3000",
      orders: "X 1",
    },
  ];
  return (
    <Modal>
      <main className="mealClassifications">
        <h1>{MealBoxArray[0].name}</h1>
        <section className="mealOrders">
          <p>{MealBoxArray[0].Amount}</p>
          <div className="mealOrderValue">
            <p>{MealBoxArray[0].orders}</p>
          </div>
        </section>
      </main>
      <aside>
        <button>-</button>
        <button>+</button>
      </aside>
    </Modal>
  );
};

export default Carts;
