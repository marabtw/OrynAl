import ListItem from "../../components/ListItem/ListItem"
import ListCategories from "../../components/ListCategories/ListCategories"
import { getOwners } from "./api/api"
import { useEffect, useState } from "react"

const getMenuActions = () => {
  return [
    {
      action: "Удалить",
      onClick: () => console.log("object"),
    },
  ]
}

const categories = ["id", "Имя", "Телефон", "Почта", "Действие"]

const OwnersList = () => {
  const [ownersData, setOwnerData] = useState([])

  useEffect(() => {
    getOwners()
      .then((response) => {
				if(response.status === 200) setOwnerData(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <ul className="flex flex-col gap-[20px]">
      <ListCategories categories={categories} />
      {ownersData?.map((element, index) => (
        <ListItem
          key={element.id}
          elementData={element}
          menuActions={getMenuActions()}
          index={index}
        />
      ))}
    </ul>
  )
}

export default OwnersList
