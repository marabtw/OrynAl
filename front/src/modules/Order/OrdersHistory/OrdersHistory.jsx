import { useEffect, useState } from "react"
import { getByUserAllOrders } from "../api/api"
import ListCategories from "@components/ListCategories/ListCategories"
import OrdersHistoryItem from "./components/OrdersHistoryItem"

const categories = ["id", "Ресторан", "Адрес", "Дата", "Статус", "Действие"]

const OrdersHistory = ({restaurantId}) => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getByUserAllOrders(restaurantId)
      .then((response) => {
        setOrders(response.data)
      })
      .catch((error) => console.log("error"))
  }, [])

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
