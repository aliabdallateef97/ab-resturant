import React from 'react'
import ItemDetails from '../components/ItemDetails/ItemDetails'
import {motion} from 'framer-motion'

const MealDetail = () => {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
        <ItemDetails />
    </motion.div>
  )
}

export default MealDetail