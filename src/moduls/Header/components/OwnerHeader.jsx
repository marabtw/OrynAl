import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/images/logo.png"
import {
  SettingsIcon,
  ExitIcon,
  TriangleDownIcon,
} from "../../../ui/icons/icons"
import MiniProfile from "./MiniProfile"

const OwnerHeader = () => {
  const [active, setActive] = useState(false)
  return (
    <header
      className={`relative w-full h-[120px] flex justify-between items-center px-[2%] z-[9999] bg-white rounded-bl-[50px] rounded-br-[50px] shadow-[0px_4px_10px_rgba(0,0,0,.25)]`}
    >
      <div className="h-[25%] flex gap-[36px] items-center">
        <Link to={"/owner-restaurants"} className="h-full">
          <img
            src={Logo}
            alt="logo"
            className="bg-slate-500 h-full rounded-full cursor-pointer"
          />
        </Link>
        <Link to={"/owner-restaurants"}>Рестораны</Link>
        <Link to={"/owners"}>Владельцы</Link>
        <Link to={"/clients"}>Клиенты</Link>
      </div>
      <div
        className="relative flex items-center cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <h3>Мой аккаунт</h3>
        <TriangleDownIcon className="" />
        {active && <MiniProfile />}
      </div>
    </header>
  )
}

export default OwnerHeader
