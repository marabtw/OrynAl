import { useState } from "react"
import { useParams } from "react-router-dom"
import sandyq from "../../assets/images/sandyq.jpeg"

import { RestaurantData } from "../../data/RestaurantsData"
import RestaurantInfo from "../../moduls/RestaurantInfo/RestaurantInfo"

const Restaurant = () => {
  const { id } = useParams()
  const [data, setData] = useState(RestaurantData)

  return (
    <div>
      <h1>Restaurant ID: {id}</h1>
			<RestaurantInfo data={data}/>
    </div>
  )
}

export default Restaurant
