import ListItem from "../../components/ListItem/ListItem"
import ListCategories from "../../components/ListCategories/ListCategories"

const categories = [
  "id",
  "Название",
  "Адрес",
  "Город",
  "Номер телефона",
  "Статус",
  "Владелец",
  "Действие",
]

const RestaurantsList = ({ data }) => {
  return (
    <ul className="flex flex-col gap-[20px]">
      <ListCategories categories={categories} />
      {data.map((elementData, index) => (
        <ListItem
          key={elementData.id}
          elementData={elementData}
          index={index}
          menuActions={[
            {
              action: "Удалить",
              onClick: () => console.log("object"),
            },
            {
              action: "Посмотреть",
              to: `/my-restaurants/${elementData.id}`,
            },
          ]}
        />
      ))}
    </ul>
  )
}

export default RestaurantsList
