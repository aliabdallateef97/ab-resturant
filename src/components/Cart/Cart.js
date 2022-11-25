import classes from './Cart.module.css';
import { Fragment } from 'react';
import CartItem from './CartItem';
import {useSelector,useDispatch} from 'react-redux'
import Modal from '../UI/Modal/Modal'
import { cartActions } from '../../store/cart';
import CheckOut from './CheckOut';
import { useState } from 'react';
import Spinner from '../UI/Spinner/LoadingSpinner'


const Cart = (props) => {
  const items=useSelector(state =>state.cart.items)
  const totalPrice=useSelector(state=>state.cart.totalPrice.toFixed(2))
  const spinnerMode=useSelector(state=>state.order.spinnerMode)
  const dispatch=useDispatch()
  const [isCheckout,setIsCheckOut]=useState(false)
  const hasItems =items.length >0

  const unShowCart=()=>{
    dispatch(cartActions.showCart())
  }

  const showCheckOut=()=>{
    setIsCheckOut(true)
  }

  const addItem=(item)=>{
    const mealItem={
      ...item,
      quantity:+1
    }
    dispatch(cartActions.addItem(mealItem))
  }

  const removeItem=(id)=>{
    dispatch(cartActions.removeItem(id))
  }

  const cartItems = (
    <ul className={classes.cartItems}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
          onRemove={()=>removeItem(item.id)}
          onAdd={()=>addItem(item)}
        />
      ))}
    </ul>
  )

  let cart= <Spinner />
  if(!spinnerMode){
    cart=(
      <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Price</span>
        <span>${totalPrice}</span>
      </div>
      {isCheckout && <CheckOut close={unShowCart}/>}
      {!isCheckout && <div className={classes.actions}>
        <button className={classes.closeButton} onClick={unShowCart}>
          Close
        </button>
        <button className={classes.button} onClick={showCheckOut} disabled={!hasItems}>Order</button>
      </div>}
      </Fragment>
    )
  }

  return (
    <Modal>
      {cart}
    </Modal>
  );
};

export default Cart;