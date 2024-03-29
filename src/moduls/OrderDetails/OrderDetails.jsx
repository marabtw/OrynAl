import RestaurantBriefInfo from "../../components/RestaurantBriefInfo/RestaurantBriefInfo"
import ShowLocation from "../../components/ShowLocation/ShowLocation"
import { dataRestaurant } from "../../data/restaurantData"
import OrderBriefInfo from "./components/OrderBriefInfo/OrderBriefInfo"
import OrderMenu from "./components/OrderMenu/OrderMenu"

const OrderDetails = ({ id }) => {
  return (
    <div className="font-poppins">
      <h1 className="text-[32px] font-[700] leading-[48px] mb-[10px]">
        Информация о заказе
      </h1>
      <div className="flex gap-[90px]">
        <div className="flex flex-col w-[50%]">
          <div className="w-[80%] h-[3px] mb-[30px] bg-black rounded-full"></div>
          <RestaurantBriefInfo
            data={dataRestaurant}
            className={"px-[60px] py-[40px]"}
          />
          <ShowLocation
            position="relative"
            text="Алматы, ​проспект Абылай хана, 55"
						className={"translate-x-[-50px] my-[40px]"}
          />
          <OrderBriefInfo id={id} />
        </div>
        <div>
          <OrderMenu />
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
