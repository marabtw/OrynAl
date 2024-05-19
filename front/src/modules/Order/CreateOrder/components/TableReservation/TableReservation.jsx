import { useContext, useState, useEffect } from "react"

import TableCard from "./components/TableCard"
import SortByCategoryContainer from "@components/SortByCategoryContainer/SortByCategoryContainer"
import ChooseTime from "./components/ChooseTime"

import Pagination from "@components/Pagination/Pagination"

import { getAllTablesRequest } from "../../../api"
import { UIContext } from "src/shared/context/UIContext"

const sortLists = [
  "Сортировать в этом разделе",
  "Все",
  "Малый зал",
  "Банкетный зал",
  "Основной зал",
  "Терраса",
]

const TableReservation = ({ restaurantId, getTableId }) => {
  const { setIsLoading } = useContext(UIContext)
  const [timeFilter, setTimeFilter] = useState({ from: "", to: "" })
  const [tables, setTables] = useState([])
  const [selectedTableId, setSelectedTableId] = useState("")

  const [totalItems, setTotalItems] = useState(0)

  const [params, setParams] = useState({
    pageIndex: 1,
    limit: 8,
  })

  useEffect(() => {
    setIsLoading(true)
    getAllTablesRequest({restaurantId, params})
      .then((res) => {
        if (res.data === null) setTables([])
        else {
          setTables(
            res.data.items.map((owner) => {
              const { role, ...rest } = owner
              return rest
            })
          )
          setTotalItems(res.data.totalItems)
        }
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(false))
  }, [params])

  return (
    <>
      <ChooseTime />
      <div className="px-[180px] max-2xl:px-[80px] max-lg:px-[20px]">
        <SortByCategoryContainer
          sortList={sortLists}
          className={"mt-[50px] px-0"}
        />
        <div className="grid grid-cols-4 justify-between gap-[30px] mt-[50px] max-2xl:grid-cols-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          {tables.map((table) => (
            <TableCard
              key={table.id}
              tableData={table}
              getTableId={(id) => {
								setSelectedTableId(id)
                getTableId(id)
              }}
							selectedTableId={selectedTableId}
            />
          ))}
        </div>
        <Pagination
          totalPage={Math.ceil(totalItems / params.limit)}
          getCurrentPage={(index) => {
            setParams((prev) => {
              return { ...prev, pageIndex: index }
            })
          }}
        />
      </div>
    </>
  )
}

export default TableReservation
