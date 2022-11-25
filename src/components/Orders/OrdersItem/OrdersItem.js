import React from 'react'
import classes from './OrdersItem.module.css'

const OrdersItem = (props) => {
  return (
    <div className={classes.item}>
        <p><span className={classes.title}>Name</span> : {props.name}</p>
        <p><span className={classes.title}>Order</span> : {props.items.map(item=> <span key={item.id}>{item.title} ( {item.quantity} ) , </span>)}</p>
        <p><span className={classes.title}>Total Price</span> : ${props.price.toFixed(2)}</p>
    </div>
  )
}

export default OrdersItem