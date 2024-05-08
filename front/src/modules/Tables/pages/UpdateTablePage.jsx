import { useParams } from "react-router-dom"

import PageWrapper from "@components/PageWrapper/PageWrapper"
import PageHeading from "@ui/Heading/PageHeading"

import UpdateRestaurantTable from "../UpdateRestaurantTableForm/UpdateRestaurantTableForm"

const UpdateTablePage = () => {
	const {restaurantId} = useParams()

  return (
    <PageWrapper>
      <PageHeading location={"Изменить столик"} preLocation={"Мои рестораны"} />
      <UpdateRestaurantTable restaurantId={restaurantId}/>
    </PageWrapper>
  )
}

export default UpdateTablePage
