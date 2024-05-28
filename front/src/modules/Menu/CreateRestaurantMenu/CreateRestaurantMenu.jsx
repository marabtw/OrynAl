import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { ROUTERS } from "@router/Router.config"
import { createByOwnerMenuItemRequest, getMenuTypes } from "../api"

import { useCloudinary, useLoading, useToast } from "@hooks"
import { removeWildcard } from "@helpers"

import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "@components/FormComponents/FormInputFileWrapper/FormInputFileWrapper"
import FormSelectWrapper from "@components/FormComponents/FormSelectWrapper"
import Button from "@ui/Button/Button"
import { isObjectEmpty } from "@utils/index"

const CreateRestaurantMenu = ({ restaurantId }) => {
  const { upload } = useCloudinary()
  const navigate = useNavigate()
  const setLoading = useLoading()
  const showNotification = useToast()

  const [dataForCreate, setDataForCreate] = useState({
    name: "",
    type: "",
    description: "",
    price: 0,
    available: true,
    photo: {},
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
      } else if (key === "photo") {
        return {
          ...prevState,
          [key]: value[0] || {},
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
      isObjectEmpty(dataForCreate.photo) &&
      dataForCreate.name &&
      dataForCreate.type &&
      dataForCreate.description &&
      dataForCreate.price > 0
    )
  }

  const uploadImages = async () => {
    if (!isFormValid()) {
      showNotification("Форма невалидна", "warning")
      return
    }

    setLoading(true)

    const transformationSettings = {
      width: 100,
      height: 100,
      crop: "fill",
      gravity: "center",
    }

    try {
      const uploadedIcon = await upload(
        [dataForCreate.photo]
        // transformationSettings
      )
      const photo = {
        // publicId: uploadedIcon[0].public_id,
        route: uploadedIcon[0].secure_url,
      }

      const updatedDataForCreate = {
        ...dataForCreate,
        photo,
      }

      await createMenuFood(updatedDataForCreate)
    } catch (error) {
      showNotification("Ошибка при создании ресторана", "error")
      console.error("Error creating restaurant:", error)
    } finally {
      setLoading(false)
    }
  }

  const createMenuFood = async (data) => {
    createByOwnerMenuItemRequest(restaurantId, data)
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
            handleChange("name", value)
          }}
        />
        <FormInputFileWrapper
          label="Фотографии:"
          placeholder="Добавить фото"
          getFiles={(files) => {
            handleChange("photo", files)
          }}
        />
      </div>
      <FormSelectWrapper
        label={"Тип меню:"}
        placeholder={"Фаст-фуд"}
        options={getMenuTypes()}
        onChange={(value) => {
          handleChange("type", value)
        }}
      />
      <FormInputTextWrapper
        label="Описание:"
        placeholder="Напишите краткое описание меню...."
        onChange={(value) => {
          handleChange("description", value)
        }}
      />
      <div className="grid grid-cols-2 gap-[20px]">
        <FormInputTextWrapper
          label={"Цена:"}
          placeholder={"1200 тенге"}
          type="number"
          onChange={(value) => {
            handleChange("price", +value)
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
            handleChange("available", value)
          }}
          defaultValueIndex={0}
        />
      </div>
      <Button
        text="Создать"
        gradient={true}
        spacingClass={"mx-auto px-[120px] py-[20px]"}
        onClick={uploadImages}
      />
    </form>
  )
}

export default CreateRestaurantMenu
