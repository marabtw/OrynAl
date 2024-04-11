import LoginInput from "./LoginInput"
import Button from "../../../ui/Button/Button"

const Register = ({ changeAuth }) => {
  return (
    <div className="md:px-[10px]">
      <h2 className="mb-[20px] text-center text-[50px] left-[75px] font-[700]">
        Регистрация
      </h2>
      <form className="w-full flex flex-col gap-[20px]">
        <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
          <LoginInput label="Имя" placeholder="Адильбек" required={true}/>
          <LoginInput label="Фамилия" placeholder="Абилов" />
        </div>
        <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
          <LoginInput label="Номер телефона" placeholder="+7 777 77 77" required={true}/>
          <LoginInput label="Почта" placeholder="adilbek.abilov@gmail.com" />
        </div>
        <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
          <LoginInput label="Пароль" placeholder="8+ символов" type="password" required={true}/>
          <LoginInput
            label="Повторите пароль"
            placeholder="*********"
            type="password"
						required={true}
          />
        </div>
        <Button type="submit" text="Зарегистрироваться" gradient={true} spacingClass={"mx-auto px-[80px] py-[20px]"} textStyles={"text-[20px] font-[700] leading-[30px]"}/>
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
