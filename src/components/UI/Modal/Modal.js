import classes from "./Modal.module.css";
import { Fragment } from "react";
import  ReactDOM  from "react-dom";

const Overlay=(props)=> <div className={classes.overlay} onClick={props.onClose}></div>
const ModalOverlay=(props)=> <div className={classes.Modal}>{props.children}</div>

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Overlay onClose={props.onClose}/>,document.getElementById('overlay'))}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('modal'))}
    </Fragment>
  );
};

export default Modal