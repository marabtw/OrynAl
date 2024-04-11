import OrdersHistoryItem from "./components/OrdersHistoryItem"
import { dataOrderHistory } from "../../data/personalData"
import ListCategories from "../../components/ListCategories/ListCategories"

const categories = ["id", "Ресторан", "Адрес", "Дата", "Статус", "Действие"]
const OrdersHistoryList = () => {

  return (
    <ul className="flex flex-col gap-[30px]">
      <ListCategories categories={categories} />
      {dataOrderHistory?.map((data) => (
        <OrdersHistoryItem key={data.id} data={data} />
      ))}
    </ul>
  )
}

export default OrdersHistoryList
