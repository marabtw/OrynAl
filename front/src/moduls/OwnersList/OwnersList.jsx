import ListItem from "../../components/ListItem/ListItem"
import ListCategories from "../../components/ListCategories/ListCategories"
import { getAllOwners, deleteOwner } from "./api/api"
import { useEffect, useState } from "react"

const categories = ["id", "Имя", "Фамилия", "Почта", "Телефон", "Действие"]

const OwnersList = () => {
  const [ownersData, setOwnerData] = useState([])

  const getMenuActions = (id) => {
    return [
      {
        action: "Удалить",
        onClick: () => deleteOwnerData(id),
      },
    ]
  }

  const deleteOwnerData = (ownerId) => {
    deleteOwner(ownerId)
      .then(() => {
        setOwnerData((prevOwnersData) =>
          prevOwnersData.filter((owner) => owner.id !== ownerId)
        )
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getAllOwners()
      .then((res) => {
        if (res.data === null) setOwnerData([])
        else
          setOwnerData(
            res.data.map((owner) => {
              const { role, ...rest } = owner
              return rest
            })
          )
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <ul className="flex flex-col gap-[20px]">
      <ListCategories categories={categories} />
      {ownersData?.length > 0
        ? ownersData?.map((element, index) => (
            <ListItem
              key={element.id}
              elementData={element}
              menuActions={getMenuActions(element.id)}
              index={index}
            />
          ))
        : ""}
    </ul>
  )
}

export default OwnersList
