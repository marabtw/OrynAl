import React from "react"
import Slider from "./components/Slider/Slider"
import CommentsContainer from "./components/CommentsContainer/CommentsContainer"
import RestaurantBriefInfo from "../../components/RestaurantBriefInfo/RestaurantBriefInfo"

const RestaurantDetails = ({ data }) => {
  return (
    <div className="flex px-[40px] gap-[30px] py-[50px]">
      <div className="w-1/2">
        <RestaurantBriefInfo data={data} />
      </div>
      <div className="w-1/2 ">
        <Slider images={data.images} />
        <CommentsContainer comments={data.comments} />
      </div>
    </div>
  )
}

export default RestaurantDetails
