import { Link } from "react-router-dom"
import { DotsVerticalIcon } from "../../../../ui/icons/icons"
import { useState } from "react"

const MyRestaurantTableItem = ({ item }) => {
  const [show, setShow] = useState(false)
  return (
    <li className="grid grid-cols-[.5fr_repeat(4,1fr)_.5fr] p-[10px] rounded-[10px] bg-white">
      <h4 className="flex items-center">{item.id}</h4>
      <div className="flex justify-center items-center">
        <img src={item.image} className="w-[38px] aspect-square rounded-full" />
      </div>
      <h4 className="flex justify-center items-center">{item.name}</h4>
      <h4 className="flex justify-center items-center">{item.type}</h4>
      <h4 className="flex justify-center items-center">{item.capacity}</h4>
      <div className="flex justify-center items-center">
        <div className="relative">
          <DotsVerticalIcon className="cursor-pointer" onClick={() => setShow(!show)} />
          {show && (
            <div className="absolute top-full right-full flex flex-col gap-[5px] p-[10px] border-2 border-[#ebebeb] rounded-[5px] bg-white">
              <Link to={`/my-restaurants/tables/${item.id}`} className="hover:text-[#FF0000] cursor-pointer">Изменить</Link>
              <h4 className="hover:text-[#FF0000] cursor-pointer">Удалить</h4>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

export default MyRestaurantTableItem
