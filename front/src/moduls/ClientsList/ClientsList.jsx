import { useEffect, useState } from "react"
import { getClients, deleteClient } from "./api/api"
import ListCategories from "../../components/ListCategories/ListCategories"
import ListItem from "../../components/ListItem/ListItem"

const categories = ["id", "Имя", "Фамилия", "Телефон", "Почта", "Действие"]

const ClientsList = () => {
  const [clients, setClients] = useState([])

  const getMenuActions = (id) => {
    return [
      {
        action: "Удалить",
        onClick: () => deleteClientData(id),
      },
    ]
  }

  const deleteClientData = (clientId) => {
    deleteClient(clientId)
      .then(
        setClients((prevOwnersData) =>
          prevOwnersData.filter((owner) => owner.id !== clientId)
        )
      )
      .catch()
  }

  useEffect(() => {
    getClients()
      .then((res) => {
        setClients(
          res.data.map((client) => {
            const { role, ...rest } = client
            return rest
          })
        )
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <ul className="flex flex-col gap-[20px]">
      <ListCategories categories={categories} />
      {clients?.map((item, index) => (
        <ListItem
          key={item.id}
          elementData={item}
          menuActions={getMenuActions(item.id)}
          index={index}
        />
      ))}
    </ul>
  )
}

export default ClientsList
