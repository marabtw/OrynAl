import { useState } from "react"
import RestaurantsList from "../moduls/RestaurantsList/RestaurantsList"
import CreateButton from "../components/CreateButton/CreateButton"
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
    <div className="p-[60px]">
      <div className="flex items-center gap-[20px] mb-[40px]">
        <PageHeading text={"Рестораны"} />
        <CreateButton to={"/my-restaurants/create"} />
      </div>
      <RestaurantsList data={data}/>
    </div>
  )
}

export default RestaurantsPage
