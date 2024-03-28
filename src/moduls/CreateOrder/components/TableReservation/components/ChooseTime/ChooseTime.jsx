import { ClockIcon } from "../../../../../../ui/icons/icons"
import SelectItem from "../../../../../../ui/Select/SelectItems"

const ChooseTime = () => {
  return (
    <div className="flex items-center w-full h-[124px] px-[180px] font-poppins text-white bg-gradient-to-r from-[#62ADFC] to-[#4277FB] rounded-[20px]">
      <div className="relative flex justify-between items-center w-full">
        <ClockIcon className="absolute top-[50%] left-[0%] translate-x-[-110%] translate-y-[-50%] text-[76px]" />
        <h2 className=" text-[30px] leading-[45px] font-[600]">
          Выберите дату и время
        </h2>
        <div className="flex justify-between items-center gap-[100px]">
          <div className="flex items-center">
            <h4 className="text-[20px] leading-[30px]">Дата</h4>
            <SelectItem />
          </div>
          <div className="flex items-center">
            <h4 className="text-[20px] leading-[30px]">Время</h4>
            <SelectItem  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseTime
