import React from "react"
import CreateRestaurantForm from "../moduls/CreateRestaurantForm/CreateRestaurantForm"
import PageIndicatorHeading from "../ui/Heading/PageIndicatorHeading"

const CreateRestaurantPage = () => {
  return (
    <div className="px-[40px] py-[60px]">
      <PageIndicatorHeading text={"Ресторан"} text2={"Создать ресторан"} />
      <div className="px-[40px] py-[60px] rounded-[10px] bg-white">
        <CreateRestaurantForm />
      </div>
    </div>
  )
}

export default CreateRestaurantPage
