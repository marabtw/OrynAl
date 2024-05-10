import { useEffect, useState, useContext } from "react"
import {
  getByAdminAllClientsRequest,
  deleteByAdminClientRequest,
} from "../../api/api"
import ListCategories from "@components/ListCategories/ListCategories"
import ListItem from "@components/ListItem/ListItem"
import Pagination from "@components/Pagination/Pagination"
import { UIContext } from "@context/UIContext"
import Loading from "@components/Loading/Loading"

const categories = ["id", "Имя", "Фамилия", "Почта", "Телефон", "Действие"]

const ClientsList = () => {
  const [clients, setClients] = useState([])
  const { isLoading, setIsLoading } = useContext(UIContext)

  const [totalItems, setTotalItems] = useState(0)

  const [params, setParams] = useState({
    pageIndex: 1,
    limit: 10,
  })

  useEffect(() => {
    setIsLoading(true)
    getByAdminAllClientsRequest(params)
      .then((res) => {
        if (!res.data) setClients([])
        else {
          setClients(
            res.data.items.map((client) => {
              const { role, ...rest } = client
              return rest
            })
          )
          setTotalItems(res.data.totalItems)
        }
      })
      .catch((error) => {
        setClients([])
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }, [params])

  const deleteClientData = async (clientId) => {
    setIsLoading(true)
    await deleteByAdminClientRequest(clientId)
    getByAdminAllClientsRequest(params)
      .then((res) => {
        if (!res.data) setClients([])
        else {
          setClients(
            res.data.items.map((client) => {
              const { role, ...rest } = client
              return rest
            })
          )
          setTotalItems(res.data.totalItems)
        }
      })
      .catch((error) => {
        setClients([])
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }

  const getMenuActions = (id) => {
    return [
      {
        action: "Удалить",
        onClick: () => deleteClientData(id),
      },
    ]
  }

  return (
    <>
      {isLoading && <Loading />}
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
        <Pagination
          totalPage={Math.ceil(totalItems / params.limit)}
          getCurrentPage={(index) => {
            setParams((prev) => {
              return { ...prev, pageIndex: index }
            })
          }}
        />
      </ul>
    </>
  )
}

export default ClientsList
