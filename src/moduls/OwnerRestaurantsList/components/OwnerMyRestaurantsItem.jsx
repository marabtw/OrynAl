import { useState } from "react"
import { DotsVerticalIcon } from "../../../ui/icons/icons"

const OwnerMyRestaurantsItem = ({ item }) => {
  const [show, setShow] = useState(false)
  return (
    <li className="grid grid-cols-[.7fr_repeat(6,1fr)_.4fr] p-[10px] py-[20px] rounded-[10px] bg-white">
      <h4 className="flex items-center">{item.id}</h4>
      <h4 className="flex justify-center items-center">{item.name}</h4>
      <h4 className="flex justify-center items-center">{item.address}</h4>
      <h4 className="flex justify-center items-center">{item.city}</h4>
      <h4 className="flex justify-center items-center">{item.callNumber}</h4>
      <h4 className="flex justify-center items-center">{item.status ? "Активный" : "Неактивный"}</h4>
      <h4 className="flex justify-center items-center">{item.owner}</h4>
      <div className="flex justify-center items-center">
        <div className="relative">
          <DotsVerticalIcon
            className="cursor-pointer"
            onClick={() => setShow(!show)}
          />
          {show && (
            <div className="absolute top-full right-full flex flex-col gap-[5px] p-[10px] border-2 border-[#ebebeb] rounded-[5px] bg-white">
              <h4 className="hover:text-[#FF0000] cursor-pointer">Удалить</h4>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

export default OwnerMyRestaurantsItem
