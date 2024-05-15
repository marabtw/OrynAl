import { useState } from "react"
import { Link } from "react-router-dom"
import { ROUTERS } from "@router/Router.config"
import { removeWildcard } from "@helpers"

import {
  MenuIcon,
  ProfileMenuIcon,
  RestaurantsIconForHeader,
  HistoryIconForHeader,
} from "@ui/icons/icons"
import Logo from "@assets/images/logo.png"

import ProfileMenuDropdown from "../components/ProfileMenuDropdown"
import MobileMenuNavigation from "../components/MobileMenuNavigation"
import SearchRestaurant from "./components/SearchRestaurant"

const mobileMenuItems = [
  {
    label: "Мои рестораны",
    icon: <RestaurantsIconForHeader />,
    to: `${removeWildcard(ROUTERS.Restaurant.root)}${
      ROUTERS.Restaurant.myRestaurants
    }`,
  },
  // {
  //   label: "История заказов",
  //   icon: <HistoryIconForHeader />,
  //   to: `${removeWildcard(ROUTERS.Orders.root)}${
  //     ROUTERS.Orders.restaurantOrdersHistory
  //   }`,
  // },
]

const OwnerHeader = ({ user }) => {
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
          to={`${removeWildcard(ROUTERS.Restaurant.root)}${
            ROUTERS.Restaurant.myRestaurants
          }`}
          className="h-full max-md:hidden"
        >
          <img
            src={Logo}
            alt="logo"
            className="bg-slate-500 h-full rounded-full cursor-pointer"
          />
        </Link>
        <Link
          to={`${removeWildcard(ROUTERS.Restaurant.root)}${
            ROUTERS.Restaurant.myRestaurants
          }`}
          className="max-md:hidden"
        >
          Мои рестораны
        </Link>
        {/* <Link
          to={`${removeWildcard(ROUTERS.Orders.root)}${
            ROUTERS.Orders.restaurantOrdersHistory
          }`}
          className="max-md:hidden"
        >
          История заказов
        </Link> */}
      </div>
      <div className="flex items-center gap-[50px]">
        <SearchRestaurant />
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
      </div>
      {isMobileNavOpen && (
        <MobileMenuNavigation
          items={mobileMenuItems}
          closeMobileNav={() => setIsMobileNavOpen(false)}
        />
      )}
    </header>
  )
}

export default OwnerHeader
