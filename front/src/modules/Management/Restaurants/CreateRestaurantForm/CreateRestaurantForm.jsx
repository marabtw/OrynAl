import { useEffect, useState, useMemo } from "react"
import {
  getByAdminAllOwnersRequest,
  сreateByAdminRestaurantRequest,
  getAllServices,
  getAllCities,
} from "../../api/api"

import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "@components/FormComponents/FormInputFileWrapper/FormInputFileWrapper"
import FormSelectWrapper from "@components/FormComponents/FormSelectWrapper/FormSelectWrapper"

import Button from "@ui/Button/Button"
import FormSelect from "@ui/Select/FormSelect"
import FormCheckbox from "@ui/Field/FormCheckbox"
import { useNavigate } from "react-router-dom"
import { removeWildcard } from "@helpers/helpers"
import { ROUTERS } from "@router/Router.config"

const CreateRestaurantForm = () => {
  const navigate = useNavigate()
  const [dataForCreate, setDataForCreate] = useState({
    name: "",
    address: "",
    description: "",
    city: "",
    ownerId: "",
    modeFrom: "",
    modeTo: "",
    can_work: false,
    live_music: false,
    banquet_hall: false,
    hookah: false,
    unlimited_beer: false,
    rainy_rhythm: false,
    kids_playroom: false,
    own_confectioner: false,
    status: true,
  })
  const [owners, setOwners] = useState([])

	// useEffect(() => {console.log(dataForCreate)},[dataForCreate])

  const checkService = (name) => {
    if (name === "Место, где можно поработать") {
      setDataForCreate((prevState) => ({
        ...prevState,
        can_work: !dataForCreate.can_work,
      }))
    } else if (name === "Под ритмом диджея") {
      setDataForCreate((prevState) => ({
        ...prevState,
        rainy_rhythm: !dataForCreate.rainy_rhythm,
      }))
    } else if (name === "Живая музыка") {
      setDataForCreate((prevState) => ({
        ...prevState,
        live_music: !dataForCreate.live_music,
      }))
    } else if (name === "Бар, где пиво без границ") {
      setDataForCreate((prevState) => ({
        ...prevState,
        unlimited_beer: !dataForCreate.unlimited_beer,
      }))
    } else if (name === "Банкетный зал") {
      setDataForCreate((prevState) => ({
        ...prevState,
        banquet_hall: !dataForCreate.banquet_hall,
      }))
    } else if (name === "С детской игровой комнатой") {
      setDataForCreate((prevState) => ({
        ...prevState,
        kids_playroom: !dataForCreate.kids_playroom,
      }))
    } else if (name === "Кальянная") {
      setDataForCreate((prevState) => ({
        ...prevState,
        hookah: !dataForCreate.hookah,
      }))
    } else if (name === "Своя кондитерская") {
      setDataForCreate((prevState) => ({
        ...prevState,
        own_confectioner: !dataForCreate.own_confectioner,
      }))
    }
  }

  const getTimes = () => {
    const currentDate = new Date()

    // Устанавливаем минуты на 0, чтобы начать с часа
    currentDate.setMinutes(0)

    // Создаем список часов с интервалом в 30 минут
    const options = []
    for (let hour = 0; hour < 24; hour++) {
      for (let minute of [0, 30]) {
        const dateCopy = new Date(currentDate.getTime())
        dateCopy.setHours(hour)
        dateCopy.setMinutes(minute)
        const isoString = dateCopy.toISOString()
        options.push({
          value: isoString,
          label: `${String(hour).padStart(2, "0")}:${String(minute).padStart(
            2,
            "0"
          )}`,
        })
      }
    }
    return options
  }

  const isFormValid = () => {
    return (
      dataForCreate.name &&
      dataForCreate.address &&
      dataForCreate.description &&
      dataForCreate.city &&
      dataForCreate.ownerId &&
      dataForCreate.modeFrom &&
      dataForCreate.modeTo
    )
  }

  useEffect(() => {
    getByAdminAllOwnersRequest()
      .then((res) => {
        if (!res.data) {
          setOwners([])
        } else {
          setOwners(
            res.data?.items.map((owner) => {
              const id = owner.id
              const name = owner.name
              const surname = owner.surname
              return {
                label: `${name} ${surname ? surname : ""}`,
                value: id,
              }
            })
          )
        }
      })
      .catch((error) => {
        console.log("error: ", error)
      })
  }, [])

  const createRestaurant = () => {
    if (isFormValid) {
      сreateByAdminRestaurantRequest(dataForCreate)
        .then((res) => {
          navigate(
            `${removeWildcard(ROUTERS.Management.root)}${
              ROUTERS.Management.allRestaurants
            }`
          )
        })
        .catch((error) => console.log("error: ", error))
    } else {
      alert("no data")
    }
  }

  return (
    <div className="flex flex-col gap-[30px] w-full">
      <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
        <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
          <FormInputTextWrapper
            placeholder="Sandyq"
            label="Название:"
            onChange={(e) => {
              setDataForCreate((prevState) => ({
                ...prevState,
                name: e.target.value.trim(),
              }))
            }}
          />
          <FormInputFileWrapper
            placeholder="Добавить логотип"
            label="Логотип:"
          />
        </div>
        <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
          <FormInputTextWrapper
            placeholder="Абай, 101"
            label="Адрес"
            onChange={(e) => {
              setDataForCreate((prevState) => ({
                ...prevState,
                address: e.target.value.trim(),
              }))
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
          onChange={(e) => {
            setDataForCreate((prevState) => ({
              ...prevState,
              description: e.target.value.trim(),
            }))
          }}
        />
        <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[15px] font-[600] left-[22.5px]">
              Режим работы ▼
            </h3>
            <div className="flex items-center gap-[10px]">
              <div className="w-1/2">
                <FormSelect
                  placeholder={"10:00"}
                  placeholderIcon={true}
                  options={getTimes()}
                  onChange={(e) => {
                    setDataForCreate((prevState) => ({
                      ...prevState,
                      modeFrom: e.value,
                    }))
                  }}
                />
              </div>
              <p className="text-[#C6C6C6] text-[15px]">-</p>
              <div className="w-1/2">
                <FormSelect
                  placeholder={"22:00"}
                  placeholderIcon={true}
                  options={getTimes()}
                  onChange={(e) => {
                    setDataForCreate((prevState) => ({
                      ...prevState,
                      modeTo: e.value,
                    }))
                  }}
                />
              </div>
            </div>
          </div>
          <FormSelectWrapper
            label={"Город"}
            placeholder={"Алматы"}
            options={getAllCities()}
            onChange={(e) => {
              setDataForCreate((prevState) => ({
                ...prevState,
                city: e.value,
              }))
            }}
          />
          <FormSelectWrapper
            label={"Владелец"}
            placeholder={"Иван Петров"}
            placeholderIcon={true}
            options={owners}
            onChange={(e) => {
              setDataForCreate((prevState) => ({
                ...prevState,
                ownerId: e.value,
              }))
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-[10px] max-md:grid-cols-1">
          {getAllServices()?.map((service) => (
            <FormCheckbox
              label={service.name}
              forKey={service.id}
              onChange={() => checkService(service.name)}
            />
          ))}
        </div>
      </form>
      <Button
        text="Создать"
        spacingClass={"mx-auto px-[200px] py-[20px]"}
        gradient={true}
        onClick={() => {
          createRestaurant()
        }}
      />
    </div>
  )
}

export default CreateRestaurantForm
