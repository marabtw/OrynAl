import { ClockIcon } from "@ui/icons/icons"
import SelectItem from "./SelectItem"

import { getTimes } from "@modules/Management/api"

const ChooseTime = ({ getFilter }) => {
  return (
    <div
      className="flex items-center w-full min-h-[124px] px-[180px] font-poppins text-white bg-gradient-to-r from-[#62ADFC] to-[#4277FB] rounded-[20px]
		max-xl:px-[50px] max-sm:py-[10px]"
    >
      <div className="relative flex justify-between items-center w-full max-lg:flex-col">
        <h2 className="relative text-[30px] leading-[45px] font-[600] text-center">
          <ClockIcon className="absolute top-[50%] left-[0%] translate-x-[-110%] translate-y-[-50%] text-[76px] max-xl:hidden" />
          Выберите дату и время
        </h2>
        <div className="flex justify-between items-center gap-[100px] max-md:gap-[20px] max-sm:flex-col">
          <div className="flex items-center gap-[20px]">
            <h4 className="text-[20px] leading-[30px]">Дата</h4>
            <SelectItem placeholder="01.01" />
          </div>
          <div className="flex items-center gap-[20px]">
            <h4 className="text-[20px] leading-[30px]">Время</h4>
            <SelectItem placeholder="00:00" options={getTimes()} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseTime
