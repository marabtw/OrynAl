import { useParams } from "react-router-dom"
import PageWrapper from "@components/PageWrapper/PageWrapper"
import PageHeading from "@ui/Heading/PageHeading"
import CreateFormsWrapper from "@components/CreateFormsWrapper/CreateFormsWrapper"

import CreateTableForm from "../CreateRestaurantTableForm/CreateRestaurantTableForm"

const CreateTablePage = () => {
	const {restaurantId} = useParams()
  return (
    <PageWrapper>
      <PageHeading location={"Создать столик"} preLocation={"Мои рестораны"} />
      <CreateFormsWrapper>
        <CreateTableForm restaurantId={restaurantId}/>
      </CreateFormsWrapper>
    </PageWrapper>
  )
}

export default CreateTablePage
