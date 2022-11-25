import classes from './SectionTitle.module.css'

const SectionTitle = (props) => {
  return (
    <div className={classes.title}>
        <h2>{props.children}</h2>
    </div>
  )
}

export default SectionTitle