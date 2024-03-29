import { useState } from "react"
import OrdersHistoryItem from "./components/OrdersHistoryItem"

import { dataOrderHistory } from "../../data/personalData"
import { TriangleDownIcon } from "../../ui/icons/icons"

const OrdersHistoryList = () => {
  const [datas, setDatas] = useState(dataOrderHistory)

  return (
    <ul className="flex flex-col gap-[30px]">
      <li className="flex items-center gap-[1%] w-full px-[20px] py-[15px] bg-white rounded-[20px]">
        <div className="w-[12.5%] ">
          <h5 className="flex items-center gap-[5px] cursor-pointer">
            id <TriangleDownIcon />
          </h5>
        </div>
        <div className="w-[17.5%] ">
          <h5 className="cursor-pointer">Ресторан</h5>
        </div>
        <div className="text-center w-[17.5%] ">
          <h5 className="cursor-pointer">Адрес</h5>
        </div>
        <div className="text-center w-[17.5%] ">
          <h5 className="cursor-pointer">Дата</h5>
        </div>
        <div className="text-center w-[17.5%] ">
          <h5 className="cursor-pointer">Статус</h5>
        </div>
        <div className="text-center w-[12.5%] ">
          <h5 className="cursor-pointer">Действие</h5>
        </div>
      </li>
      {datas?.map((data) => (
        <OrdersHistoryItem key={data.id} data={data} />
      ))}
    </ul>
  )
}

export default OrdersHistoryList
