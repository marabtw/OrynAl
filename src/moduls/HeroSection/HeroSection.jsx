import laptop from "../../assets/images/laptop.png"
import LinkButton from "../../ui/LInkButton/LinkButton"
import LinearGradientText from "../../ui/LinearGradientText/LinearGradienText"

const HeroSection = () => {
  return (
    <div className="flex items-center px-[30px] h-[90vh]">
      <div className="flex">
        <div className="w-[50%] flex flex-col gap-[10px]">
          <h1 className="flex flex-col">
            <LinearGradientText
              tag={"h1"}
              text={"Бронируйте столики"}
              from={"#62AEFC"}
              to={"#3D6FFB"}
              className={
                "font-ttcommon text-[70px] font-[700] leading-[93.5px]"
              }
            />

            <span className="text-[60px] font-[700] font-ttcommon leading-[72px]">
              в любимых заведениях
            </span>
          </h1>
          <p className="text-[#657392] text-[25px] leading-[41px]">
            «Oryn Al» — это платформа для онлайн-заказа и бронирования столиков
            в ресторанах, которое позволяет клиентам легко бронировать столики
            прямо через веб-сайт.
          </p>
          <LinkButton text={"забронировать стол"} uppercase={true} className={"mt-[20px]"} />
        </div>
        <div className="relative translate-x-[10%] max-h-[80%] w-[50%]">
          <img src={laptop} alt="laptop" className="rotate-[5.5deg] z-0" />
          <div className="absolute top-0 left-[5%] w-[250px] text-[30px] font-[600] leading-[45px] text-white text-center bg-[#B33FFA] rounded-[10px]">
            Бесплатно
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
