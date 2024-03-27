import React from "react"
import InputFile from "../../../ui/Field/InputFile"
import InputText from "../../../ui/Field/InputText"
import Checkbox from "../../../ui/Field/Checkbox"
import { dataServices } from "../../../data/myRestaurantData"

const Form = () => {
  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[30px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="grid grid-cols-2 gap-[30px]">
        <div className="flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">Название:</h3>
          <InputText placeholder={""} />
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">Логотип:</h3>
          <InputFile placeholder={"Добавить логотип"} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[30px]">
        <div className="flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">Адрес:</h3>
          <InputText placeholder={""} />
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">Фотографии:</h3>
          <InputFile placeholder={"Добавить фото"} />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-[15px] font-[600] left-[22.5px]">Описание:</h3>
        <InputText placeholder={"Напишите краткое описание меню...."} />
      </div>
      <div className="grid grid-cols-2 gap-[30px]">
        <div className="flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">
            Режим работы:
          </h3>
          <div className="flex items-center gap-[10px]">
            <InputText placeholder={"10:00"} />
            <p>-</p>
            <InputText placeholder={"22:00"} />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">Город:</h3>
          <InputText placeholder={""} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[10px]">
        {dataServices.map((service) => (
          <Checkbox data={service}/>
        ))}
      </div>
    </form>
  )
}

export default Form
