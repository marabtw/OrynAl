import { Link } from "react-router-dom"
import Logo from "../../../assets/images/logo.png"
import { SearchIcon,SettingsIcon, ExitIcon, TriangleDownIcon } from "../../../ui/icons/icons"
import { useState } from "react"

const EmployeeHeader = () => {
	const [active,setActive] = useState(false)
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
        <Link to={"/my-restaurants"}>Мои рестораны</Link>
        <Link to={"/order-history"}>История заказов</Link>
      </div>
      <div className="flex items-center gap-[50px]">
        <label htmlFor="search-header" className="relative min-w-[323px] min-h-[43px]">
          <SearchIcon className="absolute top-1/2 left-[20px] text-[14px] text-[#c4c4c4] translate-y-[-50%]"/>
          <input type="text" name="" placeholder="Мой аккаунт" id="search-header" className="min-w-[323px] h-full pl-[40px] px-[30px] py-[10px] border-2 border-[#c4c4c4] rounded-[50px] outline-none"/>
        </label>
				<div className="relative flex items-center cursor-pointer" onClick={() => setActive(!active)}>
					<h3 >Мой аккаунт</h3>
					<TriangleDownIcon className="" />
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
                <SettingsIcon className="text-[15px]" />
                <Link to={"/login"} className="">registerPage</Link>
              </button>
              <button className="flex gap-1 items-center h-[27px] w-full rounded-[5px] px-[10px] hover: font-[600] hover:bg-white hover:text-[#4379FB]">
                <ExitIcon className="text-[15px]" />
                <span>Выйти</span>
              </button>
            </div>
          )}
				</div>
      </div>
    </header>
  )
}

export default EmployeeHeader
