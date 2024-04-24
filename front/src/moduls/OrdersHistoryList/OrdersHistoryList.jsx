import OrdersHistoryItem from "./components/OrdersHistoryItem"
import { dataOrderHistory } from "../../data/personalData"
import ListCategories from "../../components/ListCategories/ListCategories"
import { useEffect, useState } from "react"
import { getOrders } from "./api/getDatas"

const categories = ["id", "Ресторан", "Адрес", "Дата", "Статус", "Действие"]
const OrdersHistoryList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getOrders()
      .then((response) => console.log("server work"))
      .catch((error) => console.log("error"))
  }, [])

  return (
    <ul className="flex flex-col gap-[30px]">
      <ListCategories categories={categories} />
      {data?.map((dataItem) => (
        <OrdersHistoryItem key={dataItem.id} data={dataItem} />
      ))}
    </ul>
  )
}

export default OrdersHistoryList
