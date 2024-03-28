import React from 'react'
import InfoPanel from "../../../components/InfoPanel/InfoPanel"

const AccoutInfo = () => {
	return (
		<div className='min-w-[30%]'>
			<h3 className='mb-[40px] font-[600] text-[20px] leading-[30px] '>Данные аккаунта</h3>
			<div className='flex flex-col gap-[20px]'>
				<InfoPanel label={"Имя"} value={"Батырбек"}/>
				<InfoPanel label={"Фамилия"} value={"Кайыпбай"}/>
				<InfoPanel label={"Почта"} value={"batyrbek@mail.ru"}/>
				<InfoPanel label={"Телефон номер"} value={"+7 778 891 32 09"}/>
			</div>
		</div>
	)
}

export default AccoutInfo
