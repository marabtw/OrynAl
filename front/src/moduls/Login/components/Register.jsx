import { useState, useContext, useMemo } from "react"
import { AuthContext } from "../../../app/Context/AuthContext"
import { signup, signin } from "../api/loginRequests"
import LoginInput from "./LoginInput"
import Button from "../../../ui/Button/Button"
import { isValidEmail } from "../../../app/helpers/helpers"
import Cookies from "js-cookie"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import { ROUTERS } from "../../../app/router/Router.config"

const Register = ({ changeAuth }) => {
  const navigate = useNavigate()
  const { setUser } = useContext(AuthContext)
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")

  const isFormValid = useMemo(() => {
    return (
      isValidEmail(email) &&
      name &&
      phone &&
      password &&
      password === rePassword
    )
  })

  const handleSignup = async (e) => {
    e.preventDefault()
    if (isFormValid) {
      try {
        const status = (await signup(name, surname, email, phone, password))
          .status
        if (status === 201) {
          const data = (await signin(email, password)).data.data
          Cookies.set("accessToken", data.access_token, {
            SameSite: "None",
            Secure: true,
          })
          Cookies.set("refreshToken", data.refresh_token, {
            SameSite: "None",
            Secure: true,
          })
          const decodedUser = jwtDecode(data.access_token)
          setUser(decodedUser)
          const role = decodedUser.role
          if (role === "admin") {
            navigate(ROUTERS.Restaurants)
          } else if (role === "owner") {
            navigate(ROUTERS.MyRestaurants)
          } else {
            navigate(ROUTERS.Home)
          }
        }
      } catch (error) {
        console.error("error: " + error.message)
      }
    } else {
      console.log("valid error")
    }
  }

  return (
    <div className="md:px-[10px]">
      <h2 className="mb-[20px] text-center text-[50px] left-[75px] font-[700]">
        Регистрация
      </h2>
      <form className="w-full flex flex-col gap-[20px]">
        <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
          <LoginInput
            label="Имя"
            placeholder="Адильбек"
            required={true}
            onChange={(value) => setName(value)}
          />
          <LoginInput
            label="Фамилия"
            placeholder="Абилов"
            onChange={(value) => setSurname(value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
          <LoginInput
            label="Номер телефона"
            placeholder="+7 777 77 77"
            required={true}
            onChange={(value) => setPhone(value)}
          />
          <LoginInput
            label="Почта"
            placeholder="adilbek.abilov@gmail.com"
            onChange={(value) => setEmail(value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
          <LoginInput
            label="Пароль"
            placeholder="8+ символов"
            type="password"
            required={true}
            onChange={(value) => setPassword(value)}
          />
          <LoginInput
            label="Повторите пароль"
            placeholder="*********"
            type="password"
            required={true}
            onChange={(value) => setRePassword(value)}
          />
        </div>
        <Button
          type="submit"
          text="Зарегистрироваться"
          gradient={true}
          spacingClass={"mx-auto px-[80px] py-[20px]"}
          textStyles={"text-[20px] font-[700] leading-[30px]"}
          onClick={(e) => handleSignup(e)}
        />
        <h3 className="text-center text-[20px] font-[700] text-[#989898]">
          Уже зарегистрированы?
          <span
            className="cursor-pointer text-[#447dfb] hover:underline"
            onClick={changeAuth}
          >
            Войдите
          </span>
        </h3>
      </form>
    </div>
  )
}

export default Register
