import Button from "../../ui/Button/Button"
import InputText from "../../ui/Field/InputText"
import InputFile from "../../ui/Field/InputFile"

const CreateTableForm = () => {
  return (
    <div className="grid grid-cols-2 gap-10 bg-white px-[40px] py-[80px] font-poppins rounded-[10px]">
			<form className="flex flex-col w-full px-[20px] py-[30px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="grid grid-cols-2 gap-[30px]">
        <div className="flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">
            Название столика:
          </h3>
          <InputText placeholder={"Столик #1"} />
        </div>
        <div className="w-full flex flex-col">
          <h3 className="text-[15px] font-[600] left-[22.5px]">Фотографии:</h3>
          <InputFile placeholder={"Добавить фото"} />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-[15px] font-[600] left-[22.5px]">Тип столика:</h3>
        <InputText placeholder={"Тапчан"} />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[15px] font-[600] left-[22.5px]">Описание:</h3>
        <InputText placeholder={`Напишите краткое описание меню....`} />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[15px] font-[600] left-[22.5px]">Вместимость:</h3>
        <InputText placeholder={`10 человек`} />
      </div>
      <Button text="Создать" className={"mx-auto"} />
    </form>
    </div>
  )
}

export default CreateTableForm
