import { Fragment } from "react";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import MealItems from "./MealItems";

const Items = () => {
  return (
    <Fragment>
      <SectionTitle>Meal Items</SectionTitle>
      <MealItems type="main course" title="Main Course" />
      <MealItems type="side dish" title="Side dish" />
      <MealItems type="appetizer" title="Appetizer" />
      <MealItems type="salad" title="Salad" />
      <MealItems type="soup" title="Soup" />
      <MealItems type="sauce" title="Sauce" />
      <MealItems type="drink" title="Drink" />
      <MealItems type="dessert" title="Dessert" />
    </Fragment>
  );
};

export default Items;
