import ItemName from './ItemName/ItemName'
import FoodItem from './FoodItem/FoodItem'
import {Route ,Routes} from 'react-router-dom'

const FoodItems = () => {
  return (
    <div >
        <ItemName />
        <Routes>
          <Route path=':type' element={<FoodItem />} />
        </Routes>
    </div>
  )
}

export default FoodItems