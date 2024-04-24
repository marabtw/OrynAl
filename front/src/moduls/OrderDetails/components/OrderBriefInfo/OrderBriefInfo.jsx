import React from "react"

const OrderBriefInfo = ({ id }) => {
  return (
    <div className="min-w-[647px] px-[60px] py-[60px] font-poppins rounded-[20px] bg-white max-md:w-full max-md:min-w-0 max-md:p-[15px]">
      <div className="">
        <h2 className="font-[700] text-[32px] leading-[48px]">Ваш столик, дата и время</h2>
        <div className="w-[70%] h-[3px] bg-black rounded-full"></div>
      </div>
			<div className="flex mt-[30px]">
				<div className="w-[50%] text-[20px] font-[700] leading-[30px]">
					<h4>ID столика:</h4>
					<h4>Название столика:</h4>
					<h4>Вместимость:</h4>
					<h4>Дата:</h4>
					<h4>Время:</h4>
				</div>
				<div className="w-[50%] text-[20px] leading-[30px]">
					<h4>#101</h4>
					<h4>Столик #1</h4>
					<h4>10</h4>
					<h4>10.01.22</h4>
					<h4>19:00</h4>
				</div>
			</div>
    </div>
  )
}

export default OrderBriefInfo
