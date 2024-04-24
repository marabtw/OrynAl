import ListItem from "../../components/ListItem/ListItem"
import ListCategories from "../../components/ListCategories/ListCategories"
import {
  getRestaurants,
  deleteRestaurantData,
  getAllOwners,
} from "./api/restaurantsRequest"
import { useEffect, useState } from "react"
import { ROUTERS } from "../../app/router/Router.config"

const categories = [
  "id",
  "Название",
  "Адрес",
  "Город",
  // "Номер телефона",
  "Владелец",
  "Статус",
  "Действие",
]
const RestaurantsList = () => {
  const [restaurantsData, setRestaurantsData] = useState([])
  const [filteredData, setFilteredData] = useState(restaurantsData)
  const [ownersData, setOwnerData] = useState([])

  useEffect(() => {
    getRestaurants()
      .then((response) => {
        if (response.status === 200) setRestaurantsData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    getAllOwners()
      .then((res) => {
        if (res.data === null) setOwnerData([])
        else
          setOwnerData(
            res.data.map((owner) => {
              const { role, ...rest } = owner
              return rest
            })
          )
      })
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    setFilteredData(
      restaurantsData.map((owner) => {
        const {
          banquet_hall,
          hookah,
          kids_playroom,
          live_music,
          own_confectioner,
          rainy_rhythm,
          unlimited_beer,
          description,
          modeFrom,
          modeTo,
          ...rest
        } = owner
        return rest
      })
    )
  }, [restaurantsData])

  const getMenuActions = (restaurantId) => {
    return [
      {
        action: "Удалить",
        onClick: () => deleteOwnerData(restaurantId),
      },
      {
        action: "Посмотреть",
        to: ROUTERS.UpdateRestaurantByAdmin.replace(":restaurantId", restaurantId),
      },
    ]
  }

  const deleteOwnerData = (ownerId) => {
    deleteRestaurantData(ownerId)
      .then(() => {
        setRestaurantsData((prevRestaurantsData) =>
          prevRestaurantsData.filter((restaurant) => restaurant.id !== ownerId)
        )
      })
      .catch((error) => console.log(error))
  }

  return (
    <ul className="flex flex-col gap-[20px]">
      <ListCategories categories={categories} />
      {filteredData
        ? filteredData?.map((elementData, index) => (
            <ListItem
              key={elementData.id}
              elementData={elementData}
              index={index}
              menuActions={getMenuActions(elementData.id)}
            />
          ))
        : ""}
    </ul>
  )
}

export default RestaurantsList
