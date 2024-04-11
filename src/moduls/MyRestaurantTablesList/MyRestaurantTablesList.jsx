import { dataMyRestaurantTables } from "../../data/myRestaurantData"
import ListCategories from "../../components/ListCategories/ListCategories"
import ListItem from "../../components/ListItem/ListItem"

const categories = [
  "ID",
  "Фото",
  "Название",
  "Тип столика",
  "Вместимость",
  "Действие",
]

const MyRestaurantTablesList = () => {
  return (
    <ul className="flex flex-col gap-[20px]">
      <ListCategories categories={categories} />
      {dataMyRestaurantTables.map((elementData, index) => (
        <ListItem
          key={elementData.id}
          elementData={elementData}
          index={index}
          menuActions={[
            {
              action: "Изменить",
              to: `/my-restaurants/tables/${elementData.id}`,
            },
            {
              action: "Удалить",
              onClick: () => console.log("object"),
            },
          ]}
        />
      ))}
    </ul>
  )
}

export default MyRestaurantTablesList
