import { LocationIcon } from "@ui/icons/icons"

const LocationInfo = ({ text = "no text",}) => {
  return (
    <div
      className="fixed top-[835px] left-0 flex items-center gap-[10px] z-[44]
			pl-[60px] pr-[40px] max-w-max w-[222px] h-[50px]
			rounded-tr-[20px] rounded-br-[20px] pointer-events-auto
			text-[20px] font-semibold leading-[30px]
			bg-[#6AA7FC] text-white shadow-[0px_4px_9px_rgba(0,0,0,.25)]
			max-md:text-[16px] max-md:leading-[21px] max-md:pl-[20px] max-md:h-[40px] max-2xl:top-[90%]"
    >
      <LocationIcon />
      <span>{text}</span>
    </div>
  )
}

export default LocationInfo
