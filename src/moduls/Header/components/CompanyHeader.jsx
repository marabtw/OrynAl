import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/images/logo.png"
import { SearchIcon, TriangleDownIcon } from "../../../ui/icons/icons"
import MiniProfileMenu from "./MiniProfileMenu"

const CompanyHeader = () => {
  const [active, setActive] = useState(false)

  return (
    <header
      className={`relative w-full h-[120px] flex justify-between items-center px-[2%] z-[9999] bg-white rounded-bl-[50px] rounded-br-[50px] shadow-[0px_4px_10px_rgba(0,0,0,.25)]`}
    >
      <div className="h-[25%] flex gap-[36px] items-center">
        <Link to={"/my-restaurants"} className="h-full">
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
        <label
          htmlFor="search-header"
          className="relative min-w-[323px] min-h-[43px]"
        >
          <SearchIcon className="absolute top-1/2 left-[20px] text-[14px] text-[#c4c4c4] translate-y-[-50%]" />
          <input
            type="text"
            name=""
            placeholder="Мой аккаунт"
            id="search-header"
            className="min-w-[323px] h-full pl-[40px] px-[30px] py-[10px] border-2 border-[#c4c4c4] rounded-[50px] outline-none"
          />
        </label>
        <div
          className="relative flex items-center cursor-pointer"
          onClick={() => setActive(!active)}
        >
          <h3>Мой аккаунт</h3>
          <TriangleDownIcon className="" />
          {active && <MiniProfileMenu />}
        </div>
      </div>
    </header>
  )
}

export default CompanyHeader
