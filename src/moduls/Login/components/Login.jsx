import LoginInput from "./LoginInput"
import Button from "../../../ui/Button/Button"

const Login = ({ changeAuth }) => {
  return (
    <div>
      <h2 className="mb-[20px] text-center text-[50px] left-[75px] font-[700]">
        Рады видеть вас снова!
      </h2>
      <form className="flex flex-col gap-[20px]">
        <LoginInput label="Ваш номер телефона" placeholder="+7 777 77 77" required={true}/>
        <div>
          <LoginInput label="Ваш  пароль" placeholder="*********" type="password" required={true} />
          <h4 className="float-right cursor-pointer">Забыли пароль?</h4>
        </div>
        <Button type="submit" text="Войти" gradient={true} spacingClass={"py-[20px]"} textStyles={"text-[20px] font-[700] leading-[30px]"}/>
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
