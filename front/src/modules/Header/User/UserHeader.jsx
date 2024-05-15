import { useState } from "react"
import { Link } from "react-router-dom"
import { ROUTERS } from "@router/Router.config"
import { removeWildcard } from "@helpers"

import ProfileMenuDropdown from "../components/ProfileMenuDropdown"
import MobileMenuNavigation from "../components/MobileMenuNavigation"
import Logo from "@assets/images/logo.png"
import {
  MenuIcon,
  ProfileMenuIcon,
  HistoryIconForHeader,
  HomeIcon,
} from "@ui/icons/icons"

const mobileMenuItems = [
  {
    label: "Home",
    icon: <HomeIcon />,
    to: ROUTERS.Home,
  },
  {
    label: "История заказов",
    icon: <HistoryIconForHeader />,
    to: `${ROUTERS.Orders.root.replace("/*", "")}${
      ROUTERS.Orders.ordersHistory
    }`,
  },
]

const UserHeader = ({ user }) => {
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
        <Link to={ROUTERS.Home} className="h-full max-md:hidden">
          <img
            src={Logo}
            alt="logo"
            className="bg-slate-500 h-full rounded-full cursor-pointer"
          />
        </Link>
        <h2 className="max-md:hidden">OrynAl - Сервис онлайн-заказов</h2>
      </div>
      <ul className="flex gap-[36px]">
        <li className="cursor-pointer max-md:hidden">
          <Link
            to={`${removeWildcard(ROUTERS.Orders.root)}${
              ROUTERS.Orders.ordersHistory
            }`}
          >
            Мои заказы
          </Link>
        </li>
        {user ? (
          <div
            className="relative flex items-center cursor-pointer"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          >
            <ProfileMenuIcon className="text-[30px]" />
            {isProfileMenuOpen && (
              <ProfileMenuDropdown close={() => setIsProfileMenuOpen(false)} />
            )}
          </div>
        ) : (
          <Link
            className="relative flex items-center cursor-pointer"
            to={`${removeWildcard(ROUTERS.Authorization.root)}${
              ROUTERS.Authorization.login
            }`}
          >
            Войти
          </Link>
        )}
      </ul>
      {isMobileNavOpen && (
        <MobileMenuNavigation
          items={mobileMenuItems}
          closeMobileNav={() => setIsMobileNavOpen(false)}
        />
      )}
    </header>
  )
}

export default UserHeader
