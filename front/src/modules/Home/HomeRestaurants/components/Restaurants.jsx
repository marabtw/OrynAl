import RestaurantItemCard from "./RestaurantItemCard"
import Search from "./Search"
import SortByCategoryContainer from "@components/SortByCategoryContainer/SortByCategoryContainer"

import { getAllRestaurantsRequest } from "../../api/api"
import { useContext, useEffect, useState } from "react"
import { UIContext } from "@context/UIContext"

import Loading from "@components/Loading/Loading"
import Pagination from "@components/Pagination/Pagination"

const sortList = [
  "Сортировать в этом разделе",
  "Избранное",
  "Тип Заведения",
  "Кухня",
  "Особенности",
  "По расстоянию от меня",
]

const Restaurants = () => {
  const { isLoading, setIsLoading } = useContext(UIContext)
  const [restaurants, setRestaurants] = useState([])

  const [totalItems, setTotalItems] = useState(0)

  const [param, setParam] = useState({
    pageIndex: 1,
    limit: 6,
  })

  useEffect(() => {
    setIsLoading(true)
    getAllRestaurantsRequest(param)
      .then((res) => {
        setRestaurants(res.data.items)
				setTotalItems(res.data.totalItems)
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(false))
  }, [param])

  return (
    <>
      {isLoading && <Loading />}
      <div className="flex flex-col gap-[90px] max-lg:gap-[30px]">
        <div className="flex justify-center">
          <Search />
        </div>
        <SortByCategoryContainer sortList={sortList} />
        <div className="grid grid-cols-3 gap-[20px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {restaurants?.length > 0 &&
            restaurants.map((restaurant) => (
              <RestaurantItemCard key={restaurant.id} data={restaurant} />
            ))}
        </div>
        <Pagination
          totalPage={Math.ceil(totalItems / param.limit)}
          getCurrentPage={(index) => {
            setParam((prev) => {
              return { ...prev, pageIndex: index }
            })
          }}
        />
      </div>
    </>
  )
}

export default Restaurants
