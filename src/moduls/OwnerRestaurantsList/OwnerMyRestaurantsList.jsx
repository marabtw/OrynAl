import { TriangleDownIcon } from "../../ui/icons/icons"
import OwnerMyRestaurantsItem from "./components/OwnerMyRestaurantsItem"

const OwnerMyRestaurantsList = ({ data }) => {

  return (
    <ul className="flex flex-col gap-[20px]">
      <li className="grid grid-cols-[.7fr_repeat(6,1fr)_.4fr] px-[20px] py-[10px] bg-white rounded-[10px]">
        <h4 className="flex">
          id <TriangleDownIcon />
        </h4>
        <h4 className="text-center">Название</h4>
        <h4 className="text-center">Адрес</h4>
        <h4 className="text-center">Город</h4>
        <h4 className="text-center">Номер телефона</h4>
        <h4 className="text-center">Статус</h4>
        <h4 className="text-center">Владелец</h4>
        <h4 className="text-center">Действие</h4>
      </li>
      {data.map((item) => (
				<OwnerMyRestaurantsItem item={item}/>
      ))}
    </ul>
  )
}

export default OwnerMyRestaurantsList
