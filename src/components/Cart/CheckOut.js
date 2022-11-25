import classes from "./CheckOut.module.css";
import useInput from "../../hook/useInput";
import {sendOrderData} from '../../store/order-actions'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const CheckOut = (props) => {
  const cart =useSelector(state=>state.cart)
  const userId=useSelector(state=>state.auth.userId)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {
    value: name,
    inputIsValid: nameIsValid,
    enteredInputIsInvalid: enteredNameISInvalid,
    blureInputHandler: blurNameHandler,
    changeInputHandler: changeNameHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: site,
    inputIsValid: siteIsValid,
    enteredInputIsInvalid: enteredSiteISInvalid,
    blureInputHandler: blurSiteHandler,
    changeInputHandler: changeSiteHandler,
    reset: siteReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: number,
    inputIsValid: numberIsValid,
    enteredInputIsInvalid: enteredNumberISInvalid,
    blureInputHandler: blurNumberHandler,
    changeInputHandler: changeNumberHandler,
    reset: numberReset,
  } = useInput((value) => value.length > 6);

  let formIsValid= nameIsValid && numberIsValid && siteIsValid

  const sendOrder = (event) => {
    event.preventDefault();

    if (!formIsValid) {
        blurNameHandler()
        blurNumberHandler()
        blurSiteHandler()
      return;
    }
    const order={
      cart:{
        items:cart.items,
        totalQuantity:cart.totalQuantity,
        totalPrice:cart.totalPrice,
      },
      name:name,
      site:site,
      number:number,
      userId:userId
    }
    dispatch(sendOrderData(order))
    navigate('/home')
    nameReset();
    siteReset();
    numberReset()
  };

  const nameClass = `${classes.control} ${
    enteredNameISInvalid ? classes.invalid : ""
  }`;

  const siteClass = `${classes.control} ${
    enteredSiteISInvalid ? classes.invalid : ""
  }`;

  const numberClass = `${classes.control} ${
    enteredNumberISInvalid ? classes.invalid : ""
  }`;



  return (
    <form className={classes.form} onSubmit={sendOrder}>
      <div className={nameClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={changeNameHandler}
          value={name}
          onBlur={blurNameHandler}
        />
        {enteredNameISInvalid && <p>Name can't be empty</p>}
      </div>
      <div className={siteClass}>
        <label htmlFor="site">Your Site</label>
        <input
          type="text"
          id="site"
          onChange={changeSiteHandler}
          value={site}
          onBlur={blurSiteHandler}
        />
        {enteredSiteISInvalid && <p>Site can't be empty</p>}
      </div>
      <div className={numberClass}>
        <label htmlFor="number">Your Number</label>
        <input
          type="text"
          id="number"
          onChange={changeNumberHandler}
          value={number}
          onBlur={blurNumberHandler}
        />
        {enteredNumberISInvalid && <p>Number must be at least 6 numbers</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.close}>
          Close
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckOut;
