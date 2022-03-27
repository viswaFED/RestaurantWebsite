import MealsItem from "./Mealsitem";
import Card from "../UI/Card";
import classes from "./MealsList.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani",
    description: "Hyderabad Briyani",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Rayalaseema Chicken",
    description: "A rayalaseem specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Dosa",
    description: "Everyone's favourite",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Pizaa",
    description: "pizzaday",
    price: 18.99,
  },
];

const MealsList = () => {
  const listOfMeals = DUMMY_MEALS.map((meal) => (
    <MealsItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{listOfMeals}</ul>
        </Card>
    </section>
  );
};

export default MealsList;
