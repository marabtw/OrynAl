import { dataMyRestaurantMenus } from "../../data/myRestaurantData"
import MyRestaurantMenuItem from "./components/MyRestaurantMenuItem"

const MyRestaurantsMenusList = () => {
	return (
    <ul className="flex flex-col gap-[20px]">
      <li className="grid grid-cols-[.5fr_repeat(6,1fr)_.5fr] p-[10px] rounded-[10px] bg-white">
        <h4 className="flex items-center">ID</h4>
        <h4 className="flex justify-center items-center">Фото</h4>
        <h4 className="flex justify-center items-center">Название</h4>
        <h4 className="flex justify-center items-center">Тип столика</h4>
        <h4 className="flex justify-center items-center">Описание</h4>
        <h4 className="flex justify-center items-center">Цена</h4>
        <h4 className="flex justify-center items-center">В наличии</h4>
        <h4 className="flex justify-center items-center">Действие</h4>
      </li>
      {dataMyRestaurantMenus.map((table) => (
        <MyRestaurantMenuItem key={table.id} item={table}/>
      ))}
    </ul>
  )
}

export default MyRestaurantsMenusList
