import UpdateRestaurantMenu from "../UpdateRestaurantMenu/UpdateRestaurantMenu"
import PageWrapper from "@components/PageWrapper/PageWrapper"
import PageHeading from "@ui/Heading/PageHeading"
import { useParams } from "react-router-dom"

const UpdateMenuPage = () => {
  const { restaurantId } = useParams()
  return (
    <PageWrapper>
      <PageHeading location={"Изменить Меню"} preLocation={"Мои рестораны"} />
      <UpdateRestaurantMenu restaurantId={restaurantId} />
    </PageWrapper>
  )
}

export default UpdateMenuPage
