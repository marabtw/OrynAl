import PageWrapper from "@components/PageWrapper"
import CreateFormsWrapper from "@components/CreateFormsWrapper"
import PageHeading from "@ui/Heading/PageHeading"

import CreateRestaurantForm from "../Restaurants/CreateRestaurantForm/CreateRestaurantForm"

const CreateRestaurantPage = () => {
  return (
    <PageWrapper>
      <PageHeading location={"Создать ресторан"} preLocation={"Ресторан"} />
      <CreateFormsWrapper>
        <CreateRestaurantForm />
      </CreateFormsWrapper>
    </PageWrapper>
  )
}

export default CreateRestaurantPage
