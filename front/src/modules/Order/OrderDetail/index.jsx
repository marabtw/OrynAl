import { useState } from "react"

import RestaurantBriefInfo from "@components/RestaurantBriefInfo"
import LocationInfo from "@components/LocationInfo"

import OrderReceipt from "./components/OrderReceipt"
import OrderMenu from "./components/OrderMenu"

import { dataRestaurant } from "@data/restaurantData"

const OrderDetail = ({ id }) => {
	const [details, setDetails] = useState()

  return (
    <div className="font-poppins">
      <h1 className="text-[32px] font-[700] leading-[48px] mb-[10px]">
        Информация о заказе
      </h1>
      <div className="flex gap-[90px] max-xl:flex-col max-xl:gap-[20px]">
        <div className="flex flex-col w-[50%] max-xl:w-full gap-[40px] max-xl:gap-[20px]">
          <div className="w-[80%] h-[3px] mb-[30px] bg-black rounded-full"></div>
          <RestaurantBriefInfo
            data={dataRestaurant}
            className={"px-[60px] py-[40px] max-md:p-[10px]"}
          />
          <LocationInfo
            position="relative"
            text="Алматы, ​проспект Абылай хана, 55"
						className={"translate-x-[-50px]"}
          />
          <OrderReceipt />
        </div>
        <div>
          <OrderMenu />
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
