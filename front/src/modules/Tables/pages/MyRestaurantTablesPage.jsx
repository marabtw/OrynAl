import { useParams } from "react-router-dom"

import PageWrapper from "@components/PageWrapper/PageWrapper"
import PageHeading from "@ui/Heading/PageHeading"
import { removeWildcard } from "@helpers/helpers"
import { ROUTERS } from "@router/Router.config"

import MyRestaurantTablesList from "../MyRestaurantTablesList/MyRestaurantTablesList"

const MyRestaurantTablesPage = () => {
  const { restaurantId } = useParams()

  return (
    <PageWrapper>
      <PageHeading
        location={"Cтолик"}
        preLocation={"Мои рестораны"}
        to={`${removeWildcard(
          ROUTERS.RestaurantTable.root.replace(":restaurantId", restaurantId)
        )}${ROUTERS.RestaurantTable.createTable}`}
      />
      <MyRestaurantTablesList restaurantId={restaurantId}/>
    </PageWrapper>
  )
}

export default MyRestaurantTablesPage
