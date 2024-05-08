import PageWrapper from "@components/PageWrapper/PageWrapper"
import PageHeading from "@ui/Heading/PageHeading"
import CreateFormsWrapper from "@components/CreateFormsWrapper/CreateFormsWrapper"

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
