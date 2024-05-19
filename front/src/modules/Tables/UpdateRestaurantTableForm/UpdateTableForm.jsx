import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { axios } from "@lib/axios"

import { ROUTERS } from "@router/Router.config"
import {
  getByOwnerTableRequest,
  updateByOwnerTableRequest,
  deleteByOwnerTableRequest,
} from "../api"

import { useLoading, useToast } from "@hooks"
import { isObjectEqual } from "@utils/index"
import { removeWildcard } from "@helpers"

import PreviousDataDisplay from "@components/PreviousDataDisplay/PreviousDataDisplay"
import UpdateFormsContainer from "@components/UpdateFormsContainer"
import Form from "./components/Form"
import Button from "@ui/Button/Button"

const UpdateTableForm = ({ restaurantId }) => {
  const navigate = useNavigate()
  const { tableId } = useParams()
  const setLoading = useLoading()
  const showNotification = useToast()

  const [tableData, setTableData] = useState([])
  const [dataForUpdate, setDataForUpdate] = useState({
    name: "",
    type: "",
    description: "",
    capacity: 0,
  })

  useEffect(() => {
    setLoading(true)
    const cancelToken = axios.CancelToken.source()

    getByOwnerTableRequest({ restaurantId, tableId, cancelToken })
      .then(({ data }) => {
        setTableData(data)
        showNotification("getted", "success")
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          showNotification("Запрос был отменен", "warning")
        } else {
          showNotification(err.toString(), "error")
        }
      })
      .finally(() => {
        setLoading(false)
      })

    return () => {
      cancelToken.cancel()
    }
  }, [tableId])

  const updateTableData = () => {
    const updatedData = {
      ...tableData,
      ...Object.entries(dataForUpdate).reduce((acc, [key, value]) => {
        if (value !== "") {
          acc[key] = value
        }
        return acc
      }, {}),
    }
    if (isObjectEqual(updatedData, tableData)) {
      showNotification("Данные не изменились", "info")
      return
    }

    setLoading(true)

    updateByOwnerTableRequest({ restaurantId, tableId, updatedData })
      .then(() => {
        showNotification("Успешно обновлено", "success")
        navigate(
          `${removeWildcard(
            ROUTERS.RestaurantTable.root.replace(":restaurantId", restaurantId)
          )}${ROUTERS.RestaurantTable.myRestaurantTables}`
        )
      })
      .catch((err) => {
        showNotification(err.toString(), "error")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const deleteTableData = () => {
    setLoading(true)
    deleteByOwnerTableRequest({ restaurantId, tableId })
      .then(() => {
        showNotification("deleted", "success")
        navigate(
          `${removeWildcard(
            ROUTERS.RestaurantTable.root.replace(":restaurantId", restaurantId)
          )}${ROUTERS.RestaurantTable.myRestaurantTables}`
        )
      })
      .catch((err) => {
        showNotification(err.toString(), "error")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <UpdateFormsContainer>
      <div className="flex flex-col gap-[30px] w-full max-md:gap-[15px]">
        <h3 className="text-[20px] font-[600] max-md:text-center">
          Изменить столик
        </h3>
        <div className="flex justify-between gap-[20px]">
          <div className="flex flex-col justify-between gap-[10px] w-full">
            <PreviousDataDisplay label={"ID:"} value={tableData.id} />
            <PreviousDataDisplay label={"Название:"} value={tableData.name} />
            <PreviousDataDisplay
              label={"Тип столика:"}
              value={tableData.type}
            />
          </div>
          <div className="max-w-[50%] w-[350px] rounded-[20px] border overflow-hidden">
            {tableData.image ? (
              <img
                src={tableData.image}
                alt=""
                className="w-[100%] h-full bg-cover"
              />
            ) : (
              <div className="w-[350px] border rounded-[20px]"></div>
            )}
          </div>
        </div>
        <PreviousDataDisplay
          label={"Описание:"}
          value={tableData.description}
        />
        <PreviousDataDisplay
          label={"Вместимость:"}
          value={`${tableData.capacity} человек`}
        />
        <Button
          text="Удалить"
          backgroundColor={"#FF5050"}
          spacingClass={"mx-auto px-[110px] py-[20px]"}
          onClick={deleteTableData}
        />
      </div>
      <Form
        update={updateTableData}
        tableData={tableData}
        setDataForUpdate={setDataForUpdate}
      />
    </UpdateFormsContainer>
  )
}

export default UpdateTableForm
