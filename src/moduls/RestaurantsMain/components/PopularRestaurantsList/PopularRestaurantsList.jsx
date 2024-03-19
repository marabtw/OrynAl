import { useState } from "react"
import RestaurentCard from "../RestaurantCard/RestaurentCard"
import { PopularRestaurantsData } from "../../../../data/RestaurantsData"
import LinearGradienHeading from "../../../../ui/headings/LinearGradienHeading"

const PopularRestaurantsList = () => {
  const [restaurants, setRestaurants] = useState(PopularRestaurantsData)

  return (
    <div className="mt-[100px] py-[100px] flex flex-col gap-[30px]">
      <div className="my-[50px] text-center">
        <LinearGradienHeading
          text={"Популярные заведения"}
          from={"#6AA7FC"}
          to={"#3D6FFB"}
          className="font-[600] text-[50px] leading-[50px]"
        />
        <p className="text-[20px] leading-[20px] mt-[20px]">
          Посетители сайта часто бронирует здесь
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[10px]">
        {restaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default PopularRestaurantsList
