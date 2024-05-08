import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
// import { dataTableUpdate } from "@data/myRestaurantData"

import { ROUTERS } from "@router/Router.config"
import { removeWildcard } from "@helpers/helpers"
import {
  getByOwnerTableRequest,
  updateByOwnerTableRequest,
  deleteByOwnerTableRequest,
} from "../api/api"

import PreviousDataDisplay from "@components/PreviousDataDisplay/PreviousDataDisplay"
import UpdateFormsContainer from "@components/UpdateFormsContainer/UpdateFormsContainer"
import Form from "./components/Form"
import Button from "@ui/Button/Button"

const UpdateRestaurantTableForm = ({ restaurantId }) => {
  const navigate = useNavigate()
  const { tableId } = useParams()
  const [tableData, setTableData] = useState([])

  const [dataForUpdate, setDataForUpdate] = useState({
    name: "",
    type: "",
    description: "",
    capacity: "",
  })

  useEffect(() => {
    getByOwnerTableRequest(restaurantId, tableId)
      .then((response) => {
        setTableData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [restaurantId])

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
    updateByOwnerTableRequest(restaurantId, tableId, updatedData)
      .then(() => {
        navigate(
          `${removeWildcard(
            ROUTERS.RestaurantTable.root.replace(":restaurantId", restaurantId)
          )}${ROUTERS.RestaurantTable.myRestaurantTables}`
        )
      })
      .catch((error) => console.log(error))
  }

  const deleteTableData = () => {
    deleteByOwnerTableRequest(restaurantId, tableId)
      .then(() => {
        navigate(
          `${removeWildcard(
            ROUTERS.RestaurantTable.root.replace(":restaurantId", restaurantId)
          )}${ROUTERS.RestaurantTable.myRestaurantTables}`
        )
      })
      .catch((error) => console.log(error))
  }

  return (
    <UpdateFormsContainer>
      <div className="flex flex-col gap-[30px] w-full max-md:gap-[15px]">
        <h3 className="text-[20px] font-[600] leading-[30px]">
          Изменить столик
        </h3>
        <div className="flex justify-between gap-[20px] max-md:flex-col">
          <div className="flex flex-col justify-between gap-[10px] w-full max-md:gap-[15px]">
            <PreviousDataDisplay label={"ID:"} value={tableData.id} />
            <PreviousDataDisplay label={"Название:"} value={tableData.name} />
            <PreviousDataDisplay
              label={"Тип столика:"}
              value={tableData.type}
            />
          </div>
          {tableData.image ? (
            <img
              src={tableData.image}
              alt=""
              className="w-[350px] rounded-[20px] max-md:w-full max-md:h-[200px]"
            />
          ) : (
            <div className="w-[350px] border rounded-[20px]"></div>
          )}
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
      <Form update={updateTableData} setDataForUpdate={setDataForUpdate} />
    </UpdateFormsContainer>
  )
}

export default UpdateRestaurantTableForm
