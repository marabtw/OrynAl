import { useState } from "react"
import FoodCategories from "./components/FoodCategories"
import FoodCard from "./components/FoodCard"
import Cart from "./components/Cart"
import { CartIcon } from "@ui/icons/icons"

import { dataSalads } from "@data/bookingData"

const SelectMenu = () => {
  const [showCart, setShowCart] = useState(false)
  return (
    <div className="relative flex gap-[50px] w-full mx-[180px] mt-[200px] max-2xl:mx-[80px] max-lg:mx-[20px]">
      <div className="max-w-full">
        <FoodCategories />
        <div className="grid grid-cols-3 gap-y-[100px] gap-x-[20px] max-w-full mt-[100px] max-xl:grid-cols-2 max-md:grid-cols-1">
          {dataSalads.map((salad) => (
            <FoodCard key={salad.id} salad={salad} />
          ))}
        </div>
      </div>
      <div
        className="fixed z-[99999] w-[70px] h-[70px] bottom-[1%] right-[5%] p-[15px] border border-transparent rounded-full cursor-pointer bg-gray-800
				2xl:hidden
				"
        onClick={() => setShowCart(!showCart)}
      >
        <CartIcon className="w-full h-full text-white" />
      </div>
      <Cart show={showCart} />
    </div>
  )
}

export default SelectMenu
