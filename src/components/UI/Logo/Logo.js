import React from 'react'
import classes from './Logo.module.css'
import {IoFastFood} from 'react-icons/io5'

const Logo = () => {
  return (
    <div className={classes.logo}>
    <IoFastFood />
    <p>A&B Resturant</p>
    </div>
  )
}

export default Logo