import MyRestaurantsMenusList from "../moduls/MyRestaurantsMenusList/MyRestaurantsMenusList"
import { Link } from "react-router-dom"

const MyRestaurantMenus = () => {
	return (
    <div className="px-[60px] font-poppins">
      <div className="flex items-center gap-[20px] my-[40px]">
        <h3 className="flex gap-2 text-[32px] leading-[48px] font-[500]">
          <span>Мои рестораны</span>
          <span>-</span>
          <span className="font-[700]">Меню</span>
        </h3>
        <Link
          to={"/my-restaurants/menus/create"}
          className="px-[20px] py-[5px] text-[15px] leading-[17.25px] text-white rounded-[5px] bg-[#6AA7FC]"
        >
          Cоздать
        </Link>
      </div>
      <MyRestaurantsMenusList />
    </div>
  )
}

export default MyRestaurantMenus
