import Item from "./components/Item"
import { TriangleDownIcon } from "../../ui/icons/icons"

const ClientsList = ({data}) => {
	return (
		<ul className="flex flex-col gap-[20px]">
      <li className="grid grid-cols-[.7fr_repeat(4,1fr)_.4fr] p-[10px] rounded-[10px] bg-white">
        <h4 className="flex">
          id <TriangleDownIcon />
        </h4>
        <h4 className="text-center">Имя</h4>
        <h4 className="text-center">Фамилия</h4>
        <h4 className="text-center">Телефон</h4>
        <h4 className="text-center">Почта</h4>
        <h4 className="text-center">Действие</h4>
      </li>
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
	)
}

export default ClientsList
