import {FaShoppingCart} from 'react-icons/fa'
import classes from './Cart.module.css'
import {useSelector,useDispatch} from 'react-redux'
import { cartActions } from '../../../store/cart'

const Cart = () => {
  const quantity=useSelector(state=>state.cart.totalQuantity)
  const dispatch=useDispatch()

  const showCrtHandler=()=>{
    dispatch(cartActions.showCart())
  }
  return (
    <div className={classes.cart} onClick={showCrtHandler}>
        <FaShoppingCart/>
        <div className={classes.amount}>{quantity}</div>
    </div>
  )
}

export default Cart