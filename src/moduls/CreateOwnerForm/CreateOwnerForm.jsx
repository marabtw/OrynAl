import Button from "../../ui/Button/Button"
import FormInputTextWrapper from "../../components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"

const CreateOwnerForm = () => {
  return (
    <div className="w-full">
      <h3 className="mb-[40px] font-[600] text-[20px] leading-[30px] max-lg:mb-[10px] max-xl:mb-[20px]">
        Создать владельца
      </h3>
      <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
        <FormInputTextWrapper placeholder="Батырбек" label="Имя:" />
        <FormInputTextWrapper
          placeholder="batyrbek@gmail.com"
          label="Почта:"
          type="email"
        />
        <FormInputTextWrapper
          placeholder="+7 778 891 32 09"
          label="Телефон номер:"
          type="tel"
          pattern={"[7]"}
        />
        <div className="flex gap-[30px] max-md:flex-col">
          <FormInputTextWrapper
            placeholder="*********"
            label="Пароль"
            type="password"
          />
          <FormInputTextWrapper
            placeholder="*********"
            label="Повторите пароль"
            type="password"
          />
        </div>
        <Button
          text="Создать"
          gradient={true}
          spacingClass={"mx-auto px-[150px] py-[20px] max-md:mx-0 max-md:px-0"}
        />
      </form>
    </div>
  )
}

export default CreateOwnerForm
