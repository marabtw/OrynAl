import React from "react"
import { LocationIcon } from "../../ui/icons/icons"

const ShowLocation = ({ text = "", position = "absolute" }) => {
  return position === "absolute" ? (
    <div className="absolute top-0 left-0 w-[100vw] h-[100vh] pointer-events-none">
      <div className="relative top-[85%] left-0 px-[40px] py-[10px] max-w-max flex items-center gap-[10px] bg-[#6AA7FC] text-white text-[20px] rounded-tr-[20px] rounded-br-[20px] pointer-events-auto">
        <LocationIcon />
        <span className="leading-[30px]">{text}</span>
      </div>
    </div>
  ) : (
    <div className="relative px-[40px] py-[10px] max-w-max flex items-center gap-[10px] bg-[#6AA7FC] text-white text-[20px] rounded-tr-[20px] rounded-br-[20px] pointer-events-auto">
      <LocationIcon />
      <span className="leading-[30px]">{text}</span>
    </div>
  )
}

export default ShowLocation
