import React, { useState, useEffect } from "react"

import { getRestaurantMenuRequest } from "../../../api"

import FoodCategories from "./components/FoodCategories"
import FoodCard from "./components/FoodCard"

const SelectMenu = ({ restaurantId, getFoodForCart, selectedFoodsId }) => {
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
    <div className="">
      <FoodCategories
        categories={typesOfMenu}
        selectCategory={setCurrentTypeOfMenu}
      />
      <div className="grid grid-cols-3 gap-y-[100px] gap-x-[20px] mt-[100px] max-xl:grid-cols-2 max-md:grid-cols-1">
        {filteredMenu?.map((food) => (
          <FoodCard
            key={food.id}
            foodData={food}
            getFoodForCart={getFoodForCart}
						selectedFoodsId={selectedFoodsId}
          />
        ))}
      </div>
    </div>
  )
}

export default React.memo(SelectMenu)
