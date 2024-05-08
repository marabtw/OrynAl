import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ROUTERS } from "@router/Router.config"
import { removeWildcard } from "@helpers/helpers"

import {
  SearchIcon,
  MenuIcon,
  ProfileMenuIcon,
  RestaurantsIconForHeader,
  HistoryIconForHeader,
} from "@ui/icons/icons"
import Logo from "@assets/images/logo.png"

import { searchByOwnerRestaurants } from "../api/api"

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
  {
    label: "История заказов",
    icon: <HistoryIconForHeader />,
    to: `${removeWildcard(ROUTERS.Orders.root)}${
      ROUTERS.Orders.myOrdersHistory
    }`,
  },
]

const OwnerHeader = ({ user }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    if (searchQuery.length >= 2) {
      searchByOwnerRestaurants(searchQuery)
        .then((res) => setSearchResult(res.data.items))
        .catch((error) => {
          setSearchResult([{ name: "No Result" }])
        })
    } else {
      setSearchResult([{ name: "No Result" }])
    }
  }, [searchQuery])

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
        <Link
          to={`${removeWildcard(ROUTERS.Orders.root)}${
            ROUTERS.Orders.myOrdersHistory
          }`}
          className="max-md:hidden"
        >
          История заказов
        </Link>
      </div>
      <div className="flex items-center gap-[50px]">
        <SearchRestaurant
          onChange={(e) => {
            setSearchQuery(e.value)
          }}
					options={searchQuery?.length > 0 ? searchQuery : []}
        />
        {/* <label
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
          <ul className="absolute top-full left-0 right-0 bg-slate-400">
            {searchResult?.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </label> */}
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
