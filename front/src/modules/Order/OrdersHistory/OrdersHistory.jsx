import { useEffect, useState } from "react"
import { getByUserAllOrders, getByOwnerAllOrders } from "../api"
import ListCategories from "@components/ListCategories"
import OrdersHistoryItem from "./components/OrdersHistoryItem"
import { useParams } from "react-router-dom"

import { formatTimeString } from "@utils/index"

const categories = ["id", "Ресторан", "Адрес", "Дата", "Статус", "Действие"]

const OrdersHistory = () => {
  const { restaurantId } = useParams()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    console.log(orders)
  }, [orders])

  useEffect(() => {
    restaurantId
      ? getByOwnerAllOrders(restaurantId)
          .then(({ data }) => {
            updateOrders(data.items)
          })
          .catch((error) => console.log("error"))
      : getByUserAllOrders()
          .then(({ data }) => {
            updateOrders(data.items)
          })
          .catch((error) => console.log("error"))
  }, [])

  const updateOrders = (data) => {
    setOrders(
      data.map(({ id, restaurant, date, status }) => ({
        id,
        restaurant: { name: restaurant.name, icon: restaurant.icon },
        address: restaurant.address,
        date: formatTimeString(date),
        status,
      }))
    )
  }

  return (
    <ul className="flex flex-col gap-[30px]">
      <ListCategories categories={categories} />
      {orders?.map((order) => (
        <OrdersHistoryItem key={order.id} order={order} />
      ))}
    </ul>
  )
}

export default OrdersHistory
