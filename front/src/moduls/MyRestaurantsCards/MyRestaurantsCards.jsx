import { useState } from "react"
import RestaurantCard from "./components/RestaurantCard"
import { dataMyRestaurantsList } from "../../data/myRestaurantData"
import { Grid1x2Icon, Grid2x2Icon } from "../../ui/icons/icons"

const MyRestaurantsCards = () => {
  const [displayType, setDisplayType] = useState("grid")
  return (
    <div className="flex flex-col gap-[30px] max-lg:gap-[10px]">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[700] leading-[24px]">
          Текущие рестораны
        </h3>
        <div className="flex text-[31px] gap-[5px]">
          <Grid1x2Icon className={`cursor-pointer hover:text-[#6AA7FC] ${displayType === "flex" && "text-[#6aa7fc]"}`} onClick={() => setDisplayType("flex")}/>
          <Grid2x2Icon className={`cursor-pointer hover:text-[#6AA7FC] ${displayType === "grid" && "text-[#6aa7fc]"}`} onClick={() => setDisplayType("grid")}/>
        </div>
      </div>
      <div className={`${displayType === "grid" ? "grid grid-cols-4 gap-[30px] max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1" : "flex flex-col gap-[30px]"}`}>
        {dataMyRestaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} data={restaurant} displayType={displayType}/>
        ))}
      </div>
    </div>
  )
}

export default MyRestaurantsCards
