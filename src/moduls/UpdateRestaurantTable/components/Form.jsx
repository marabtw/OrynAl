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
          <h3 className="text-[15px] font-[600] left-[22.5px]">Название:</h3>
          <InputText placeholder={data.name} />
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">Фотографии:</h3>
          <InputFile placeholder={"Добавить фото"} />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-[15px] font-[600] left-[22.5px]">Тип столика:</h3>
        <InputText placeholder={data.type} />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[15px] font-[600] left-[22.5px]">Вместимость:</h3>
        <InputText placeholder={`${data.capacity} человек`} />
      </div>
			<Button text="Изменить" className={"mx-auto"}/>
    </form>
  )
}

export default Form
