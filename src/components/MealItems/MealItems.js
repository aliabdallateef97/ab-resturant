import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import MealItem from "./MealItem/MealItem";
import classes from "./MealItems.module.css";
import { Link } from "react-router-dom";

const MealItems = (props) => {
  const [mealItems, setMealItems] = useState([]);

  useEffect(() => {
    getMealType();
  }, []);

  const getMealType = async () => {
    const check=localStorage.getItem(props.type)
    if(check){
      setMealItems(JSON.parse(check))
    }else{
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=21cc279360ce44d78b690e9c21a48844&type=${props.type}&number=9`
    );
    const data = await response.json();
    localStorage.setItem(props.type,JSON.stringify(data.results))
    setMealItems(data.results);
    console.log(mealItems);
  };
}


  return (
    <div>
      <div className={classes.section}>
        <Link to={`/meal-items/${props.type}`} className={classes.link}>{props.title}</Link>
        <div>
          <Splide options={{
            fixedWidth:"270px",
            arrows:false,
            pagination:false,
            drag:"free",
            gap:'2rem'
          }}>
            {mealItems.map((item) => {
              return (
                <SplideSlide key={item.id}>
                  <MealItem
                    image={item.image}
                    title={item.title}
                    id={item.id}
                  />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default MealItems;
