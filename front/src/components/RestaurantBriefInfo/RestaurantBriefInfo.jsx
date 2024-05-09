import { CallIcon, ClockIcon } from "@ui/icons/icons"
import { formatTimeString } from "@helpers/helpers"
import icon from "@assets/images/icons/workIcon.png"

const RestaurantBriefInfo = ({ data, className }) => {
  const getService = (name) => {
    return (
      <div className="flex py-[10px] px-[20px] gap-x-[10px] h-[53px] items-center shadow-[0px_4px_10px_-2px_rgba(0,0,0,.2)] rounded-[20px]">
        <img src={icon} alt="icon" className="w-[30px] rounded-full" />
        <p>{name}</p>
      </div>
    )
  }

  return (
    <div className={`w-full bg-white rounded-[20px] ${className}`}>
      <div className="grid grid-cols-[133px_1fr] gap-x-[20px] gap-y-[10px] max-md:grid-cols-1">
        <div className="w-[133px] aspect-square rounded-full max-md:hidden">
          {data.image ? (
            <img src={data.image} alt="icon" className="w-full rounded-full " />
          ) : (
            <div className="w-full h-full border-2 rounded-full bg-slate-100"></div>
          )}
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[35px] font-[600] leading-[52.5px]">
            {data.name}
          </h1>
          <p className="text-[20px] leading-[30px] font-[500]">
            {data.description}
          </p>
        </div>
        <div></div>
        <div className="flex gap-[15px] flex-wrap">
          <div className="flex items-center gap-[10px] px-[40px] py-[10px] bg-gradient-to-t from-[#599AFF] to-[#4577FB] text-white rounded-[15px] text-[15px]">
            <CallIcon />
            <span>{data.call ? data.call : "+0 (000} 000 00 00"}</span>
          </div>
          <div className="flex items-center gap-[10px] px-[40px] py-[10px] bg-gradient-to-t from-[#599AFF] to-[#4577FB] text-white rounded-[15px] text-[15px]">
            <ClockIcon />
            <span className="flex items-center text-center">{`${formatTimeString(
              data.modeFrom
            )} - ${formatTimeString(data.modeTo)}`}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-[repeat(3,55px)] gap-x-[10px] gap-y-[10px] mt-[50px] max-md:grid-cols-1">
        {data.can_work && getService("Место, где можно поработать")}
        {data.live_music && getService("Живая музыка")}
        {data.banquet_hall && getService("Банкетный зал")}
        {data.hookah && getService("Кальянная")}
        {data.unlimited_beer && getService("Бар, где пиво без границ")}
        {data.rainy_rhythm && getService("Под ритмом диджея")}
        {data.kids_playroom && getService("С детской игровой комнатой")}
        {data.own_confectioner && getService("Своя кондитерская")}

        {/* {data?.services?.map((service) => (
          <div
            key={service + Math.random()}
            className="flex py-[10px] px-[20px] gap-x-[10px] h-[53px] items-center shadow-[0px_4px_10px_-2px_rgba(0,0,0,.2)] rounded-[20px]"
          >
            <img
              src={service.icon}
              alt="icon"
              className="w-[30px] rounded-full"
            />
            <p>{service.desc}</p>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default RestaurantBriefInfo
