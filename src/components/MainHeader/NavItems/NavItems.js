import React from "react";
import classes from "./NavItems.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";

const NavItems = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch=useDispatch()

  const logoutHandler=()=>{
    dispatch(authActions.logout())
  }

  return (
    <ul className={classes.ul}>
      {isLoggedIn && (
        <React.Fragment>
          <li>
            <NavLink
              to="/home"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/meal-items/*`}
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Meal Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
            to='/auth'
              className={(navData) => (navData.isActive ? classes.active : "")}
              onClick={logoutHandler}
            >
              Logout
            </NavLink>
          </li>
        </React.Fragment>
      )}

      {!isLoggedIn && (
        <li>
          <NavLink
            to="/auth"
            className={(navData) => (navData.isActive ? classes.active : "")}
          >
            Login
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavItems;
