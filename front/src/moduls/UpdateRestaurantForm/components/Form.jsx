import FormCheckbox from "../../../ui/Field/FormCheckbox"
import FormInputTextWrapper from "../../../components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "../../../components/FormComponents/FormInputFileWrapper/FormInputFileWrapper"
import FormSelectWrapper from "../../../components/FormComponents/FormSelectWrapper/FormSelectWrapper"
import FormSelect from "../../../ui/Select/FormSelect"


const Form = ({services, data}) => {
  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
        <FormInputTextWrapper placeholder="Sandyq" label="Название:" />
        <FormInputFileWrapper placeholder="Добавить логотип" label="Логотип:" />
      </div>
      <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
        <FormInputTextWrapper placeholder="Абай, 101" label="Адрес" />
        <FormInputFileWrapper placeholder="Добавить фото" label="Фотографии:" />
      </div>
      <FormInputTextWrapper
        placeholder="Напишите краткое описание меню...."
        label="Описание"
      />
      <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
        <div className="flex flex-col gap-[15px]">
          <h3 className="text-[15px] font-[600] left-[22.5px]">
            Режим работы ▼
          </h3>
          <div className="flex items-center gap-[10px]">
            <div className="w-1/2">
              <FormSelect placeholder={"10:00"} />
            </div>
            <p className="text-[#C6C6C6] text-[15px]">-</p>
            <div className="w-1/2">
              <FormSelect placeholder={"22:00"} />
            </div>
          </div>
        </div>
        <FormSelectWrapper label={"Город"} placeholder={"Алматы"} />
      </div>
      <div className="grid grid-cols-2 gap-[10px] max-md:grid-cols-1">
        {services.map((service) => (
          <FormCheckbox key={service} data={service} />
        ))}
      </div>
    </form>
  )
}

export default Form
