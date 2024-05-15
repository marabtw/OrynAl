import { useContext, useEffect, useRef } from "react"
import { useNavigate, Link } from "react-router-dom"
import Cookies from "js-cookie"

import { AuthContext } from "@context/AuthContext"
import { ROUTERS } from "@router/Router.config"
import { removeWildcard } from "@helpers"

import { SettingsIcon, ExitIcon } from "@ui/icons/icons"

const ProfileMenuDropdown = ({ close }) => {
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const dropdownRef = useRef(null)

  const deleteUser = () => {
    Cookies.remove("accessToken", { SameSite: "None", Secure: true })
    Cookies.remove("refreshToken", { SameSite: "None", Secure: true })
    localStorage.removeItem("user")
    setUser("")
    navigate(ROUTERS.Home)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      console.log("object")
      close()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full right-0 translate-y-[10%] min-w-[223px] min-h-[153px] rounded-[10px] px-[5px] py-[20px] 
			bg-gradient-to-r from-[#62ADFC] to-[#4277FB] text-white text-[12px] font-[400] z-50"
    >
      <div className="px-[15px] flex flex-col mb-[10px]">
        <h2 className="font-[700] text-[22px] leading-[32px]">
          Adilbek Abilov
        </h2>
        <p className="leading-[18px]">Adilbek.abilov@gmail.com</p>
      </div>
      <Link
        to={`${removeWildcard(ROUTERS.Profile.root)}${
          ROUTERS.Profile.myProfile
        }`}
        className="flex gap-1 items-center h-[27px] w-full rounded-[5px] px-[10px] hover: font-[600] hover:bg-white hover:text-[#4379FB]"
      >
        <SettingsIcon className="text-[15px]" />
        <span className="">Настройки</span>
      </Link>
      <div
        className="flex gap-1 items-center h-[27px] w-full rounded-[5px] px-[10px] hover: font-[600] hover:bg-white hover:text-[#4379FB]"
        onClick={deleteUser}
      >
        <ExitIcon className="text-[15px]" />
        <span>Выйти</span>
      </div>
    </div>
  )
}

export default ProfileMenuDropdown
