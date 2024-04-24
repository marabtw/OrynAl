import UpdateRestaurantForm from "../moduls/UpdateRestaurantForm/UpdateRestaurantForm"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"

const UpdateRestaurantPage = () => {
  return (
    <PageContainer>
      <PageHeading
        location={"Изменить Ресторан"}
        preLocation={"Мои рестораны"}
      />
      <UpdateRestaurantForm />
    </PageContainer>
  )
}

export default UpdateRestaurantPage
