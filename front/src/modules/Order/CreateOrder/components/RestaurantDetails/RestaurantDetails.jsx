import Slider from "./components/Slider/Slider"
import CommentsContainer from "./components/CommentsContainer/CommentsContainer"
import RestaurantBriefInfo from "@components/RestaurantBriefInfo/RestaurantBriefInfo"



const RestaurantDetails = ({ restaurantData }) => {
  return (
    <div className="grid grid-cols-2 px-[40px] gap-[30px] py-[50px] max-lg:px-[20px] max-xl:grid-cols-1">
      <div className=" ">
        <RestaurantBriefInfo data={restaurantData} />
      </div>
      <div className=" ">
        <Slider images={restaurantData.photos} />
        <CommentsContainer comments={restaurantData.comments} />
      </div>
    </div>
  )
}

export default RestaurantDetails
