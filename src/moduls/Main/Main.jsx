import React from "react"
import laptop from "../../assets/images/laptop.png"
import LinkButton from "../../ui/LInkButton/LinkButton"
import Compon from "../../components/Compon/Compon"

const Main = () => {
  return (
    <div className="flex px-[30px] py-[5%] h-[90vh]">
      <Compon />
      <div className="w-[50%] flex flex-col gap-[20px]">
        <h1 className="flex flex-col">
          <span className="bg-gradient-to-r from-[#62AEFC] to-[#3D6FFB] inline-block text-transparent bg-clip-text text-[90px] font-[600] leading-[103.5px]">
            Бронируйте столики
          </span>
          <span className="text-[80px] font-[600] leading-[92px]">
            в любимых заведениях
          </span>
        </h1>
        <p className="text-[#657392] text-[25px] leading-[41px]">
          «Oryn Al» — это платформа для онлайн-заказа и бронирования столиков в
          ресторанах, которое позволяет клиентам легко бронировать столики прямо
          через веб-сайт.
        </p>
        <LinkButton text={"забронировать стол"} uppercase={true} />
      </div>
      <div className="max-h-[80%] w-[50%] relative">
        <img
          src={laptop}
          alt="laptop"
          className="absolute rotate-[5.5deg] left-0 translate-x-[10%]"
        />
      </div>
    </div>
  )
}

export default Main
