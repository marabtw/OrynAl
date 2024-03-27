import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/images/logo.png"
import {
  TriangleDownIcon,
  SettingsIcon,
  ExitIcon,
} from "../../../ui/icons/icons"
import MiniProfile from "./MiniProfile"

const UserHeader = () => {
  const [active, setActive] = useState(false)
  const toogleMyAccount = () => {
    setActive(!active)
  }
  return (
    <header
      className={`relative w-full h-[120px] flex justify-between items-center px-[2%] z-[9999] bg-white rounded-bl-[50px] rounded-br-[50px] shadow-[0px_4px_10px_rgba(0,0,0,.25)]`}
    >
      <div className="h-[25%] flex gap-[36px] items-center">
        <Link to={"/"} className="h-full">
          <img
            src={Logo}
            alt="logo"
            className="bg-slate-500 h-full rounded-full cursor-pointer"
          />
        </Link>
        <h3>OrynAl - Сервис онлайн-заказов</h3>
      </div>
      <ul className="flex gap-[36px]">
        <li className="cursor-pointer">
          <Link to={"/order-history"}>Мои заказы</Link>
        </li>
        <li
          className="flex items-center text-[#4B85FB] relative cursor-pointer"
          onClick={() => toogleMyAccount()}
        >
          <span>Мой аккаунт</span>
          <TriangleDownIcon className="relative top-[50%] transform translate-y-[-60%]" />
          {active && <MiniProfile />}
        </li>
      </ul>
    </header>
  )
}

export default UserHeader
