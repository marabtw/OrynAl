import UpdateRestaurantForm from "../Common/UpdateRestaurantForm/UpdateRestaurantForm"
import PageHeading from "@ui/Heading/PageHeading"
import PageWrapper from "@components/PageWrapper/PageWrapper"

const UpdateRestaurantPage = () => {
  return (
    <PageWrapper>
      <PageHeading
        location={"Изменить Ресторан"}
        preLocation={"Мои рестораны"}
      />
      <UpdateRestaurantForm />
    </PageWrapper>
  )
}

export default UpdateRestaurantPage
