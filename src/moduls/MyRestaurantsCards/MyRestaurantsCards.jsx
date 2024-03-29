import { useState } from "react"
import RestaurantCard from "./components/RestaurantCard/RestaurantCard"
import { dataMyRestaurantsList } from "../../data/myRestaurantData"
import { Grid1x2Icon, Grid2x2Icon } from "../../ui/icons/icons"

const MyRestaurantsCards = () => {
  const [type, setType] = useState("grid")
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[700] leading-[24px]">
          Текущие рестораны
        </h3>
        <div className="flex text-[31px] gap-[5px]">
          <Grid1x2Icon className={`cursor-pointer hover:text-[#6AA7FC] ${type === "flex" && "text-[#6aa7fc]"}`} onClick={() => setType("flex")}/>
          <Grid2x2Icon className={`cursor-pointer hover:text-[#6AA7FC] ${type === "grid" && "text-[#6aa7fc]"}`} onClick={() => setType("grid")}/>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[30px]">
        {dataMyRestaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default MyRestaurantsCards
