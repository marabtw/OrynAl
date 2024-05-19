import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { ROUTERS } from "@router/Router.config"
import { createByOwnerMenuItemRequest, getMenuTypes } from "../api"

import { useLoading, useToast } from "@hooks"
import { removeWildcard } from "@helpers"

import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "@components/FormComponents/FormInputFileWrapper"
import FormSelectWrapper from "@components/FormComponents/FormSelectWrapper"
import Button from "@ui/Button/Button"

const CreateRestaurantMenu = ({ restaurantId }) => {
  const navigate = useNavigate()
  const setLoading = useLoading()
  const showNotification = useToast()

  const [dataForCreate, setDataForCreate] = useState({
    name: "",
    type: "",
    description: "",
    price: 0,
    available: true,
    services: [],
  })

  const handleChange = (key, value) => {
    setDataForCreate((prevState) => {
      if (Array.isArray(dataForCreate[key]) && key === "services") {
        const existingIndex = prevState[key].findIndex(
          (item) => item.id === value.id
        )
        if (existingIndex !== -1) {
          return {
            ...prevState,
            [key]: prevState[key].filter((_, index) => index !== existingIndex),
          }
        } else {
          return {
            ...prevState,
            [key]: [...prevState[key], value],
          }
        }
      } else {
        return {
          ...prevState,
          [key]: value,
        }
      }
    })
  }

  const isFormValid = () => {
    return (
      dataForCreate.name &&
      dataForCreate.type &&
      dataForCreate.description &&
      dataForCreate.price > 0
    )
  }

  const createMenuFood = () => {
    if (!isFormValid()) {
      showNotification("Форма невалидна", "warning")
      return
    }

    setLoading(true)
    createByOwnerMenuItemRequest(restaurantId, dataForCreate)
      .then(() => {
        showNotification("Успешно создан", "success")
        navigate(
          `${removeWildcard(
            ROUTERS.RestaurantMenu.root.replace(":restaurantId", restaurantId)
          )}${ROUTERS.RestaurantMenu.myRestaurantMenu}`
        )
      })
      .catch((err) => showNotification(err.toString(), "error"))
      .finally(() => setLoading(false))
  }

  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="grid grid-cols-2 gap-[30px] max-lg:grid-cols-1">
        <FormInputTextWrapper
          label="Название меню:"
          placeholder="Чизбургер"
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
        label={"Тип меню:"}
        placeholder={"Фаст-фуд"}
        options={getMenuTypes()}
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
      <div className="grid grid-cols-2 gap-[20px]">
        <FormInputTextWrapper
          label={"Цена:"}
          placeholder={"1200 тенге"}
          type="number"
          onChange={(value) => {
            setDataForCreate((prevState) => ({
              ...prevState,
              price: value ? +value : 0,
            }))
          }}
        />
        <FormSelectWrapper
          label={"Доступность"}
          placeholder={"Доступен"}
          options={[
            { label: "Доступен", value: "Доступен" },
            { label: "Не доступен", value: "Не доступен" },
          ]}
          onChange={(value) => {
            setDataForCreate((prevState) => ({
              ...prevState,
              available: value,
            }))
          }}
          defaultValueIndex={0}
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
