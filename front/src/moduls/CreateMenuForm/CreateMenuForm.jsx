import Button from "../../ui/Button/Button"
import FormInputTextWrapper from "../../components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "../../components/FormComponents/FormInputFileWrapper/FormInputFileWrapper"
import FormSelectWrapper from "../../components/FormComponents/FormSelectWrapper/FormSelectWrapper"

const CreateMenuForm = () => {
  return (
      <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
        <div className="grid grid-cols-2 gap-[30px] max-lg:grid-cols-1">
          <FormInputTextWrapper label="Название меню:" placeholder="Чизбургер" />
          <FormInputFileWrapper label="Фотографии:" placeholder="Добавить фото" />
        </div>
        <FormSelectWrapper label={"Тип меню:"} placeholder={"Фаст-фуд"} />
        <FormInputTextWrapper
          label="Описание:"
          placeholder="Напишите краткое описание меню...."
        />
        <div className="grid grid-cols-2 gap-[20px]">
          <FormSelectWrapper label={"Цена:"} placeholder={"1200 тенге"} />
          <FormInputTextWrapper label="Статус" placeholder="Забронирован" />
        </div>
        <Button text="Создать" gradient={true} spacingClass={"mx-auto px-[120px] py-[20px]"} />
      </form>
  )
}

export default CreateMenuForm
