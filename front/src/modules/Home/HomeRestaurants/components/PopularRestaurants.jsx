import RestaurantItemCard from "./RestaurantItemCard"
import { dataPopularRestaurants } from "@data/restaurantsData"
import LinearGradientText from "@ui/LinearGradientText/LinearGradienText"

const PopularRestaurants = () => {
  return (
    <div className="mt-[50px] py-[50px] flex flex-col gap-[80px] max-md:gap-[20px] max-md:mt-[20px]">
      <div className=" text-center">
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
      <div className="grid grid-cols-3 gap-[20px] max-lg:grid-cols-2 max-md:grid-cols-1">
        {dataPopularRestaurants.map((restaurant) => (
          <RestaurantItemCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default PopularRestaurants