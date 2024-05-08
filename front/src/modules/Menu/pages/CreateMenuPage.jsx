import CreateRestaurantMenu from "../CreateRestaurantMenu/CreateRestaurantMenu"
import PageWrapper from "@components/PageWrapper/PageWrapper"
import PageHeading from "@ui/Heading/PageHeading"
import CreateFormsWrapper from "@components/CreateFormsWrapper/CreateFormsWrapper"
import { useParams } from "react-router-dom"

const CreateMenu = () => {
	const { restaurantId } = useParams()
  return (
    <PageWrapper>
      <PageHeading location={"Создать меню"} preLocation={"Мои рестораны"} />
      <CreateFormsWrapper>
        <CreateRestaurantMenu restaurantId={restaurantId}/>
      </CreateFormsWrapper>
    </PageWrapper>
  )
}

export default CreateMenu
