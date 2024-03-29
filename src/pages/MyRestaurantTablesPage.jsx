import MyRestaurantTablesList from "../moduls/MyRestaurantTablesList/MyRestaurantTablesList"
import { Link } from "react-router-dom"
import PageHeading from "../ui/Heading/PageHeading"

const MyRestaurantTablesPage = () => {
  return (
    <div className="px-[60px] py-[50px] font-poppins">
      <PageHeading
        location={"Cтолик"}
        preLocation={"Мои рестораны"}
        to={"/my-restaurants/tables/create"}
      />
      <MyRestaurantTablesList />
    </div>
  )
}

export default MyRestaurantTablesPage
