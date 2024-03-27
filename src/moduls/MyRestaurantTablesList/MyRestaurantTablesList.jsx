import { dataMyRestaurantTables } from "../../data/myRestaurantData"
import MyRestaurantTableItem from "./components/MyRestaurantTable/MyRestaurantTableItem"

const MyRestaurantTablesList = () => {
  return (
    <ul className="flex flex-col gap-[20px]">
      <li className="grid grid-cols-[.5fr_repeat(4,1fr)_.5fr] p-[10px] rounded-[10px] bg-white">
        <h4 className="flex items-center">ID</h4>
        <h4 className="flex justify-center items-center">Фото</h4>
        <h4 className="flex justify-center items-center">Название</h4>
        <h4 className="flex justify-center items-center">Тип столика</h4>
        <h4 className="flex justify-center items-center">Вместимость</h4>
        <h4 className="flex justify-center items-center">Действие</h4>
      </li>
      {dataMyRestaurantTables.map((table) => (
        <MyRestaurantTableItem item={table}/>
      ))}
    </ul>
  )
}

export default MyRestaurantTablesList
