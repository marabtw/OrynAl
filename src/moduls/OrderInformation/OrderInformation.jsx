import React from "react"
import RestaurantShortInfo from "../RestaurantShortInfo/RestaurantShortInfo"
import ShowLocation from "../../components/ShowLocation/ShowLocation"
import { dataRestaurant } from "../../data/restaurantData"
import OrderShortInfo from "./components/OrderShortInfo/OrderShortInfo"
import CartFixed from "./components/CartFixed/CartFixed"

const OrderInformation = ({ id }) => {
  return (
    <div className="font-poppins">
      <h1 className="text-[32px] font-[700] leading-[48px] mb-[10px]">
        Информация о заказе
      </h1>
      <div className="flex gap-[90px]">
        <div className="flex flex-col w-[50%]">
          <div className="w-[80%] h-[3px] mb-[30px] bg-black rounded-full"></div>
          <RestaurantShortInfo
            data={dataRestaurant}
            className={"px-[60px] py-[40px]"}
          />
          <ShowLocation
            position="relative"
            text="Алматы, ​проспект Абылай хана, 55"
						className={"translate-x-[-50px] my-[40px]"}
          />
          <OrderShortInfo id={id} />
        </div>
        <div>
          <CartFixed />
        </div>
      </div>
    </div>
  )
}

export default OrderInformation
