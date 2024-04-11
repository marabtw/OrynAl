import FormInputTextWrapper from "../../../components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import Button from "../../../ui/Button/Button"

const UpdateAccoutForm = () => {
  return (
	<div className="min-w-[40%]">
      <h3 className="mb-[40px] font-[600] text-[20px] leading-[30px] max-md:mb-[20px]">
        Изменить аккаунт
      </h3>
      <form className="flex flex-col gap-[40px] p-[20px] border-[3px] border-[#ebebeb] rounded-[10px]">
        <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
          <FormInputTextWrapper label="Имя:" placeholder="Батырбек" />
          <FormInputTextWrapper label="Фамилия:" placeholder="Кайыпбай" />
          <FormInputTextWrapper label="Почта:" placeholder="batyrbek@gmail.com" />
          <FormInputTextWrapper
            label="Телефон номер:"
            placeholder="+7 778 891 32 09"
          />
        </div>
        <Button
          text="Изменить"
          gradient={true}
          spacingClass={"mx-auto px-[110px] py-[20px]"}
        />
      </form>
    </div>
  )
}

export default UpdateAccoutForm
