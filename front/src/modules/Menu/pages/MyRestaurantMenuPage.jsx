import MyRestaurantsMenuList from "../MyRestaurantsMenuList/MyRestaurantsMenuList"
import PageWrapper from "@components/PageWrapper/PageWrapper"
import { removeWildcard } from "@helpers/helpers"
import { ROUTERS } from "@router/Router.config"
import PageHeading from "@ui/Heading/PageHeading"
import { useParams } from "react-router-dom"

const MyRestaurantMenus = () => {
	const {restaurantId} = useParams()
  return (
    <PageWrapper>
      <PageHeading
        location={"Меню"}
        preLocation={"Мои рестораны"}
        to={`${removeWildcard(ROUTERS.RestaurantMenu.root.replace(":restaurantId", restaurantId))}${ROUTERS.RestaurantMenu.createFood}`}
      />
      <MyRestaurantsMenuList restaurantId={restaurantId}/>
    </PageWrapper>
  )
}

export default MyRestaurantMenus
