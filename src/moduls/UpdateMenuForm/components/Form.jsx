import InputFile from "../../../ui/Field/InputFile"
import InputText from "../../../ui/Field/InputText"
import Button from "../../../ui/Button/Button"
import InputTextWrapper from "../../../components/InputTextWrapper/InputTextWrapper"
import InputFileWrapper from "../../../components/InputFileWrapper/InputFileWrapper"
import SelectWrapper from "../../../components/SelectWrapper/SelectWrapper"

const Form = ({ data }) => {
  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[30px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="grid grid-cols-2 gap-[30px]">
        <InputTextWrapper label="Название меню:" placeholder="Чизбургер" />
        <InputFileWrapper label="Фотографии" placeholder="Добавить фото" />
      </div>
      <SelectWrapper label={"Тип меню"} placeholder={"Фаст-фуд"} />
      <InputTextWrapper
        label="Описание"
        placeholder="Напишите краткое описание меню...."
      />
      <div className="grid grid-cols-2 gap-[20px]">
        <SelectWrapper label={"Цена"} placeholder={`${data.price} тенге`} />
        <InputTextWrapper label="Статус" placeholder={data.status} />
      </div>
      <Button
        text="Изменить"
        gradient={true}
        className={"mx-auto px-[110px] py-[20px]"}
      />
    </form>
  )
}

export default Form
