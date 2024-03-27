import FoodCategories from "./components/FoodCategories/FoodCategories"
import FoodCard from "./components/FoodCard/FoodCard"
import Cart from "./components/Cart/Cart"

import { dataSalads } from "../../../../data/bookingData"

const SelectMenu = () => {
  return (
    <div className="flex gap-[50px] mx-[180px] mt-[200px]">
      <div className="">
        <FoodCategories />
        <div className="flex flex-wrap gap-y-[100px] gap-x-[50px] justify-between mt-[100px]">
          {dataSalads.map((salad) => (
            <FoodCard salad={salad} />
          ))}
        </div>
      </div>
      <Cart />
    </div>
  )
}

export default SelectMenu
