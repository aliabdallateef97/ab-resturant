import { useState ,useEffect } from "react";
import useInput from "../../hook/useInput";
import { useDispatch,useSelector } from "react-redux";
import { login,signup } from "../../store/auth-actions";
import classes from "./AuthForm.module.css";
import { useNavigate } from "react-router-dom";

let initial=true

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  useEffect(()=>{
    if(initial){
      initial=false
      return
    }
    if(isLoggedIn){
      navigate('/home')
    }
  },[isLoggedIn])



  const {
    value: email,
    inputIsValid: emailIsValid,
    enteredInputIsInvalid: enteredEmailISInvalid,
    blureInputHandler: blurEmailHandler,
    changeInputHandler: changeEmailHandler,
    reset: emailReset,
  } = useInput((value) => value.includes('@'));

  const {
    value: password,
    inputIsValid: passwordIsValid,
    enteredInputIsInvalid: enteredPasswordISInvalid,
    blureInputHandler: blurPasswordHandler,
    changeInputHandler: changePasswordHandler,
    reset: passwordReset,
  } = useInput((value) => value.length >= 6);

  let formIsValid = emailIsValid && passwordIsValid;

  const loginHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      blurEmailHandler();
      blurPasswordHandler();
      return;
    }
    if(isLogin){
      dispatch(login(email,password))
    }else{
      dispatch(signup(email,password))
    }
    emailReset()
    passwordReset()
  };

  const emailClass = `${classes.control} ${
    enteredEmailISInvalid ? classes.invalid : ""
  }`;

  const passClass = `${classes.control} ${
    enteredPasswordISInvalid ? classes.invalid : ""
  }`;

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={loginHandler}>
        <div className={emailClass}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            onChange={changeEmailHandler}
            value={email}
            onBlur={blurEmailHandler}
          />
          {enteredEmailISInvalid && <p>Email should have '@' in it.</p>}
        </div>
        <div className={passClass}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={changePasswordHandler}
            value={password}
            onBlur={blurPasswordHandler}
          />
          {enteredPasswordISInvalid && <p>Password length shouldbe at least 6.</p>}
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
