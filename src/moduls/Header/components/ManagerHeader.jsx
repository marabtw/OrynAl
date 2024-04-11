import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/images/logo.png"
import {
  SearchIcon,
  MenuIcon,
  ProfileMenuIcon,
	RestaurantsIconForHeader,
	HistoryIconForHeader,
} from "../../../ui/icons/icons"
import ProfileMenuDropdown from "./ProfileMenuDropdown"
import MobileMenuNavigation from "./MobileMenuNavigation"

const menu = [
  {
    label: "Мои рестораны",
    icon: <RestaurantsIconForHeader />,
    to: "/my-restaurants",
  },
  {
    label: "История заказов",
    icon: <HistoryIconForHeader />,
    to: "/order-history",
  },
]

const ManagerHeader = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <header
      className={`relative w-full h-full flex justify-between items-center`}
    >
			<MenuIcon
        className="text-[20px] cursor-pointer md:hidden"
        onClick={() => setIsMobileNavOpen(true)}
      />
      <div className="h-[25%] flex gap-[36px] items-center">
        <Link to={"/my-restaurants"} className="h-full max-md:hidden">
          <img
            src={Logo}
            alt="logo"
            className="bg-slate-500 h-full rounded-full cursor-pointer"
          />
        </Link>
        <Link to={"/my-restaurants"} className="max-md:hidden">Мои рестораны</Link>
        <Link to={"/order-history"} className="max-md:hidden">История заказов</Link>
      </div>
      <div className="flex items-center gap-[50px]">
        <label
          htmlFor="search-header"
          className="relative min-w-[323px] min-h-[43px] max-md:absolute max-md:left-1/2 max-md:translate-x-[-50%] max-md:min-w-0 max-md:w-[70%]"
        >
          <SearchIcon className="absolute top-1/2 left-[20px] text-[14px] text-[#c4c4c4] translate-y-[-50%]" />
          <input
            type="text"
            name=""
            placeholder="Мой аккаунт"
            id="search-header"
            className="w-full h-full pl-[40px] px-[30px] py-[10px] border-2 border-[#c4c4c4] rounded-[50px] outline-none"
          />
        </label>
        <div
          className="relative flex items-center cursor-pointer"
          onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        >
          <ProfileMenuIcon className="text-[30px]" />
          {isProfileMenuOpen && <ProfileMenuDropdown />}
        </div>
      </div>
      {isMobileNavOpen && (
        <MobileMenuNavigation
          items={menu}
          closeMobileNav={() => setIsMobileNavOpen(false)}
        />
      )}
    </header>
  )
}

export default ManagerHeader
