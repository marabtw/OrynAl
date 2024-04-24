import ListItem from "../../components/ListItem/ListItem"
import ListCategories from "../../components/ListCategories/ListCategories"
import { getRestaurants } from "./api/restaurantsRequest"
import { useEffect, useState } from "react"
import { ROUTERS } from "../../app/router/Router.config"

const categories = [
  "id",
  "Название",
  "Адрес",
  "Город",
  "Номер телефона",
  "Статус",
  "Владелец",
  "Действие",
]

const getMenuActions = (restaurantId) => {
  return [
		{
			action: "Удалить",
			onClick: () => console.log("object"),
		},
		{
			action: "Посмотреть",
			to: ROUTERS.UpdateRestaurant.replace(":restaurant-id", restaurantId),
		},
	]
}

const RestaurantsList = () => {
  const [restaurantsData, setRestaurantsData] = useState([])

  useEffect(() => {
    getRestaurants()
      .then((response) => {
        if (response.status === 200) setRestaurantsData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <ul className="flex flex-col gap-[20px]">
      <ListCategories categories={categories} />
      {restaurantsData?.map((elementData, index) => (
        <ListItem
          key={elementData.id}
          elementData={elementData}
          index={index}
          menuActions={getMenuActions(elementData.id)}
        />
      ))}
    </ul>
  )
}

export default RestaurantsList
