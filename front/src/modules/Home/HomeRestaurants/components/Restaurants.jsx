import RestaurantItemCard from "./RestaurantItemCard"
import Search from "./Search"
import SortByCategoryContainer from "@components/SortByCategoryContainer/SortByCategoryContainer"
import { dataRestaurants } from "@data/restaurantsData"

import { getAllRestaurantsRequest } from "../../api/api"
import { useEffect, useState } from "react"

const sortList = [
  "Сортировать в этом разделе",
  "Избранное",
  "Тип Заведения",
  "Кухня",
  "Особенности",
  "По расстоянию от меня",
]

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([])

	useEffect(() => {console.log(restaurants)},[restaurants])

  useEffect(() => {
    getAllRestaurantsRequest()
      .then((res) => {
				setRestaurants(res.data.items)
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className="flex flex-col gap-[90px] max-lg:gap-[30px]">
      <div className="flex justify-center">
        <Search />
      </div>
      <SortByCategoryContainer sortList={sortList} />
      <div className="grid grid-cols-3 gap-[20px] max-lg:grid-cols-2 max-sm:grid-cols-1">
        {restaurants?.length > 0 && restaurants.map((restaurant) => (
          <RestaurantItemCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Restaurants
