import { useContext, useEffect, useState } from "react"

import { getAllRestaurantsRequest } from "@modules/Restaurants/api/api"
import { UIContext } from "@context/UIContext"

import RestaurantCard from "./components/MyRestaurantCard"
import { Grid1x2Icon, Grid2x2Icon } from "@ui/icons/icons"
import Pagination from "@components/Pagination/Pagination"

import Loading from "@components/Loading/Loading"

const MyRestaurantsList = () => {
  const { isLoading, setIsLoading } = useContext(UIContext)
  const [displayType, setDisplayType] = useState("grid")
  const [myRestaurants, setMyRestaurants] = useState([])

  const [totalItems, setTotalItems] = useState(0)

  const [params, setParams] = useState({
    pageIndex: 1,
    limit: 8,
  })

  useEffect(() => {
    setIsLoading(true)
    getAllRestaurantsRequest(params)
      .then((res) => {
        setMyRestaurants(
          res.data.items.map((item) => {
            return {
              ...item,
              restaurantStatus: item.status,
            }
          })
        )
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading && <Loading />}
      <div className="flex flex-col gap-[30px] max-lg:gap-[10px]">
        <div className="flex justify-between">
          <h3 className="text-[16px] font-[700] leading-[24px]">
            Текущие рестораны
          </h3>
          <div className="flex text-[31px] gap-[5px]">
            <Grid1x2Icon
              className={`cursor-pointer hover:text-[#6AA7FC] ${
                displayType === "flex" && "text-[#6aa7fc]"
              }`}
              onClick={() => {
                if (displayType !== "flex") {
                  setDisplayType("flex")
                }
              }}
            />
            <Grid2x2Icon
              className={`cursor-pointer hover:text-[#6AA7FC] ${
                displayType === "grid" && "text-[#6aa7fc]"
              }`}
              onClick={() => {
                if (displayType !== "grid") {
                  setDisplayType("grid")
                }
              }}
            />
          </div>
        </div>
        <div
          className={`${
            displayType === "grid"
              ? "grid grid-cols-4 gap-[30px] max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1"
              : "flex flex-col gap-[30px]"
          }`}
        >
          {myRestaurants?.map((restaurant, index) => (
            <RestaurantCard
              key={restaurant.id}
              data={restaurant}
              displayType={displayType}
              index={index}
            />
          ))}
        </div>
        <Pagination
          totalPage={Math.ceil(totalItems / params.limit)}
          getCurrentPage={(index) => {
            setParams((prev) => {
              return { ...prev, pageIndex: index }
            })
          }}
        />
      </div>
    </>
  )
}

export default MyRestaurantsList
