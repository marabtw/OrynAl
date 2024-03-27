import MyRestaurantTablesList from "../moduls/MyRestaurantTablesList/MyRestaurantTablesList"
import { Link } from "react-router-dom"

const MyRestaurantTablesPage = () => {
  return (
    <div className="px-[60px] font-poppins">
      <div className="flex items-center gap-[20px] my-[40px]">
        <h3 className="flex gap-2 text-[32px] leading-[48px] font-[500]">
          <span>Мои рестораны</span>
          <span>-</span>
          <span className="font-[700]">Cтолик</span>
        </h3>
        <Link
          to={"/my-restaurants/tables/create"}
          className="px-[20px] py-[5px] text-[15px] leading-[17.25px] text-white rounded-[5px] bg-[#6AA7FC]"
        >
          Cоздать
        </Link>
      </div>
      <MyRestaurantTablesList />
    </div>
  )
}

export default MyRestaurantTablesPage
