import MyRestaurantTablesList from "../moduls/MyRestaurantTablesList/MyRestaurantTablesList"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"

const MyRestaurantTablesPage = () => {
  return (
    <PageContainer>
      <PageHeading
        location={"Cтолик"}
        preLocation={"Мои рестораны"}
        to={"/my-restaurants/tables/create"}
      />
      <MyRestaurantTablesList />
    </PageContainer>
  )
}

export default MyRestaurantTablesPage
