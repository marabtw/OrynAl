import { getAllCities, getAllServicesRequest, getTimes } from "../../../api"

import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "@components/FormComponents/FormInputFileWrapper"
import FormSelectWrapper from "@components/FormComponents/FormSelectWrapper"

import FormCheckbox from "@ui/Field/FormCheckbox"
import FormSelect from "@ui/Select/FormSelect"

const Form = ({ restaurantData, setDataForUpdate }) => {
  const checkService = (service) => {
    if (service === "Место, где можно поработать") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        can_work: !restaurantData.can_work,
      }))
    } else if (service === "Под ритмом диджея") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        rainy_rhythm: !restaurantData.rainy_rhythm,
      }))
    } else if (service === "Живая музыка") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        live_music: !restaurantData.live_music,
      }))
    } else if (service === "Бар, где пиво без границ") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        unlimited_beer: !restaurantData.unlimited_beer,
      }))
    } else if (service === "Банкетный зал") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        banquet_hall: !restaurantData.banquet_hall,
      }))
    } else if (service === "С детской игровой комнатой") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        kids_playroom: !restaurantData.kids_playroom,
      }))
    } else if (service === "Кальянная") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        hookah: !restaurantData.hookah,
      }))
    } else if (service === "Своя кондитерская") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        own_confectioner: !restaurantData.own_confectioner,
      }))
    }
  }

  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
        <FormInputTextWrapper
          placeholder="Sandyq"
          label="Название:"
          onChange={(value) => {
            setDataForUpdate((prevState) => ({
              ...prevState,
              name: value ? value : restaurantData.name,
            }))
          }}
        />
        <FormInputFileWrapper placeholder="Добавить логотип" label="Логотип:" />
      </div>
      <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
        <FormInputTextWrapper
          placeholder="Абай, 101"
          label="Адрес"
          onChange={(value) => {
            setDataForUpdate((prevState) => ({
              ...prevState,
              address: value ? value : restaurantData.address,
            }))
          }}
        />
        <FormInputFileWrapper placeholder="Добавить фото" label="Фотографии:" />
      </div>
      <FormInputTextWrapper
        placeholder="Напишите краткое описание меню...."
        label="Описание"
        onChange={(value) => {
          setDataForUpdate((prevState) => ({
            ...prevState,
            description: value ? value : restaurantData.description,
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
                options={getTimes()}
                onChange={(value) => {
                  setDataForUpdate((prevState) => ({
                    ...prevState,
                    modeFrom: value ? value : restaurantData.modeFrom,
                  }))
                }}
              />
            </div>
            <p className="text-[#C6C6C6] text-[15px]">-</p>
            <div className="w-1/2">
              <FormSelect
                placeholder={"22:00"}
                options={getTimes()}
                onChange={(value) => {
                  setDataForUpdate((prevState) => ({
                    ...prevState,
                    modeTo: value ? value : restaurantData.modeTo,
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
          onChange={(value) => {
            setDataForUpdate((prevState) => ({
              ...prevState,
              city: value ? value : restaurantData.city,
            }))
          }}
        />
      </div>
      <FormSelectWrapper
        label={"Статус русторана"}
        options={[
          { label: "Активный", value: true },
          { label: "Не активный", value: false },
        ]}
        onChange={(value) => {
          setDataForUpdate((prevState) => ({
            ...prevState,
            status: value ? value : restaurantData.status,
          }))
        }}
        defaultValueIndex={restaurantData.status ? 0 : 1}
      />
      <div className="grid grid-cols-2 gap-[10px] max-md:grid-cols-1">
        {getAllServicesRequest().map((service) => (
          <FormCheckbox
            keyFor={service.id}
            label={service.name}
            initialChecked={false}
            onChange={() => checkService(service.name)}
          />
        ))}
      </div>
    </form>
  )
}
export default Form
