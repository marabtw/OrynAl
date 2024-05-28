import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getRestaurantRequest } from "../api"
import { useHeaderHeight } from "@hooks"

import CreateOrder from "../CreateOrder/CreateOrder"
import RestaurantDetails from "../CreateOrder/components/RestaurantDetails/RestaurantDetails"
import LocationInfo from "@components/LocationInfo/LocationInfo"


const CreateOrderPage = () => {
	const headerHeight = useHeaderHeight()
  const { restaurantId } = useParams()
  const [restaurant, setRestaurant] = useState({})

  useEffect(() => {
    getRestaurantRequest({ restaurantId })
      .then((res) => {
        setRestaurant(res.data)
      })
      .catch((err) => console.log(err))
      .finally()
  }, [restaurantId])

  return (
    <>
      <div className="mx-[64px] bg-white max-lg:mx-[10px]">
        <div className="" style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
          <LocationInfo text={restaurant.address} />
          <RestaurantDetails restaurantData={restaurant} />
        </div>
        <CreateOrder restaurantId={restaurantId} />
      </div>
    </>
  )
}

export default CreateOrderPage
