import laptop from "@assets/images/laptop.png"
import LinkButton from "@ui/Button/LinkButton"
import LinearGradientText from "@ui/LinearGradientText/LinearGradienText"

const HeroSection = () => {
  return (
    <div className="flex items-center px-[30px] h-[90vh] max-md: max-md:">
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        <div className="flex flex-col gap-[10px]">
          <h1 className="flex flex-col">
            <LinearGradientText
              tag={"h1"}
              text={"Бронируйте столики"}
              from={"#62AEFC"}
              to={"#3D6FFB"}
              clampsObject={{
                fontSize: "clamp(2rem,5vw,70px)",
                lineHeight: "clamp(2rem,5vw,93.5px)",
              }}
              className={
                "font-ttcommon text-[70px] font-[700] leading-[93.5px]"
              }
            />
            <span className="font-[700] font-ttcommon [font-size:_clamp(2rem,5vw,60px)] [line-height:_clamp(2rem,5vw,72px)]">
              в любимых заведениях
            </span>
          </h1>
          <p className="text-[#657392][font-size:_clamp(2rem,4vw,25px)] [line-height:_clamp(2rem,3vw,41px)]">
            «Oryn Al» — это платформа для онлайн-заказа и бронирования столиков
            в ресторанах, которое позволяет клиентам легко бронировать столики
            прямо через веб-сайт.
          </p>
          <LinkButton
            text={"забронировать стол"}
            uppercase={true}
            className={"mt-[20px]"}
          />
        </div>
        <div className="relative translate-x-[10%] max-h-[80%] max-md:hidden">
          <img src={laptop} alt="laptop" className="rotate-[5.5deg] z-0" />
          <div className="absolute top-0 left-[5%] w-[30%] min-w-max px-[1%] font-[600] text-white text-center bg-[#B33FFA] rounded-[10px]
					[font-size:_clamp(1rem,2vw,30px)] [line-height:_clamp(2rem,2vw,45px)]
					">
            Бесплатно
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
