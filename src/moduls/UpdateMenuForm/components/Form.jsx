import React from "react"
import InputFile from "../../../ui/Field/InputFile"
import InputText from "../../../ui/Field/InputText"
import Checkbox from "../../../ui/Field/Checkbox"
import Button from "../../../ui/Button/Button"

const Form = ({ data }) => {
  return (
    <form className="flex flex-col w-full px-[20px] py-[30px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="grid grid-cols-2 gap-[30px]">
        <div className="flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">
            Название меню:
          </h3>
          <InputText placeholder={"Чизбургер"} />
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">Фотографии:</h3>
          <InputFile placeholder={"Добавить фото"} />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-[15px] font-[600] left-[22.5px]">Фаст-фуд:</h3>
        <InputText placeholder={"Фаст-фуд"} />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[15px] font-[600] left-[22.5px]">Описание:</h3>
        <InputText placeholder={`Напишите краткое описание меню....`} />
      </div>
      <div className="grid grid-cols-2 gap-[20px]">
        <div className="flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">Цена:</h3>
          <InputText placeholder={`${data.price} тенге`} />
        </div>
        <div className="flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">Статус</h3>
          <InputText placeholder={data.status} />
        </div>
      </div>
      <Button text="Изменить" className={"mx-auto"} />
    </form>
  )
}

export default Form
