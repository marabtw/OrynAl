import Button from "../../ui/Button/Button"
import InputTextWrapper from "../../components/InputTextWrapper/InputTextWrapper"
import InputFileWrapper from "../../components/InputFileWrapper/InputFileWrapper"
import SelectWrapper from "../../components/SelectWrapper/SelectWrapper"

const CreateMenuForm = () => {
  return (
    <div className="grid grid-cols-2 gap-10 bg-white px-[40px] py-[80px] font-poppins rounded-[10px]">
      <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
        <div className="grid grid-cols-2 gap-[30px]">
          <InputTextWrapper label="Название меню:" placeholder="Чизбургер" />
          <InputFileWrapper label="Фотографии:" placeholder="Добавить фото" />
        </div>
        <SelectWrapper label={"Тип меню:"} placeholder={"Фаст-фуд"} />
        <InputTextWrapper
          label="Описание:"
          placeholder="Напишите краткое описание меню...."
        />
        <div className="grid grid-cols-2 gap-[20px]">
          <SelectWrapper label={"Цена:"} placeholder={"1200 тенге"} />
          <InputTextWrapper label="Статус" placeholder="Забронирован" />
        </div>
        <Button text="Создать" gradient={true} className={"mx-auto px-[120px] py-[30px]"} />
      </form>
    </div>
  )
}

export default CreateMenuForm
