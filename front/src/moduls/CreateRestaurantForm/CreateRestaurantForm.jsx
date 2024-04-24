import FormInputTextWrapper from "../../components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "../../components/FormComponents/FormInputFileWrapper/FormInputFileWrapper"
import FormSelectWrapper from "../../components/FormComponents/FormSelectWrapper/FormSelectWrapper"
import Button from "../../ui/Button/Button"
import FormSelect from "../../ui/Select/FormSelect"
import FormCheckbox from "../../ui/Field/FormCheckbox"
import { dataServices } from "../../data/myRestaurantData"
import { postRestaurant } from "./api/api"
import { useState } from "react"

const CreateRestaurantForm = () => {
  const [dataForUpdate, setDataForUpdate] = useState({
		name: "",
		address: "",
		description: "",
		city: "",
		ownerId: "",
		modeFrom: "",
		modeTo: "",
	})

  const createRestaurant = () => {
    postRestaurant(dataForUpdate)
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }

  return (
    <div className="flex flex-col gap-[30px] w-full">
      <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
        <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
          <FormInputTextWrapper placeholder="Sandyq" label="Название:" onChange={(e) => {
              setDataForUpdate((prevState) => ({
                ...prevState,
                phone: e.target.value,
              }))
            }}/>
          <FormInputFileWrapper
            placeholder="Добавить логотип"
            label="Логотип:"
						
          />
        </div>
        <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
          <FormInputTextWrapper placeholder="Абай, 101" label="Адрес" />
          <FormInputFileWrapper
            placeholder="Добавить фото"
            label="Фотографии:"
          />
        </div>
        <FormInputTextWrapper
          placeholder="Напишите краткое описание меню...."
          label="Описание"
        />
        <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
          <div className="flex flex-col gap-[15px]">
            <h3 className="text-[15px] font-[600] left-[22.5px]">
              Режим работы ▼
            </h3>
            <div className="flex items-center gap-[10px]">
              <div className="w-1/2">
                <FormSelect placeholder={"10:00"} placeholderIcon={true} />
              </div>
              <p className="text-[#C6C6C6] text-[15px]">-</p>
              <div className="w-1/2">
                <FormSelect placeholder={"22:00"} placeholderIcon={true} />
              </div>
            </div>
          </div>
          <FormSelectWrapper label={"Город"} placeholder={"Алматы"} />
          <FormSelectWrapper
            label={"Владелец"}
            placeholder={"Иван Петров"}
            placeholderIcon={true}
          />
        </div>
        <div className="grid grid-cols-2 gap-[10px] max-md:grid-cols-1">
          {dataServices.map((service) => (
            <FormCheckbox data={service} />
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
