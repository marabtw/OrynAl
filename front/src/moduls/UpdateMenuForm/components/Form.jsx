import Button from "../../../ui/Button/Button"
import FormInputTextWrapper from "../../../components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "../../../components/FormComponents/FormInputFileWrapper/FormInputFileWrapper"
import FormSelectWrapper from "../../../components/FormComponents/FormSelectWrapper/FormSelectWrapper"

const Form = ({ data }) => {
  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[30px] border-[3px] border-[#ebebeb] rounded-[20px] max-md:gap-[15px]">
      <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
        <FormInputTextWrapper label="Название меню:" placeholder="Чизбургер" />
        <FormInputFileWrapper label="Фотографии" placeholder="Добавить фото" />
      </div>
      <FormSelectWrapper label={"Тип меню"} placeholder={"Фаст-фуд"} />
      <FormInputTextWrapper
        label="Описание"
        placeholder="Напишите краткое описание меню...."
      />
      <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
        <FormSelectWrapper label={"Цена"} placeholder={`${data.price} тенге`} />
        <FormInputTextWrapper label="Статус" placeholder={data.status} />
      </div>
      <Button
        text="Изменить"
        gradient={true}
        spacingClass={"mx-auto px-[110px] py-[20px]"}
      />
    </form>
  )
}

export default Form
