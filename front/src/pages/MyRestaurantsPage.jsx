import MyRestaurantsCards from "../moduls/MyRestaurantsCards/MyRestaurantsCards"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"

const MyRestaurantsPage = () => {
  return (
    <PageContainer>
      <PageHeading location={"Мои рестораны"} />
      <MyRestaurantsCards />
    </PageContainer>
  )
}

export default MyRestaurantsPage
