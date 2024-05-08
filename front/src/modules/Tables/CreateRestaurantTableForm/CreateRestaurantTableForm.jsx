import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { removeWildcard } from "@helpers/helpers"
import { ROUTERS } from "@router/Router.config"
import { createByOwnerTableRequest, getTableCapacity,getTableType } from "../api/api"

import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "@components/FormComponents/FormInputFileWrapper/FormInputFileWrapper"
import FormSelectWrapper from "@components/FormComponents/FormSelectWrapper/FormSelectWrapper"
import Button from "@ui/Button/Button"

const CreateRestaurantTableForm = ({ restaurantId }) => {
  const navigate = useNavigate()
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
      dataForCreate.capacity
    )
  }

  const createTable = () => {
    if (isFormValid()) {
      console.log(restaurantId," ",dataForCreate)
      createByOwnerTableRequest(restaurantId, dataForCreate)
        .then(() => {
          navigate(
            `${removeWildcard(
              ROUTERS.RestaurantTable.root.replace(
                ":restaurantId",
                restaurantId
              )
            )}${ROUTERS.RestaurantTable.myRestaurantTables}`
          )
        })
        .catch((error) => console.log(error))
    } else {
      alert("")
    }
  }

  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="grid grid-cols-2 gap-[30px] max-lg:grid-cols-1">
        <FormInputTextWrapper
          label="Название столика:"
          placeholder="Столик #1"
          onChange={(e) => {
            setDataForCreate((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }}
        />
        <FormInputFileWrapper label="Фотографии:" placeholder="Добавить фото" />
      </div>
      <FormSelectWrapper
        label={"Тип столика:"}
        placeholder={"Тапчан"}
        options={getTableType()}
        onChange={(e) => {
          setDataForCreate((prevState) => ({
            ...prevState,
            type: e.value,
          }))
        }}
      />
      <FormInputTextWrapper
        label="Описание:"
        placeholder="Напишите краткое описание меню...."
        onChange={(e) => {
          setDataForCreate((prevState) => ({
            ...prevState,
            description: e.target.value,
          }))
        }}
      />
      <FormSelectWrapper
        label={"Вместимость:"}
        placeholder={"10 человек"}
				options={getTableCapacity()}
        onChange={(e) => {
          setDataForCreate((prevState) => ({
            ...prevState,
            capacity: e.value,
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

export default CreateRestaurantTableForm
