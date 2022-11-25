import {NavLink} from 'react-router-dom'
import classes from './ItemName.module.css'

const ItemName = () => {
  return (
    <div className={classes.boxTitle}>
        <div className={classes.title}>
        <NavLink className={(navData)=>navData.isActive?classes.active : ''} to='/meal-items/main course'>Main Course</NavLink>
        </div>
        <div className={classes.title}>
        <NavLink className={(navData)=>navData.isActive?classes.active : ''} to='/meal-items/side dish'>Side Dish</NavLink>
        </div>
        <div className={classes.title}>
        <NavLink to='/meal-items/appetizer' className={(navData)=>navData.isActive?classes.active : ''}>Appetizer</NavLink>
        </div>
        <div className={classes.title}>
        <NavLink to='/meal-items/salad' className={(navData)=>navData.isActive?classes.active : ''}>Salad</NavLink>
        </div>
        <div className={classes.title}>
        <NavLink to='/meal-items/soup' className={(navData)=>navData.isActive?classes.active : ''}>Soup</NavLink>
        </div>
        <div className={classes.title}>
        <NavLink to='/meal-items/sauce' className={(navData)=>navData.isActive?classes.active : ''}>Sauce</NavLink>
        </div>
        <div className={classes.title}>
        <NavLink to='/meal-items/drink' className={(navData)=>navData.isActive?classes.active : ''}>Drink</NavLink>
        </div>
        <div className={classes.title}>
        <NavLink to='/meal-items/dessert' className={(navData)=>navData.isActive?classes.active : ''}>Dessert</NavLink>
        </div>
        
        
        
        
        

    </div>
  )
}

export default ItemName