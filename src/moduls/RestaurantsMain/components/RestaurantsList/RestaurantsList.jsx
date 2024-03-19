import React, { useState } from "react"
import RestaurentCard from "../RestaurantCard/RestaurentCard"
import Search from "./components/Search/Search"
import Sort from "./components/Sort/Sort"
import { RestaurantsData } from "../../../../data/RestaurantsData"

const RestaurantsList = () => {
  const [restaurants, setRestaurants] = useState(RestaurantsData)

  return (
    <div className="px-[70px]">
      <div className="flex justify-center my-[90px]">
        <Search />
      </div>
      <Sort />
      <div className="grid grid-cols-3 gap-[20px] mt-[90px]">
        {restaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default RestaurantsList
