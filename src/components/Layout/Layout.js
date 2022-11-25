import React from 'react'
import MainHeader from '../MainHeader/MainHeader'
import classes from './Layout.module.css'
import SideDrawer from '../SideDrawer/SideDrawer'
import { useState } from 'react'
import BackDrop from '../UI/BackDrop/BackDrop'

const Layout = (props) => {
  const [isOpenDrawer ,setIsOpenDrawer]=useState(false)

  const tuggleHandler=()=>{
  setIsOpenDrawer((prevState)=> !prevState)
  }

  const tuggleBackDrop=()=>{
    setIsOpenDrawer(false)
  }
  
  return (
    <div className={classes.layout}>
      {isOpenDrawer && <BackDrop onTuggle={tuggleBackDrop}/>}
        <MainHeader clicked={tuggleHandler}/>
        <SideDrawer isOpen={isOpenDrawer}/>
        <main className={classes.main}>
            {props.children}
        </main>
    </div>
  )
}

export default Layout