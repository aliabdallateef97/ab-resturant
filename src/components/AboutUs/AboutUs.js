import React from "react";
import classes from './AboutUs.module.css'
import AboutusImage from '../../asset/1.png'
import SectionTitle from "../UI/SectionTitle/SectionTitle";

const AboutUs = () => {
  return (
    <div className={classes.aboutus}>
        <SectionTitle>About US</SectionTitle>
        <div className={classes.main}>
        <h3>
          We offer you the most delicious dishes such as Seafood ,Salads ,Stew
          ,Vegan Stew ,Fast Food ,Desserts ,Drinks and all other types.
        </h3>
      <div className={classes.image}>
            <img src={AboutusImage} alt="about-us" />
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
