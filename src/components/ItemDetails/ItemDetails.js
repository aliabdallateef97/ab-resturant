import {useEffect,useState,useRef} from "react";
import classes from "./ItemDetail.module.css";
import {useParams} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const ItemDetails = () => {
    const [itemData ,setItemData]=useState({})
    const dispatch=useDispatch()
    const param =useParams()
    const price=(itemData.pricePerServing/100).toFixed(2)
    const inputRef=useRef()

    const addItemHandler=(event)=>{
      event.preventDefault()
      const item={
        title:itemData.title,
        price:+price,
        id:param.id,
        quantity:+inputRef.current.value
      }
      dispatch(cartActions.addItem(item))
    }

    const fetchDetail=async()=>{
        const response = await fetch(
            `https://api.spoonacular.com/recipes/${param.id}/information?apiKey=21cc279360ce44d78b690e9c21a48844`
          );
          const data = await response.json();
          setItemData(data);
    }

    useEffect(()=>{
        fetchDetail()
    },[param.id])

    
  return (
    <div className={classes.detail}>
      <h2>{itemData.title}</h2>
      <div className={classes.box}>
        <img src={itemData.image} alt="detail"/>
     <div className={classes.contain}>
     <div className={classes.summary}>
       <h3>Summary</h3>
       <p dangerouslySetInnerHTML={{__html:itemData.summary}}></p>
       </div>
       <h3>Price: ${price}</h3>
        <form onSubmit={addItemHandler} className={classes.add}>
          <input type="number" min="1"  step='1'defaultValue= '1' ref={inputRef}/>
          <button>Add to Cart</button>
        </form>
     </div>
      </div>
    </div>
  );
};

export default ItemDetails;
