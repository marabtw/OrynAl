import { dataMyRestaurantMenus } from "../../data/myRestaurantData"
import ListItem from "../../components/ListItem/ListItem"
import ListCategories from "../../components/ListCategories/ListCategories"

const categories = [
  "ID",
  "Фото",
  "Название",
  "Тип блюда",
  "Описание",
  "Цена",
  "В наличии",
  "Действие",
]

const MyRestaurantsMenusList = () => {
  return (
    <ul className="flex flex-col gap-[20px]">
      <ListCategories categories={categories} />
      {dataMyRestaurantMenus.map((elementData, index) => (
        <ListItem
          key={elementData.id}
          elementData={elementData}
          index={index}
          menuActions={[
            {
              action: "Изменить",
              to: `/my-restaurants/menus/${elementData.id}`,
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

export default MyRestaurantsMenusList
