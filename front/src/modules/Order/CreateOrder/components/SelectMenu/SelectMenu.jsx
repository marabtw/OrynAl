import { useState, useEffect } from "react"
import FoodCategories from "./components/FoodCategories"
import FoodCard from "./components/FoodCard"
import Cart from "./components/Cart"
import { CartIcon } from "@ui/icons/icons"

import { getRestaurantMenuRequest } from "../../../api/api"

const SelectMenu = ({ restaurantId }) => {
  const [showCart, setShowCart] = useState(false)
  const [menu, setMenu] = useState([])
  const [currentTypeOfMenu, setCurrentTypeOfMenu] = useState("")
  const [typesOfMenu, setTypesOfMenu] = useState([])
  const [filteredMenu, setFilteredMenu] = useState([])

  useEffect(() => {
    getRestaurantMenuRequest(restaurantId)
      .then((res) => {
        setMenu(res.data)
        setTypesOfMenu(Object.keys(res.data))
        setCurrentTypeOfMenu(Object.keys(res.data)[0])
      })
      .catch((error) => console.log(error))
  }, [restaurantId])

  useEffect(() => {
    setFilteredMenu(
      menu[currentTypeOfMenu]?.map(
        ({ id, image, name, type, description, price, status }) => {
          return {
            id,
            image,
            name,
            type,
            description,
            price,
            foodStatus: status,
          }
        }
      )
    )
  }, [currentTypeOfMenu])

  return (
    <div className="relative flex justify-between gap-[50px] mx-[180px] mt-[200px] max-2xl:mx-[80px] max-lg:mx-[20px]">
      <div className="">
        <FoodCategories categories={typesOfMenu} selectCategory={setCurrentTypeOfMenu}/>
        <div className="grid grid-cols-3 gap-y-[100px] gap-x-[20px] mt-[100px] max-xl:grid-cols-2 max-md:grid-cols-1">
          {filteredMenu?.map((food) => (
            <FoodCard key={food.id} foodData={food} />
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
