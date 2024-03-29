import { useState } from "react"
import RestaurantsList from "../moduls/RestaurantsList/RestaurantsList"
import PageHeading from "../ui/Heading/PageHeading"

const RestaurantsPage = () => {
  const [data, setData] = useState([
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
  ])
  return (
    <div className="px-[60px] py-[50px]">
      <PageHeading location={"Рестораны"} to={"/my-restaurants/create"} />
      <RestaurantsList data={data} />
    </div>
  )
}

export default RestaurantsPage
