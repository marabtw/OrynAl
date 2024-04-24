import ListItem from "../../components/ListItem/ListItem"
import ListCategories from "../../components/ListCategories/ListCategories"

const menuActions = [
  {
    action: "Удалить",
    onClick: () => console.log("object"),
  },
]

const categories = ["id", "Имя", "Фамилия", "Телефон", "Почта", "Действие"]
const ClientsList = ({ data }) => {
  return (
    <ul className="flex flex-col gap-[20px]">
      <ListCategories categories={categories} />
      {data.map((element, index) => (
        <ListItem
          key={element.id}
          elementData={element}
          menuActions={menuActions}
          index={index}
        />
      ))}
    </ul>
  )
}

export default ClientsList
