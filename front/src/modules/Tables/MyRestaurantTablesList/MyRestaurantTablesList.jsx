import { useEffect, useState } from "react"

import {
  getAllTablesRequest,
  deleteByOwnerTableRequest,
} from "../api/api"

import ListCategories from "@components/ListCategories/ListCategories"
import ListItem from "@components/ListItem/ListItem"
import { removeWildcard } from "@helpers/helpers"
import { ROUTERS } from "@router/Router.config"

import Pagination from "@components/Pagination/Pagination"

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

	const [totalItems, setTotalItems] = useState(0)

	const [params, setParams] = useState({
    pageIndex: 1,
    limit: 10,
  })


  useEffect(() => {
    getAllTablesRequest(restaurantId, params)
      .then((res) => {
        setTables(
          res.data.items.map(({ id, image, name, type, capacity }) => {
            return { id, image, name, type, capacity }
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
			<Pagination
          totalPage={Math.ceil(totalItems / params.limit)}
          getCurrentPage={(index) => {
            setParams((prev) => {
              return { ...prev, pageIndex: index }
            })
          }}
        />
    </ul>
  )
}

export default MyRestaurantTablesList
