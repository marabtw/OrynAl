import React, { useState } from "react"
import RestaurantItemCard from "../RestaurantItemCard/RestaurantItemCard"
import Search from "./components/Search/Search"
import Sort from "../../../../components/Sort/Sort"
import { dataRestaurants } from "../../../../data/restaurantsData"

const sortList = [
  "Сортировать в этом разделе",
  "Избранное",
  "Тип Заведения",
  "Кухня",
  "Особенности",
  "По расстоянию от меня",
]

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState(dataRestaurants)

  return (
    <div className="px-[70px]">
      <div className="flex justify-center my-[90px]">
        <Search />
      </div>
      <Sort sortList={sortList} />
      <div className="grid grid-cols-3 gap-[20px] mt-[90px]">
        {restaurants.map((restaurant) => (
          <RestaurantItemCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Restaurants
