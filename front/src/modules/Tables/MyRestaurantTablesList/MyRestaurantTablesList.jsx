import { useEffect, useState } from "react"

import {
  getByOwnerAllTablesRequest,
  deleteByOwnerTableRequest,
} from "../api/api"

import ListCategories from "@components/ListCategories/ListCategories"
import ListItem from "@components/ListItem/ListItem"
import { removeWildcard } from "@helpers/helpers"
import { ROUTERS } from "@router/Router.config"

const categories = [
  "ID",
  "Фото",
  "Название",
  "Тип столика",
  "Вместимость",
  "Действие",
]

const MyRestaurantTablesList = ({ restaurantId }) => {
  const [tables, setTables] = useState([])

  useEffect(() => {
    getByOwnerAllTablesRequest(restaurantId)
      .then((res) => {
        setTables(
          res.data.items.map(({ id, name, type, capacity }) => {
            return { id, name, type, capacity }
          })
        )
      })
      .catch((error) => console.log(error))
  }, [])

  const deleteTableById = async (tableId) => {
    await deleteByOwnerTableRequest(restaurantId, tableId)
  }

  const getContextMenuItems = (id) => {
    return [
      {
        action: "Изменить",
        to: `${removeWildcard(
          ROUTERS.RestaurantTable.root.replace(":restaurantId", restaurantId)
        )}${ROUTERS.RestaurantTable.updateTable.replace(":tableId", id)}`,
      },
      {
        action: "Удалить",
        onClick: () => deleteTableById(id),
      },
    ]
  }

  return (
    <ul className="flex flex-col gap-[20px]">
      <ListCategories categories={categories} />
      {tables?.length > 0 ? (
        tables?.map((table, index) => (
          <ListItem
            key={table.id}
            elementData={table}
            index={index}
            menuActions={getContextMenuItems(table.id)}
          />
        ))
      ) : (
        <div className="flex justify-center items-center text-[#b0b0b0]">
          Tables not found
        </div>
      )}
    </ul>
  )
}

export default MyRestaurantTablesList
