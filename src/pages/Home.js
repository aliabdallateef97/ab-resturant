import Landing from '../components/Landing/Landing'
import AboutUs from '../components/AboutUs/AboutUs'
import Items from '../components/MealItems/Items'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div 
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
    <Landing />
    <AboutUs />
    <Items />
    </motion.div>
  )
}

export default Home