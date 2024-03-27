import CreateMenuForm from "../moduls/CreateMenuForm/CreateMenuForm"

const CreateMenu = () => {
  return (
    <div className="px-[50px]">
      <div className="flex items-center gap-[20px] my-[40px]">
        <h3 className="flex gap-2 text-[32px] leading-[48px] font-[500]">
          <span>Мои рестораны</span>
          <span>-</span>
          <span className="font-[700]">Создать меню</span>
        </h3>
      </div>
			<CreateMenuForm/>
    </div>
  )
}

export default CreateMenu
