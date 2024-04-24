import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../../assets/images/logo.png"
import {
  ProfileMenuIcon,
  MenuIcon,
  OwnersIconForHeader,
  RestaurantsIconForHeader,
  ClientsIconForHeader,
} from "../../../ui/icons/icons"
import ProfileMenuDropdown from "./ProfileMenuDropdown"
import MobileMenuNavigation from "./MobileMenuNavigation"
import { ROUTERS } from "../../../app/router/Router.config"

const menu = [
  {
    label: "Рестораны",
    icon: <RestaurantsIconForHeader />,
    to: ROUTERS.Restaurants,
  },
  {
    label: "Владельцы",
    icon: <OwnersIconForHeader />,
    to: ROUTERS.Owners,
  },
  {
    label: "Клиенты",
    icon: <ClientsIconForHeader />,
    to: ROUTERS.Clients,
  },
]
const AdminHeader = ({ user }) => {
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
        <Link
          to={"/restaurants"}
          className="h-full max-md:absolute max-md:left-1/2 max-md:translate-x-[-50%] max-md:h-1/2"
        >
          <img
            src={Logo}
            alt="logo"
            className="bg-slate-500 h-full rounded-full cursor-pointer"
          />
        </Link>
        <Link to={ROUTERS.Restaurants} className="max-md:hidden">
          Рестораны
        </Link>
        <Link to={ROUTERS.Owners} className="max-md:hidden">
          Владельцы
        </Link>
        <Link to={ROUTERS.Clients} className="max-md:hidden">
          Клиенты
        </Link>
      </div>
      {user ? (
        <div
          className="relative flex items-center cursor-pointer"
          onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
        >
          <ProfileMenuIcon className="text-[30px]" />
          {isProfileMenuOpen && <ProfileMenuDropdown />}
        </div>
      ) : (
        <Link
          className="relative flex items-center cursor-pointer"
          to={ROUTERS.Login}
        >
          <ProfileMenuIcon className="text-[30px]" />
        </Link>
      )}
      {isMobileNavOpen && (
        <MobileMenuNavigation
          items={menu}
          closeMobileNav={() => setIsMobileNavOpen(false)}
        />
      )}
    </header>
  )
}

export default AdminHeader
