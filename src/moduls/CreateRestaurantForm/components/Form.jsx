import Checkbox from "../../../ui/Field/Checkbox"
import { dataServices } from "../../../data/myRestaurantData"
import InputTextWrapper from "../../../components/InputTextWrapper/InputTextWrapper"
import InputFileWrapper from "../../../components/InputFileWrapper/InputFileWrapper"
import SelectWrapper from "../../../components/SelectWrapper/SelectWrapper"
import SelectItems from "../../../ui/Select/SelectItems"

const Form = () => {
  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="grid grid-cols-2 gap-[30px]">
        <InputTextWrapper placeholder="Sandyq" label="Название:" />
        <InputFileWrapper placeholder="Добавить логотип" label="Логотип:" />
      </div>
      <div className="grid grid-cols-2 gap-[30px]">
        <InputTextWrapper placeholder="Абай, 101" label="Адрес" />
        <InputFileWrapper placeholder="Добавить фото" label="Фотографии:" />
      </div>
      <InputTextWrapper
        placeholder="Напишите краткое описание меню...."
        label="Описание"
      />
      <div className="grid grid-cols-2 gap-[30px]">
        <div className="flex flex-col gap-[15px]">
          <h3 className="text-[15px] font-[600] left-[22.5px]">
            Режим работы ▼
          </h3>
          <div className="flex items-center gap-[10px]">
            <div className="w-1/2">
              <SelectItems placeholder={"10:00"} placeholderIcon={true}/>
            </div>
            <p className="text-[#C6C6C6] text-[15px]">-</p>
            <div className="w-1/2">
              <SelectItems placeholder={"22:00"} placeholderIcon={true}/>
            </div>
          </div>
        </div>
        <SelectWrapper label={"Город"} placeholder={"Алматы"} />
        <SelectWrapper label={"Владелец"} placeholder={"Иван Петров"} placeholderIcon={true}/>
      </div>
      <div className="grid grid-cols-2 gap-[10px]">
        {dataServices.map((service) => (
          <Checkbox data={service} />
        ))}
      </div>
    </form>
  )
}

export default Form
