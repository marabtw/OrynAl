import { useContext, useState, useEffect } from "react"
import { axios } from "@lib/axios"

import TableCard from "./components/TableCard"
import SortByCategoryContainer from "@components/SortByCategoryContainer/SortByCategoryContainer"
import ChooseTime from "./components/ChooseTime"

import Pagination from "@components/Pagination/Pagination"

import { getAllTablesRequest, getTableCategoriesRequest } from "../../../api"
import { UIContext } from "src/shared/context/UIContext"

const TableReservation = ({ restaurantId, getTableId }) => {
  const { setIsLoading } = useContext(UIContext)
  const [tables, setTables] = useState([])
  const [selectedTableId, setSelectedTableId] = useState("")
  const [categories, setCategories] = useState([])

  const [totalItems, setTotalItems] = useState(0)

  const [filter, setFilter] = useState({
    date: "",
    time: "",
  })

  const [params, setParams] = useState({
    pageIndex: 1,
    limit: 8,
    q: "",
    date: "",
  })

  useEffect(() => {
    if (!filter.date || !filter.time) return
    const formattedData = `${filter.date}T${filter.time}:00`
    setParams((prev) => ({
      ...prev,
      date: formattedData,
    }))
  }, [filter])

  useEffect(() => {
    setIsLoading(true)
    const cancelTokenSource = axios.CancelToken.source()
    getTableCategoriesRequest({
      restaurantId,
      cancelToken: cancelTokenSource.token,
    })
      .then(({ data }) => {
        setCategories([
          {
            forShow: "Все",
            value: "",
          },
          ...data.map((item) => ({
            forShow: item,
            value: item,
          })),
        ])
      })
      .catch((err) => {})
      .finally(() => {
        setIsLoading(false)
      })

    return () => {
      cancelTokenSource.cancel()
    }
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const cancelTokenSource = axios.CancelToken.source()
    getAllTablesRequest({
      restaurantId,
      params,
      cancelToken: cancelTokenSource.token,
    })
      .then(({ data }) => {
        if (data === null) setTables([])
        else {
          setTables(
            data.items.map((owner) => {
              const { role, ...rest } = owner
              return rest
            })
          )
          setTotalItems(data.totalItems)
        }
      })
      .catch((error) => {})
      .finally(setIsLoading(false))

    return () => {
      cancelTokenSource.cancel()
    }
  }, [params])

  return (
    <>
      <ChooseTime getFilter={setFilter} />
      <div className="px-[180px] max-2xl:px-[80px] max-lg:px-[20px]">
        <SortByCategoryContainer
          categories={categories}
          className={"mt-[50px] px-0 max-lg:mt-[20px]"}
          getCategory={(value) => {
            setParams((prev) => ({ ...prev, q: value }))
          }}
        />
        <div
          className="grid grid-cols-4 gap-[30px] max-xl:grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2
				justify-between 
				mt-[50px] max-lg:mt-[20px]"
        >
          {tables?.map((table) => (
            <div className="flex justify-center items-center">
              <TableCard
                key={table.id}
                tableData={table}
                getTableId={(id) => {
                  setSelectedTableId(id)
                  getTableId(id)
                }}
                selectedTableId={selectedTableId}
              />
            </div>
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
