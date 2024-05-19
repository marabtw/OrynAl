import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import CreateOrder from "../CreateOrder/CreateOrder"
import RestaurantDetails from "@components/RestaurantDetails/RestaurantDetails"
import LocationInfo from "@components/LocationInfo/LocationInfo"
import Loading from "@components/Loading"

import { UIContext } from "@context/UIContext"
import { getRestaurantRequest } from "../api"

const CreateOrderPage = () => {
  const { isLoading } = useContext(UIContext)
  const { restaurantId } = useParams()
  const [restaurant, setRestaurant] = useState({})

  useEffect(() => {
    getRestaurantRequest({restaurantId})
      .then((res) => {
        setRestaurant(res.data)
      })
      .catch((err) => console.log(err))
      .finally()
  }, [restaurantId])

  return (
    <>
      {isLoading && <Loading />}
      <div className="mx-[50px] bg-white max-lg:mx-[10px]">
        <LocationInfo text={restaurant.address} />
        <RestaurantDetails restaurantData={restaurant} />
        <CreateOrder restaurantId={restaurantId}/>
      </div>
    </>
  )
}

export default CreateOrderPage
