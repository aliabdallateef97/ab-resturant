import classes from './BackDrop.module.css'
import ReactDom from 'react-dom'

const Overlay=(props)=>{
    return <div className={classes.overlay} onClick={props.onTuggle}/>
}

const BackDrop = (props) =>{
    return(
        ReactDom.createPortal(<Overlay onTuggle={props.onTuggle}/>,document.getElementById('overlay'))
    )
}


export default BackDrop