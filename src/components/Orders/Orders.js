import {useEffect} from 'react'
import classes from './Orders.module.css'
import {fetchOrders} from '../../store/order-actions'
import { useDispatch ,useSelector} from 'react-redux'
import LoadingSpinner from '../UI/Spinner/LoadingSpinner'
import OrdersItem from './OrdersItem/OrdersItem'

const Orders = () => {
    const dispatch=useDispatch()
    const orders=useSelector(state=>state.order.orders)
    const userId=useSelector(state=>state.auth.userId)
    const showSpiner=useSelector(state=>state.order.spinnerMode)

    useEffect(()=>{
        dispatch(fetchOrders())
    },[dispatch])

    let ordersArray=<LoadingSpinner />
    if(!showSpiner){
        const orderss=[]
        for(let key in orders){
            if(orders[key].userId ===userId){
                orderss.push({
                    ...orders[key],
                    id:key
                })
            }
        }
        ordersArray=orderss.map(order=>{
            return <OrdersItem key={order.id} name={order.name} price={order.cart.totalPrice} items={order.cart.items}/>
        })
    }

  return (
    <div className={classes.Orders}>{ordersArray}</div>
  )
}

export default Orders