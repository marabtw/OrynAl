import React from "react"
import Input from "./Input"
import Button from "../../../ui/Button/Button"

const Register = ({ changeAuth }) => {
  return (
    <div className="w-[60%]">
      <h2 className="mb-[20px] text-center text-[50px] left-[75px] font-[700]">
        Регистрация
      </h2>
      <form className="w-full flex flex-col gap-[20px]">
        <div className="grid grid-cols-2 gap-[20px]">
          <Input label="Имя" placeholder="Адильбек" />
          <Input label="Фамилия" placeholder="Абилов" />
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          <Input label="Номер телефона" placeholder="+7 777 77 77" />
          <Input label="Почта" placeholder="adilbek.abilov@gmail.com" />
        </div>
        <div className="grid grid-cols-2 gap-[20px]">
          <Input label="Пароль" placeholder="8+ символов" type="password" />
          <Input
            label="Повторите пароль"
            placeholder="*********"
            type="password"
          />
        </div>
        <Button text="Зарегистрироваться" gradient={true} className={"mx-auto px-[80px] py-[20px] text-[20px] font-[700] leading-[30px]"}/>
        <h3 className="text-center text-[20px] font-[700] text-[#989898]">
          Уже зарегистрированы?
          <span className="cursor-pointer text-[#447dfb] hover:underline" onClick={changeAuth}>
            Войдите
          </span>
        </h3>
      </form>
    </div>
  )
}

export default Register
