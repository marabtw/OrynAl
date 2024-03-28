import { useState } from "react"
import logo from "../../../../assets/svg/orderLogo.svg"
import { dataCart } from "../../../../data/bookingData"
import { CrossIcon, MinusIcon, PlusIcon } from "../../../../ui/icons/icons"

const OrderMenu = () => {
  const [cart, setCart] = useState(dataCart)
  const [allPrice, setAllPrice] = useState(0)

  return (
    <div className="min-w-[528px]">
      <div className="flex justify-between items-center w-full h-[137px] px-[30px] py-[20px] text-white font-poppins shadow-[0px 4px 21px rgba(0,0,0,.1) rounded-tr-[50px] rounded-tl-[50px] bg-gradient-to-r from-[#62ADFC] to-[#447BFB]">
        <h4 className="relative text-[30px] font-[800] leading-[24px] before:w-[47px] before:h-[5px] before:absolute before:top-[120%] before:left-0 before:translate-y-[100%] before:bg-white before:rounded-[10px]">
          Мой заказ
        </h4>
        <img src={logo} alt="" className="w-[85px] aspect-square" />
      </div>
      <div className="w-full h-[904px] p-[5px] rounded-bl-[50px] rounded-br-[50px] bg-gradient-to-r from-[#62ADFC] to-[#447BFB]">
        <div className="flex flex-col justify-between w-full h-full px-[30px] py-[40px] bg-white rounded-bl-[50px] rounded-br-[50px]">
          <ul className="flex-1 overflow-auto px-[10px]">
            {cart.map((el, index) => (
              <li key={el.id}>
                <div className="flex items-center gap-[20px]">
                  <img src={el.icon} alt="" className="w-[50px] h-[50px]" />
                  <h4 className="flex flex-1 items-center">
                    {el.amount}
                    <CrossIcon className="text-[#4983FB]" />
                    {el.name}
                  </h4>
                  <h4 className="text-[#4983FB]">{el.price}</h4>
                </div>
                {index < cart.length - 1 && (
                  <div className="w-[55%] h-[3px] mb-[10px] mx-auto bg-[#c4c4c4]"></div>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-[30px]">
            <div className="px-[40px]">
              <div className="flex justify-between">
                <h4 className="text-[32px] font-[600] leading-[24px]">
                  Итого{" "}
                </h4>
                <h4 className="text-[32px] font-[600] leading-[24px] text-[#487AFB]">
                  {allPrice}{" "}
                </h4>
              </div>
              <div className="w-full h-[6px] mt-[15px] bg-[#447AFB] rounded-[10px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderMenu
