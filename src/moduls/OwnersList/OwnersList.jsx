import OwnerItem from "./components/OwnerItem"
import { TriangleDownIcon } from "../../ui/icons/icons"

const OwnersList = ({ data }) => {
  return (
    <ul className="flex flex-col gap-[20px]">
      <li className="grid grid-cols-[.7fr_repeat(3,1fr)_.4fr] px-[20px] py-[10px] bg-white">
        <h4 className="flex">
          id <TriangleDownIcon />
        </h4>
        <h4 className="text-center">Имя</h4>
        <h4 className="text-center">Телефон</h4>
        <h4 className="text-center">Почта</h4>
        <h4 className="text-center">Действие</h4>
      </li>
      {data.map((item) => (
        <OwnerItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default OwnersList
