import React from "react"
import Input from "./Input"
import Button from "../../../ui/Button/Button"

const Login = ({ changeAuth }) => {
  return (
    <div>
      <h2 className="mb-[20px] text-center text-[50px] left-[75px] font-[700]">
        Рады видеть вас снова!
      </h2>
      <form className="flex flex-col gap-[20px]">
        <Input label="Ваш номер телефона" placeholder="+7 777 77 77" />
        <div>
          <Input label="Ваш  пароль" placeholder="*********" type="password" />
          <h4 className="float-right cursor-pointer">Забыли пароль?</h4>
        </div>
        <Button text="Войти" gradient={true} className={"py-[20px] text-[20px] font-[700] leading-[30px]"}/>
        <h3 className="text-center text-[20px] font-[700] text-[#989898]">
          Нет аккаунта?{" "}
          <span className="cursor-pointer text-[#447dfb] hover:underline" onClick={changeAuth}>
            Зарегистрируйтесь
          </span>
        </h3>
      </form>
    </div>
  )
}

export default Login
