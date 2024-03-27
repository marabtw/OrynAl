import React from "react"
import Slider from "./components/Slider/Slider"
import CommentsContainer from "./components/CommentsContainer/CommentsContainer"
import RestaurantShortInfo from "../RestaurantShortInfo/RestaurantShortInfo"

const RestaurantInformation = ({ data }) => {
  return (
    <div className="flex px-[40px] gap-[30px] py-[50px]">
      <div className="w-1/2">
        <RestaurantShortInfo data={data} />
      </div>
      <div className="w-1/2 ">
        <Slider images={data.images} />
        <CommentsContainer comments={data.comments} />
      </div>
    </div>
  )
}

export default RestaurantInformation
