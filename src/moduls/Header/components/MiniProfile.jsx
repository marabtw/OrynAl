import { Link } from "react-router-dom"
import { SettingsIcon, ExitIcon } from "../../../ui/icons/icons"

const MiniProfile = () => {
  return (
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
      <Link
        to={"/my-profile"}
        className="flex gap-1 items-center h-[27px] w-full rounded-[5px] px-[10px] hover: font-[600] hover:bg-white hover:text-[#4379FB]"
      >
        <SettingsIcon className="text-[15px]" />
        <span className="">Настройки</span>
      </Link>
      <Link
        to={"/login"}
        className="flex gap-1 items-center h-[27px] w-full rounded-[5px] px-[10px] hover: font-[600] hover:bg-white hover:text-[#4379FB]"
      >
        <ExitIcon className="text-[15px]" />
        <span>Выйти</span>
      </Link>
    </div>
  )
}

export default MiniProfile
