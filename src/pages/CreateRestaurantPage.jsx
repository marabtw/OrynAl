import CreateRestaurantForm from "../moduls/CreateRestaurantForm/CreateRestaurantForm"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"
import CreateFormsContainer from "../components/CreateFormsContainer/CreateFormsContainer"

const CreateRestaurantPage = () => {
  return (
    <PageContainer>
      <PageHeading location={"Создать ресторан"} preLocation={"Ресторан"} />
      <CreateFormsContainer>
        <CreateRestaurantForm />
      </CreateFormsContainer>
    </PageContainer>
  )
}

export default CreateRestaurantPage
