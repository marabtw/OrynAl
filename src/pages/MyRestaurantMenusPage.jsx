import MyRestaurantsMenusList from "../moduls/MyRestaurantsMenusList/MyRestaurantsMenusList"
import { Link } from "react-router-dom"
import PageHeading from "../ui/Heading/PageHeading"

const MyRestaurantMenus = () => {
  return (
    <div className="px-[60px] py-[50px] font-poppins">
      <PageHeading
        location={"Меню"}
        preLocation={"Мои рестораны"}
        to={"/my-restaurants/menus/create"}
      />
      <MyRestaurantsMenusList />
    </div>
  )
}

export default MyRestaurantMenus
