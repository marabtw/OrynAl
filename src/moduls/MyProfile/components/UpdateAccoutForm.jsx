import InputText from "../../../ui/Field/InputText"
import InputTextWrapper from "../../../components/InputTextWrapper/InputTextWrapper"
import Button from "../../../ui/Button/Button"
const UpdateAccoutForm = () => {
  return (
    <div className="min-w-[40%]">
      <h3 className="mb-[40px] font-[600] text-[20px] leading-[30px]">
        Изменить аккаунт
      </h3>
      <form className="flex flex-col gap-[40px] p-[20px] border-[3px] border-[#ebebeb] rounded-[10px]">
        <div className="grid grid-cols-2 gap-[20px]">
          <InputTextWrapper label="Имя:" placeholder="Батырбек" />
          <InputTextWrapper label="Фамилия:" placeholder="Кайыпбай" />
          <InputTextWrapper label="Почта:" placeholder="batyrbek@gmail.com" />
          <InputTextWrapper
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
