import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { axios } from "@lib/axios"

import { ROUTERS } from "@router/Router.config"
import {
  getByAdminAllOwnersRequest,
  сreateByAdminRestaurantRequest,
  getAllServicesRequest,
  getTimes,
  getAllCities,
} from "../../api"

import { removeWildcard, isValidPhone } from "@helpers"
import { useLoading, useToast } from "@hooks"
import { isArraysEqualByIdWithSet } from "@utils"

import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "@components/FormComponents/FormInputFileWrapper"
import FormSelectWrapper from "@components/FormComponents/FormSelectWrapper"

import Button from "@ui/Button/Button"
import FormSelect from "@ui/Select/FormSelect"
import FormCheckbox from "@ui/Field/FormCheckbox"

const CreateRestaurantForm = () => {
  const navigate = useNavigate()
  const showNotification = useToast()
  const setLoading = useLoading()

  const [dataForCreate, setDataForCreate] = useState({
    name: "",
    address: "",
    description: "",
    city: "",
    ownerId: "",
    modeFrom: "",
    modeTo: "",
    phone: "",
    status: true,
    services: [],
  })
  const [owners, setOwners] = useState([])
  const [services, setServices] = useState([])

  const isFormValid = () => {
    return (
      dataForCreate.name &&
      dataForCreate.address &&
      dataForCreate.description &&
      dataForCreate.city &&
      dataForCreate.ownerId &&
      dataForCreate.modeFrom &&
      dataForCreate.modeTo &&
      isValidPhone(dataForCreate.phone)
    )
  }

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

  useEffect(() => {
    setLoading(true)
    let cancelTokenSource1 = axios.CancelToken.source()
    let cancelTokenSource2 = axios.CancelToken.source()

    getByAdminAllOwnersRequest({ cancelToken: cancelTokenSource1.token })
      .then(({ data }) => {
        if (data.items === 0) {
          if (owners && owners.length > 0) setOwners([])
        } else {
          const filteredItems = data.items?.map(({ id, name, surname }) => ({
            label: `${name} ${surname ? surname : ""}`,
            value: id,
          }))
          if (isArraysEqualByIdWithSet(owners, filteredItems)) return
          setOwners(filteredItems)
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          showNotification("Запрос был отменен", "warning")
        } else {
          showNotification(err, "error")
        }
      })
      .finally(() => {
        setLoading(false)
        cancelTokenSource1.cancel()
      })

    getAllServicesRequest({ cancelToken: cancelTokenSource2.token })
      .then(({ data }) => {
        if (data === 0) {
          if (services?.length > 0) setServices([])
        } else {
          const filteredItems = data
          if (isArraysEqualByIdWithSet(services, filteredItems)) return
          setServices(filteredItems)
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          showNotification("Запрос был отменен", "warning")
        } else {
          showNotification(err, "error")
        }
      })
      .finally(() => {
        setLoading(false)
        cancelTokenSource2.cancel()
      })

    return () => {
      cancelTokenSource1.cancel()
      cancelTokenSource2.cancel()
    }
  }, [])

  const createRestaurant = () => {
    if (!isFormValid()) {
      showNotification("Форма невалидна", "error")
      return
    }

    setLoading(true)
    сreateByAdminRestaurantRequest(dataForCreate)
      .then(() => {
        showNotification("Успешно создан", "success")
        navigate(
          `${removeWildcard(ROUTERS.Management.root)}${
            ROUTERS.Management.allRestaurants
          }`
        )
      })
      .catch((error) => showNotification(error.toString(), "error"))
      .finally(() => setLoading(false))
  }

  return (
    <div className="flex flex-col gap-[30px] w-full">
      <form
        className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] 
			max-md:gap-[15px] max-md:py-[20px] max-sm:px-[10px]"
      >
        <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1 max-md:gap-[15px]">
          <FormInputTextWrapper
            placeholder="Sandyq"
            label="Название:"
            onChange={(value) => {
              handleChange("name", value)
            }}
          />
          <FormInputFileWrapper
            placeholder="Добавить логотип"
            label="Логотип:"
          />
        </div>
        <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1 max-md:gap-[15px]">
          <FormInputTextWrapper
            placeholder="Абай, 101"
            label="Адрес"
            onChange={(value) => {
              handleChange("address", value)
            }}
          />
          <FormInputFileWrapper
            placeholder="Добавить фото"
            label="Фотографии:"
          />
        </div>
        <FormInputTextWrapper
          placeholder="Напишите краткое описание меню...."
          label="Описание"
          onChange={(value) => {
            handleChange("description", value)
          }}
        />
        <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1 max-md:gap-[15px]">
          <div className="flex flex-col gap-[15px] max-md:gap-y-[5px]">
            <h3 className="text-[15px] font-[600] max-md:text-[12px]">
              Режим работы ▼
            </h3>
            <div className="flex items-center gap-[10px]">
              <div className="w-1/2">
                <FormSelect
                  placeholder={"10:00"}
                  placeholderIcon={true}
                  options={getTimes()}
                  onChange={(value) => {
                    handleChange("modeFrom", value)
                  }}
                />
              </div>
              <p className="text-[#C6C6C6] text-[15px]">-</p>
              <div className="w-1/2">
                <FormSelect
                  placeholder={"22:00"}
                  placeholderIcon={true}
                  options={getTimes()}
                  onChange={(value) => {
                    handleChange("modeTo", value)
                  }}
                />
              </div>
            </div>
          </div>
          <FormSelectWrapper
            label={"Город"}
            placeholder={"Алматы"}
            options={getAllCities()}
            onChange={(value) => {
              handleChange("city", value)
            }}
          />
          <FormInputTextWrapper
            placeholder="+0 (000) 000 00 00"
            type={"tel"}
            label="Номер телефона:"
            onChange={(value) => {
              handleChange("phone", value)
            }}
          />
          <FormSelectWrapper
            label={"Владелец"}
            placeholder={"Иван Петров"}
            placeholderIcon={true}
            options={owners}
            onChange={(value) => {
              handleChange("ownerId", value)
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-[10px] max-md:grid-cols-1">
          {services?.map((service) => (
            <FormCheckbox
              key={service.id}
              service={service}
              onChange={(service) => {
                handleChange("services", service)
              }}
            />
          ))}
        </div>
      </form>
      <Button
        text="Создать"
        spacingClass={"mx-auto px-[200px] py-[20px]"}
        gradient={true}
        onClick={createRestaurant}
      />
    </div>
  )
}

export default CreateRestaurantForm
