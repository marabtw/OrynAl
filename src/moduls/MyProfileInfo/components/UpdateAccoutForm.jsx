import React from "react"
import InputText from "../../../ui/Field/InputText"
import Button from "../../../ui/Button/Button"
const UpdateAccoutForm = () => {
  return (
    <div className="min-w-[40%]">
      <h3 className="mb-[40px] font-[600] text-[20px] leading-[30px]">Изменить аккаунт</h3>
      <form className="flex flex-col gap-[40px] p-[20px] border-[3px] border-[#ebebeb] rounded-[10px]">
        <div className="grid grid-cols-2 gap-[20px]">
          <div>
            <h3>Имя</h3>
            <InputText placeholder={"Батырбек"} />
          </div>
          <div>
            <h3>Фамилия:</h3>
            <InputText placeholder={"Кайыпбай"} />
          </div>
          <div>
            <h3>Почта:</h3>
            <InputText placeholder={"batyrbek@gmail.com"} />
          </div>
          <div>
            <h3>Телефон номер:</h3>
            <InputText placeholder={"+7 778 891 32 09"} />
          </div>
        </div>
        <Button text="Изменить" className={"mx-auto"}/>
      </form>
    </div>
  )
}

export default UpdateAccoutForm
