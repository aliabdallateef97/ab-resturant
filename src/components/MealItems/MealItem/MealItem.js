import classes from "./MealItem.module.css";
import {Link} from 'react-router-dom'

const MealItem = (props) => {
  return (
   <Link to={`/meal-item/${props.id}`}>
     <div className={classes.card}>
      <div className={classes.image}>
        <img src={props.image} />
      </div>
      <div className={classes.title}>
        <p>{props.title}</p>
      </div>
    </div>
   </Link>
  );
};

export default MealItem;
