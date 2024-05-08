import { useState } from "react"
import { useParams } from "react-router-dom"

import CreateOrder from "../CreateOrder/CreateOrder"
import RestaurantDetails from "@components/RestaurantDetails/RestaurantDetails"
import LocationInfo from "@components/LocationInfo/LocationInfo"

import { dataRestaurant } from "@data/restaurantData"

const CreateOrderPage = () => {
  const { id } = useParams()
  const [data, setData] = useState(dataRestaurant)

  return (
    <div className="mx-[50px] bg-white max-lg:mx-[10px]">
			<LocationInfo text="Алматы, ​проспект Абылай хана, 55"/>
			<RestaurantDetails data={data}/>
			<CreateOrder/>
    </div>
  )
}

export default CreateOrderPage
