import { useState } from "react"
import logo from "@assets/svg/orderLogo.svg"
import { dataCart } from "@data/bookingData"
import Button from "@ui/Button/Button"
import { CrossIcon, MinusIcon, PlusIcon } from "@ui/icons/icons"

const Cart = ({ show }) => {
  const [cart, setCart] = useState(dataCart)
  const [allPrice, setAllPrice] = useState(0)

  return (
    <div
      className={`fixed top-0 right-0 max-2xl:w-full h-full max-2xl:flex justify-end max-2xl:z-[9999] 2xl:relative ${
        show ? "max-2xl:bg-[rgba(0,0,0,.6)] backdrop-blur-[5px]" : ""
      }`}
    >
      <div
        className={`relative w-[528px] max-2xl:translate-x-[100%] duration-200 ${
          show ? "max-2xl:translate-x-0" : ""
        }`}
      >
        <div className="flex justify-between items-center w-full h-[137px] px-[30px] py-[20px] text-white font-poppins shadow-[0px 4px 21px rgba(0,0,0,.1) rounded-tr-[50px] rounded-tl-[50px] bg-gradient-to-r from-[#62ADFC] to-[#447BFB]">
          <h4 className="relative text-[30px] font-[800] leading-[24px] before:w-[47px] before:h-[5px] before:absolute before:top-[120%] before:left-0 before:translate-y-[100%] before:bg-white before:rounded-[10px]">
            Мой заказ
          </h4>
          <img src={logo} alt="" className="w-[85px] aspect-square" />
        </div>
        <div className="w-full h-[1104px] p-[5px] rounded-bl-[50px] rounded-br-[50px] bg-gradient-to-r from-[#62ADFC] to-[#447BFB] max-2xl:h-[calc(100%-137px)]">
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
                    <div className="flex">
                      <button
                        type="button"
                        className="flex justify-center items-center w-[24px] aspect-square text-[20px]"
                      >
                        <MinusIcon />
                      </button>
                      <button
                        type="button"
                        className="flex justify-center items-center w-[24px] aspect-square text-[20px]"
                      >
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                  {index < cart.length - 1 && (
                    <div className="w-[55%] h-[3px] mb-[10px] mx-auto bg-[#c4c4c4]"></div>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-[30px]">
              <div className="px-[40px] mb-[20px]">
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
              <Button
                textStyles={"text-[18px] font-[800] leading-[24px]"}
                text="Подтвердить"
                gradient={true}
                rounded={"rounded-[10px]"}
                spacingClass={"px-[80px] py-[20px] w-full"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
