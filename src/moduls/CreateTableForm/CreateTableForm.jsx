import Button from "../../ui/Button/Button"
import FormInputTextWrapper from "../../components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "../../components/FormComponents/FormInputFileWrapper/FormInputFileWrapper"
import FormSelectWrapper from "../../components/FormComponents/FormSelectWrapper/FormSelectWrapper"

const CreateTableForm = () => {
  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="grid grid-cols-2 gap-[30px] max-lg:grid-cols-1">
        <FormInputTextWrapper label="Название столика:" placeholder="Столик #1" />
        <FormInputFileWrapper label="Фотографии:" placeholder="Добавить фото" />
      </div>
      <FormInputTextWrapper label="Тип столика:" placeholder="Тапчан" />
      <FormInputTextWrapper
        label="Описание:"
        placeholder="Напишите краткое описание меню...."
      />
      <FormSelectWrapper label={"Вместимость:"} placeholder={"10 человек"} />
      <Button
        text="Создать"
        gradient={true}
        spacingClass={"mx-auto px-[120px] py-[20px]"}
      />
    </form>
  )
}

export default CreateTableForm
