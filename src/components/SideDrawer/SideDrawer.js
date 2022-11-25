import classes from './SideDrawer.module.css'
import Logo from '../UI/Logo/Logo'
import NavItems from '../MainHeader/NavItems/NavItems'

const SideDrawer = (props) => {

  const SideDrawerClasses=[`${classes.SideDrawer} ${props.isOpen ? classes.open :classes.close}`]
 
  return (
    <div className={SideDrawerClasses}>
        <div className={classes.logo}>
            <Logo />
        </div>
        <div className={classes.nav}>
            <NavItems />
        </div>
    </div>
  )
}

export default SideDrawer