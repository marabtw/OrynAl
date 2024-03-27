import { useState } from "react"
import { useParams } from "react-router-dom"

import { dataRestaurant } from "../../data/restaurantData"
import ShowLocation from "../../components/ShowLocation/ShowLocation"
import RestaurantInformation from "../../moduls/RestaurantInformation/RestaurantInformation"
import Booking from "../../moduls/Booking/Booking"

const Restaurant = () => {
  const { id } = useParams()
  const [data, setData] = useState(dataRestaurant)

  return (
    <div className="mx-[50px] bg-white">
			<ShowLocation text="Алматы, ​проспект Абылай хана, 55"/>
			<RestaurantInformation data={data}/>
			<Booking/>
    </div>
  )
}

export default Restaurant
