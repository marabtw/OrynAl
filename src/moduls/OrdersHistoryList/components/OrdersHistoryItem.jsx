import { useState } from "react"
import { DotsVerticalIcon } from "../../../ui/icons/icons"
import ActionsContainer from "../../../components/ActionsContainer/ActionsContainer"

const OrdersHistoryList = ({ data }) => {
  const [showActions, setShowActions] = useState(false)
  const [actions, setActions] = useState([
    { action: "Посмотреть", to: `/order-history/${data.id}` },
    { action: "Отменить", onClick: () => console.log("Отменить") },
    { action: "Завершить", onClick: () => console.log("Завершить") },
  ])

  const getStatus = (status) => {
    switch (status) {
      case "booked":
        return (
          <div className="flex items-center justify-center w-[17.5%]">
            <div className="flex items-center gap-[10px] w-[50%] min-w-max">
              <div className="w-[12px] h-[12px] bg-[#31A24C] rounded-full"></div>
              <h5>Забронирован</h5>
            </div>
          </div>
        )
      case "cancelled":
        return (
          <div className="flex items-center justify-center w-[17.5%]">
            <div className="flex items-center gap-[10px] w-[50%] min-w-max">
              <div className="w-[12px] h-[12px] bg-[#FF0000] rounded-full"></div>
              <h5>Отменен</h5>
            </div>
          </div>
        )
      case "completed":
        return (
          <div className="flex items-center justify-center w-[17.5%]">
            <div className="flex items-center gap-[10px] w-[50%] min-w-max">
              <div className="w-[12px] h-[12px] bg-[#070707] rounded-full"></div>
              <h5>Завершен</h5>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <li
      key={data.id}
      className="flex items-center gap-[1%] w-full px-[20px] py-[15px] font-poppins bg-white rounded-[20px]"
    >
      <h5 className="w-[12.5%]">{data.id}</h5>
      <div className="flex items-center gap-[10px] w-[17.5%]">
        <img src={data.image} alt="" className="w-[50px]" />
        <h5>{data.name}</h5>
      </div>
      <h5 className="text-center w-[17.5%]">{data.address}</h5>
      <h5 className="text-center w-[17.5%]">{data.date}</h5>
      {getStatus(data.status)}
      <div className="relative flex justify-center w-[12.5%]">
        <div className="relative">
          <DotsVerticalIcon
            className="cursor-pointer"
            onClick={() => setShowActions(!showActions)}
          />
          {showActions && <ActionsContainer actions={actions} />}
        </div>
      </div>
    </li>
  )
}

export default OrdersHistoryList
