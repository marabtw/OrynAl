import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/images/logo.png"
import {
  MenuIcon,
  ProfileMenuIcon,
  HistoryIconForHeader,
  HomeIcon,
} from "../../../ui/icons/icons"
import ProfileMenuDropdown from "./ProfileMenuDropdown"
import MobileMenuNavigation from "./MobileMenuNavigation"

const menu = [
  {
    label: "Home",
    icon: <HomeIcon />,
    to: "/",
  },
  {
    label: "История заказов",
    icon: <HistoryIconForHeader />,
    to: "/order-history",
  },
]

const UserHeader = () => {
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
        <Link to={"/"} className="h-full max-md:hidden">
          <img
            src={Logo}
            alt="logo"
            className="bg-slate-500 h-full rounded-full cursor-pointer"
          />
        </Link>
        <h className="max-md:hidden">OrynAl - Сервис онлайн-заказов</h>
      </div>
      <ul className="flex gap-[36px]">
        <li className="cursor-pointer max-md:hidden">
          <Link to={"/order-history"}>Мои заказы</Link>
        </li>
        <li
          className="flex items-center relative cursor-pointer"
          onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        >
          <ProfileMenuIcon className="text-[30px]" />
          {isProfileMenuOpen && <ProfileMenuDropdown />}
        </li>
      </ul>
      {isMobileNavOpen && (
        <MobileMenuNavigation
          items={menu}
          closeMobileNav={() => setIsMobileNavOpen(false)}
        />
      )}
    </header>
  )
}

export default UserHeader
