import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import MealItem from '../../MealItems/MealItem/MealItem'
import classes from './FoodItem.module.css'

const FoodItem = (props) => {
    const [mealArr ,setMealArr]=useState([])
    const param=useParams()

   

    const fetchData=async()=>{
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=21cc279360ce44d78b690e9c21a48844&type=${param.type?param.type :'main course'}&number=20`
          );
          const data = await response.json();
          localStorage.setItem(props.type,JSON.stringify(data.results))
          setMealArr(data.results);
    }
    
    useEffect(()=>{
        fetchData()
    },[param.type])
  return (
    <div className={classes.box}>
        {mealArr.map((item)=>{
           return <MealItem id={item.id} image={item.image} title={item.title} key={item.id}/>
        })}
    </div>
  )
}

export default FoodItem