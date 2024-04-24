import UpdateRestaurantTable from "../moduls/UpdateRestaurantTable/UpdateRestaurantTable"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"

const UpdateTablePage = () => {
  return (
    <PageContainer>
      <PageHeading location={"Изменить столик"} preLocation={"Мои рестораны"} />
      <UpdateRestaurantTable />
    </PageContainer>
  )
}

export default UpdateTablePage
