import { useState } from "react"
import RestaurantItemCard from "../RestaurantItemCard/RestaurantItemCard"
import { dataPopularRestaurants } from "../../../../data/restaurantsData"
import LinearGradientText from "../../../../ui/LinearGradientText/LinearGradienText"

const PopularRestaurants = () => {
  const [data, setData] = useState(dataPopularRestaurants)

  return (
    <div className="mt-[50px]  px-[70px] py-[50px] flex flex-col gap-[30px]">
      <div className="my-[50px] text-center">
        <LinearGradientText
          tag={"h2"}
          text={"Популярные заведения"}
          from={"#6AA7FC"}
          to={"#3D6FFB"}
          className="font-[600] text-[50px] leading-[50px]"
        />
        <p className="text-[20px] leading-[20px] mt-[20px]">
          Посетители сайта часто бронирует здесь
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[20px]">
        {data.map((restaurant) => (
          <RestaurantItemCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default PopularRestaurants
