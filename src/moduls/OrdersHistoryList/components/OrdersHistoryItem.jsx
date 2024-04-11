import { useState } from "react"
import { DotsVerticalIcon } from "../../../ui/icons/icons"
import ContextMenu from "../../../components/ContextMenu/ContextMenu"

const OrdersHistoryList = ({ data }) => {
  const [showActions, setShowActions] = useState(false)

  const getStatus = (status) => (
    <div className="flex items-center gap-[10px] w-[50%] min-w-max">
      {(() => {
        switch (status) {
          case "booked":
            return (
              <>
                <div className="w-[12px] h-[12px] bg-[#31A24C] rounded-full"></div>
                <h5>Забронирован</h5>
              </>
            )
          case "cancelled":
            return (
              <>
                <div className="w-[12px] h-[12px] bg-[#FF0000] rounded-full"></div>
                <h5>Отменен</h5>
              </>
            )
          case "completed":
            return (
              <>
                <div className="w-[12px] h-[12px] bg-[#070707] rounded-full"></div>
                <h5>Завершен</h5>
              </>
            )
          default:
            return null
        }
      })()}
    </div>
  )

  return (
    <div>
      <li className="grid grid-cols-[.8fr_repeat(4,1fr)_.5fr] items-center w-full px-[20px] py-[10px] font-poppins bg-white rounded-[20px] max-md:hidden">
        <h5 className="">{data.id}</h5>
        <div className="flex justify-center items-center gap-[10px]">
          <img src={data.image} alt="" className="w-[50px]" />
          <h5>{data.name}</h5>
        </div>
        <h5 className="text-center">{data.address}</h5>
        <h5 className="text-center">{data.date}</h5>
        <div className="flex items-center justify-center">
          {getStatus(data.status)}
        </div>
        <div className="relative flex justify-center">
          <div className="relative">
            <DotsVerticalIcon
              className="cursor-pointer"
              onClick={() => setShowActions(!showActions)}
            />
            {showActions && (
              <ContextMenu
                menuActions={[
                  { action: "Посмотреть", to: `/order-history/${data.id}` },
                  {
                    action: "Отменить",
                    onClick: () => console.log("Отменить"),
                  },
                  {
                    action: "Завершить",
                    onClick: () => console.log("Завершить"),
                  },
                ]}
              />
            )}
          </div>
        </div>
      </li>
      <li className="md:hidden relative flex flex-col gap-2 p-[10px] py-[20px] rounded-[10px] bg-white overflow-hidden max-sm:text-[14px]">
        <div className="flex">
          <h4 className="flex">{data.id}</h4>
          <div className="absolute right-[10px] top-[20px]">
            <DotsVerticalIcon
              className="cursor-pointer text-[20px]"
              onClick={() => setShowActions(!showActions)}
            />
            {showActions && (
              <ContextMenu
                menuActions={[
                  { action: "Посмотреть", to: `/order-history/${data.id}` },
                  {
                    action: "Отменить",
                    onClick: () => console.log("Отменить"),
                  },
                  {
                    action: "Завершить",
                    onClick: () => console.log("Завершить"),
                  },
                ]}
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-[.5fr_1fr] gap-1">
          <h4>Фото</h4>
          <img
            src={data.image}
            className="w-[38px] aspect-square rounded-full"
          />
        </div>
        <div className="grid grid-cols-[.5fr_1fr] gap-1">
          <h4>Название</h4>
          <h4 className="flex">{data.name}</h4>
        </div>
        <div className="grid grid-cols-[.5fr_1fr] gap-1">
          <h4>Адрес</h4>
          <h4 className="flex  ">{data.address}</h4>
        </div>
        <div className="grid grid-cols-[.5fr_1fr] gap-1">
          <h4>Дата</h4>
          <h4 className="flex">{data.date}</h4>
        </div>
        <div className="grid grid-cols-[.5fr_1fr] gap-1">
          <h4>Статус</h4>
          <h4 className="flex">{getStatus(data.status)}</h4>
        </div>
        <div className="grid grid-cols-[.5fr_1fr] gap-1">
          <h4>В наличии</h4>
          <h4 className="flex">{data.available ? "Да" : "Нет"}</h4>
        </div>
      </li>
    </div>
  )
}

export default OrdersHistoryList
