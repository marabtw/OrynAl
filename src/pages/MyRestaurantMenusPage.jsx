import MyRestaurantsMenusList from "../moduls/MyRestaurantsMenusList/MyRestaurantsMenusList"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"

const MyRestaurantMenus = () => {
  return (
    <PageContainer>
      <PageHeading
        location={"Меню"}
        preLocation={"Мои рестораны"}
        to={"/my-restaurants/menus/create"}
      />
      <MyRestaurantsMenusList />
    </PageContainer>
  )
}

export default MyRestaurantMenus
