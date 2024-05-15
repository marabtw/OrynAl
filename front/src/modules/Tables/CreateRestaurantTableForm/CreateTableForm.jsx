import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { ROUTERS } from "@router/Router.config"
import {
  createByOwnerTableRequest,
  getTableType,
} from "../api"

import { removeWildcard } from "@helpers"
import { useLoading, useToast } from "@hooks"

import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "@components/FormComponents/FormInputFileWrapper"
import FormSelectWrapper from "@components/FormComponents/FormSelectWrapper"
import Button from "@ui/Button/Button"

const CreateTableForm = ({ restaurantId }) => {
  const navigate = useNavigate()
  const setLoading = useLoading()
  const showNotification = useToast()

  const [dataForCreate, setDataForCreate] = useState({
    name: "",
    type: "",
    description: "",
    capacity: 0,
  })

  const isFormValid = () => {
    return (
      dataForCreate.name &&
      dataForCreate.type &&
      dataForCreate.description &&
      dataForCreate.capacity > 0
    )
  }

  const createTable = () => {
    if (!isFormValid()) {
      showNotification("Форма невалидна", "warning")
      return
    }

    setLoading(true)
    createByOwnerTableRequest(restaurantId, dataForCreate)
      .then(() => {
        showNotification("Успешно создан", "success")
        navigate(
          `${removeWildcard(
            ROUTERS.RestaurantTable.root.replace(":restaurantId", restaurantId)
          )}${ROUTERS.RestaurantTable.myRestaurantTables}`
        )
      })
      .catch((err) => showNotification(err.toString(), "error"))
      .finally(() => setLoading(false))
  }

  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="grid grid-cols-2 gap-[30px] max-lg:grid-cols-1">
        <FormInputTextWrapper
          label="Название столика:"
          placeholder="Столик #1"
          onChange={(value) => {
            setDataForCreate((prevState) => ({
              ...prevState,
              name: value,
            }))
          }}
        />
        <FormInputFileWrapper label="Фотографии:" placeholder="Добавить фото" />
      </div>
      <FormSelectWrapper
        label={"Тип столика:"}
        placeholder={"Тапчан"}
        options={getTableType()}
        onChange={(value) => {
          setDataForCreate((prevState) => ({
            ...prevState,
            type: value,
          }))
        }}
      />
      <FormInputTextWrapper
        label="Описание:"
        placeholder="Напишите краткое описание меню...."
        onChange={(value) => {
          setDataForCreate((prevState) => ({
            ...prevState,
            description: value,
          }))
        }}
      />
      <FormInputTextWrapper
        label={"Вместимость:"}
        placeholder={"10 человек"}
        type={"number"}
        onChange={(value) => {
          setDataForCreate((prevState) => ({
            ...prevState,
            capacity: +value,
          }))
        }}
      />
      <Button
        text="Создать"
        gradient={true}
        spacingClass={"mx-auto px-[120px] py-[20px]"}
        onClick={createTable}
      />
    </form>
  )
}

export default CreateTableForm
