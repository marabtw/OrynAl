import Button from "../../../ui/Button/Button"
import InputTextWrapper from "../../../components/InputTextWrapper/InputTextWrapper"
import InputFileWrapper from "../../../components/InputFileWrapper/InputFileWrapper"
import SelectWrapper from "../../../components/SelectWrapper/SelectWrapper"

const Form = ({ data }) => {
  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[30px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="grid grid-cols-2 gap-[30px]">
        <InputTextWrapper placeholder={data.name} label="Название:" />
        <InputFileWrapper label="Фотографии:" placeholder="Добавить фото" />
      </div>
      <SelectWrapper placeholder={data.type} label={"Тип столика"} />
      <InputTextWrapper
        placeholder={`Напишите краткое описание столика....`}
        label="Описание"
      />
      <SelectWrapper
        placeholder={`${data.capacity} человек`}
        label={"Вместимость"}
      />
      <Button
        text="Изменить"
        gradient={true}
        spacingClass={"mx-auto px-[110px] py-[20px]"}
      />
    </form>
  )
}

export default Form
