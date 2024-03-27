import React from "react"
import InputFile from "../../../ui/Field/InputFile"
import InputText from "../../../ui/Field/InputText"
import Checkbox from "../../../ui/Field/Checkbox"
import Button from "../../../ui/Button/Button"

const Form = () => {
  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[30px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="flex flex-col">
        <h3 className="text-[15px] font-[600] left-[22.5px]">Имя:</h3>
        <InputText placeholder={"Батырбек"} />
      </div>
      <div className="w-full flex flex-col">
        <h3 className="text-[15px] font-[600] left-[22.5px]">Почта:</h3>
        <InputText placeholder={"batyrbek@gmail.com"} />
      </div>
      <div className="w-full flex flex-col">
        <h3 className="text-[15px] font-[600] left-[22.5px]">Телефон номер:</h3>
        <InputText placeholder={"+7 778 891 32 09"} />
      </div>
      <div className="flex gap-[30px]">
        <div className="w-full flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">Пароль</h3>
          <InputText placeholder={"*********"} />
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">
            Повторите пароль
          </h3>
          <InputText placeholder={"*********"} />
        </div>
      </div>
      <Button text="Создать" className={"max-w-max mx-auto p-[30px]"}/>
    </form>
  )
}

export default Form
