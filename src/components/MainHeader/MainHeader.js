import classes from "./MainHeader.module.css";
import Logo from "../UI/Logo/Logo";
import Cart from "../UI/Cart/Cart";
import NavItems from "./NavItems/NavItems";
import { FiMenu } from "react-icons/fi";

const MainHeader = (props) => {
 
  return (
    <header className={classes.header}>
      <div className={classes.navbar}>
        <FiMenu onClick={props.clicked} />
        <div className={classes.logo}>
          <Logo />
        </div>
        <div className={classes.nav}>
          <div className={classes.navItems}>
            <NavItems />
          </div>
          <div className={classes.cart}>
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
