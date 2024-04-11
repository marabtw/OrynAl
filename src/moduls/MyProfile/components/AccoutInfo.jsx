import PreviousDataDisplay from "../../../components/PreviousDataDisplay/PreviousDataDisplay"

const AccoutInfo = () => {
	return (
		<div className='min-w-[40%]'>
			<h3 className='mb-[40px] font-[600] text-[20px] leading-[30px] '>Данные аккаунта</h3>
			<div className='flex flex-col gap-[20px]'>
				<PreviousDataDisplay label={"Имя"} value={"Батырбек"}/>
				<PreviousDataDisplay label={"Фамилия"} value={"Кайыпбай"}/>
				<PreviousDataDisplay label={"Почта"} value={"batyrbek@mail.ru"}/>
				<PreviousDataDisplay label={"Телефон номер"} value={"+7 778 891 32 09"}/>
			</div>
		</div>
	)
}

export default AccoutInfo
