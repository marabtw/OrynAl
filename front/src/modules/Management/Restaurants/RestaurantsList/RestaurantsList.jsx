import { useEffect, useState, useContext } from "react"
import { ROUTERS } from "@router/Router.config"
import { removeWildcard } from "@helpers/helpers"

import ListCategories from "@components/ListCategories/ListCategories"
import ListItem from "@components/ListItem/ListItem"
import {
  getByAdminAllRestaurantsRequest,
  deleteByAdminRestaurantRequest,
} from "../../api/api"

import Pagination from "@components/Pagination/Pagination"
import { UIContext } from "@context/UIContext"
import Loading from "@components/Loading/Loading"

const categories = [
  "id",
  "Название",
  "Адрес",
  "Город",
  "Владелец",
  "Статус",
  "Действие",
]
const RestaurantsList = () => {
  const [restaurantsData, setRestaurantsData] = useState([])

  const { isLoading, setIsLoading } = useContext(UIContext)

  const [totalItems, setTotalItems] = useState(0)

  const [param, setParam] = useState({
    pageIndex: 1,
    limit: 10,
  })

  useEffect(() => {
    setIsLoading(true)
    getByAdminAllRestaurantsRequest(param.pageIndex, param.limit)
      .then((response) => {
        if (!response.data) setRestaurantsData([])
        else {
          setRestaurantsData(
            response.data.items.map(
              ({ id, name, address, city, owner, status }) => ({
                id,
                name,
                address,
                city,
                ownerName: `${owner.name} ${owner.surname}`,
                restaurantStatus: status,
              })
            )
          )
          setTotalItems(response.data.totalItems)
        }
      })
      .catch((error) => {
        setRestaurantsData([])
        console.log(error)
      })
      .finally(setIsLoading(false))
  }, [param])

  const deleteRestaurant = async (ownerId) => {
    setIsLoading(true)
    await deleteByAdminRestaurantRequest(ownerId)
    getByAdminAllRestaurantsRequest(param.pageIndex, param.limit)
      .then((response) => {
        if (!response.data) setRestaurantsData([])
        else {
          setRestaurantsData(
            response.data.items.map(
              ({ id, name, address, city, ownerId, status }) => ({
                id,
                name,
                address,
                city,
                ownerId,
                restaurantStatus: status,
              })
            )
          )
          setTotalItems(response.data.totalItems)
        }
      })
      .catch((error) => {
        setRestaurantsData([])
        console.log(error)
      })
      .finally(setIsLoading(false))
  }

  const getMenuActions = (restaurantId) => {
    return [
      {
        action: "Удалить",
        onClick: () => deleteRestaurant(restaurantId),
      },
      {
        action: "Посмотреть",
        to: `${removeWildcard(
          ROUTERS.Restaurant.root
        )}${ROUTERS.Restaurant.updateRestaurant.replace(
          ":restaurantId",
          restaurantId
        )}`,
      },
    ]
  }

  return (
    <>
      {isLoading && <Loading />}
      <ul className="flex flex-col gap-[20px]">
        <ListCategories categories={categories} />
        {restaurantsData
          ? restaurantsData?.map((restaurant, index) => (
              <ListItem
                key={restaurant.id}
                elementData={restaurant}
                index={index}
                menuActions={getMenuActions(restaurant.id)}
              />
            ))
          : ""}
        <Pagination
          totalPage={Math.ceil(totalItems / param.limit)}
          getCurrentPage={(index) => {
            setParam((prev) => {
              return { ...prev, pageIndex: index }
            })
          }}
        />
      </ul>
    </>
  )
}

export default RestaurantsList
