import RestaurantsList from "../moduls/RestaurantsList/RestaurantsList"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"

const RestaurantsPage = () => {
  const data = [
    {
      id: "dslajflkhgalksdfjasd4",
      name: "Sandyq",
      address: "Абай,101",
      city: "Алматы",
      callNumber: "+ 778 922 01 01",
      status: true,
      owner: "Батырбек",
    },
    {
      id: "dslajflkhgalksdfjasd3",
      name: "Sandyq",
      address: "Абай,101",
      city: "Алматы",
      callNumber: "+ 778 922 01 01",
      status: true,
      owner: "Батырбек",
    },
    {
      id: "dslajflkhgalksdfjasd2",
      name: "Sandyq",
      address: "Абай,101",
      city: "Алматы",
      callNumber: "+ 778 922 01 01",
      status: true,
      owner: "Батырбек",
    },
    {
      id: "dslajflkhgalksdfjasd1",
      name: "Sandyq",
      address: "Абай,101",
      city: "Алматы",
      callNumber: "+ 778 922 01 01",
      status: true,
      owner: "Батырбек",
    },
  ]
  return (
    <PageContainer>
      <PageHeading location={"Рестораны"} to={"/my-restaurants/create"} />
      <RestaurantsList />
    </PageContainer>
  )
}

export default RestaurantsPage
