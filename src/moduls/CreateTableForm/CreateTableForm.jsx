import Button from "../../ui/Button/Button"
import InputTextWrapper from "../../components/InputTextWrapper/InputTextWrapper"
import InputFileWrapper from "../../components/InputFileWrapper/InputFileWrapper"
import SelectWrapper from "../../components/SelectWrapper/SelectWrapper"

const CreateTableForm = () => {
  return (
    <div className="grid grid-cols-2 gap-10 bg-white px-[40px] py-[80px] font-poppins rounded-[10px]">
      <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
        <div className="grid grid-cols-2 gap-[30px]">
          <InputTextWrapper label="Название столика:" placeholder="Столик #1" />
          <InputFileWrapper label="Фотографии:" placeholder="Добавить фото" />
        </div>
        <InputTextWrapper label="Тип столика:" placeholder="Тапчан" />
        <InputTextWrapper
          label="Описание:"
          placeholder="Напишите краткое описание меню...."
        />
        <SelectWrapper label={"Вместимость:"} placeholder={"10 человек"} />
        <Button text="Создать" gradient={true} className={"mx-auto px-[120px] py-[20px]"}/>
      </form>
    </div>
  )
}

export default CreateTableForm
