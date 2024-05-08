import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { removeWildcard } from "@helpers/helpers"
import { ROUTERS } from "@router/Router.config"
import {
  createByOwnerMenuItemRequest,
  getMenuTypes,
} from "../api/api"

import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "@components/FormComponents/FormInputFileWrapper/FormInputFileWrapper"
import FormSelectWrapper from "@components/FormComponents/FormSelectWrapper/FormSelectWrapper"
import Button from "@ui/Button/Button"

const CreateRestaurantMenu = ({ restaurantId }) => {
  const navigate = useNavigate()
  const [dataForCreate, setDataForCreate] = useState({
    name: "",
    type: "",
    description: "",
    price: 0,
    available: true,
  })

	useEffect(() => {console.log(dataForCreate)}, [dataForCreate])

  const isFormValid = () => {
    return (
      dataForCreate.name &&
      dataForCreate.type &&
      dataForCreate.description &&
      dataForCreate.price
    )
  }

  const createMenuFood = () => {
    if (isFormValid()) {
      console.log(true)
      createByOwnerMenuItemRequest(restaurantId, dataForCreate)
        .then(() => {
          navigate(
            `${removeWildcard(
              ROUTERS.RestaurantMenu.root.replace(":restaurantId", restaurantId)
            )}${ROUTERS.RestaurantMenu.myRestaurantMenu}`
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
          label="Название меню:"
          placeholder="Чизбургер"
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
        label={"Тип меню:"}
        placeholder={"Фаст-фуд"}
        options={getMenuTypes()}
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
      <div className="grid grid-cols-2 gap-[20px]">
        <FormInputTextWrapper
          label={"Цена:"}
          placeholder={"1200 тенге"}
					type="number"
          onChange={(e) => {
            setDataForCreate((prevState) => ({
              ...prevState,
              price: e.target.value,
            }))
          }}
        />
        <FormSelectWrapper
          label={"Доступность"}
          placeholder={"Доступен"}
          options={[
            { label: "Доступен", value: true },
            { label: "Не доступен", value: false },
          ]}
          onChange={(e) => {
            setDataForCreate((prevState) => ({
              ...prevState,
              status: e.value,
            }))
          }}
        />
      </div>
      <Button
        text="Создать"
        gradient={true}
        spacingClass={"mx-auto px-[120px] py-[20px]"}
        onClick={createMenuFood}
      />
    </form>
  )
}

export default CreateRestaurantMenu
