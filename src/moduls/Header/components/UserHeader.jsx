import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/images/logo.png"
import {
  TriangleDownIcon,
  SettingsIcon,
  ExitIcon,
} from "../../../ui/icons/icons"
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
          {active && (
            <div
              className="absolute top-full right-0 translate-y-[10%] min-w-[223px] min-h-[153px] rounded-[10px] px-[5px] py-[20px]
     									bg-gradient-to-r from-[#62ADFC] to-[#4277FB] text-white text-[12px] font-[400] z-50"
            >
              <div className="px-[15px] flex flex-col mb-[10px]">
                <h2 className="font-[700] text-[22px] leading-[32px]">
                  Adilbek Abilov
                </h2>
                <p className="leading-[18px]">Adilbek.abilov@gmail.com</p>
              </div>
              <button className="flex gap-1 items-center h-[27px] w-full rounded-[5px] px-[10px] hover: font-[600] hover:bg-white hover:text-[#4379FB]">
                <SettingsIcon className="text-[15px]" />
                <Link to={"/my-profile"} className="">Настройки</Link>
              </button>
              <button className="flex gap-1 items-center h-[27px] w-full rounded-[5px] px-[10px] hover: font-[600] hover:bg-white hover:text-[#4379FB]">
                <ExitIcon className="text-[15px]" />
                <span>Выйти</span>
              </button>
            </div>
          )}
        </li>
      </ul>
    </header>
  )
}

export default UserHeader
