import { useState } from "react"
import { Link } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import logo from "../../assets/images/logo.png"
import LoginPageLogo from "../../assets/svg/LoginPageLogo.svg"
import artRed from "../../assets/svg/LoginPageArtRed.svg"
import artLightBlue from "../../assets/svg/LoginPageArtLightBlue.svg"
import artBlue from "../../assets/svg/LoginPageArtBlue.svg"
import { role } from "../../data/mainData"

const LoginRegister = () => {
  const [auth, setAuth] = useState("login")

  const checkRole = () => {
    switch (role) {
			case "user":
				return "/"
			case "company":
				return "/my-restaurants"
			case "admin":
				return "/restaurants"
      default:
        return "/"
    }
  }

  return (
    <div className="flex w-[100vw] h-[100vh]">
      <div className="relative flex justify-center h-full max-w-[646px] bg-[#447bfb] z-50">
        <Link
          to={checkRole()}
          className="flex flex-col items-center h-max text-center mt-[20%] mx-[15%] text-white"
        >
          <img src={logo} alt="" className="w-1/2" />
          <h2 className="text-[50px] leading-[75px] font-[700]">OrynAl</h2>
          <p className="text-[20px] leading-[30px] font-[30px]">
            Платформа для онлайн-заказа и бронирования столиков в ресторанaх
          </p>
        </Link>
        <img
          src={LoginPageLogo}
          className="absolute bottom-0 left-1/2 translate-x-[-50%]"
        />
      </div>
      <div className="relative flex justify-center items-center w-full">
        <img src={artRed} alt="" className="absolute right-0 top-0" />
        <img
          src={artLightBlue}
          alt=""
          className="absolute bottom-0 left-0 translate-x-[-60%]"
        />
        <img src={artBlue} alt="" className="absolute bottom-0 right-0" />
        {auth === "login" ? (
          <Login changeAuth={() => setAuth("register")} />
        ) : (
          <Register changeAuth={() => setAuth("login")} />
        )}
      </div>
    </div>
  )
}

export default LoginRegister
