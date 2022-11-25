import FoodItems from "../components/FoodItems/FoodItems"
import {motion} from 'framer-motion'

const Meals= () => {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.7}}
    >
      <FoodItems />
    </motion.div>
  )
}

export default Meals