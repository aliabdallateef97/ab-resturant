import React from "react";
import classes from "./Landing.module.css";
import LandingImg from "../../asset/4.png";

const Landing = () => {
  return (
    <div className={classes.landing}>
      <div className={classes.text}>
        <h1>
            Welcome In A&B Resturant
        </h1>
        <p>Thank you for visiting our website, we are the best choice for you.</p>
        <p>We always aspire to meet the expixtation that you have of us</p>
      </div>
      <div className={classes.image}>
        <img src={LandingImg} alt="landing" />
      </div>
    </div>
  );
};

export default Landing;
