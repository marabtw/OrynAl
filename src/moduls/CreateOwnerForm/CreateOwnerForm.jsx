import Button from "../../ui/Button/Button"
import InputTextWrapper from "../../components/InputTextWrapper/InputTextWrapper"

const CreateOwnerForm = () => {
  return (
    <div className="w-1/2">
      <h3 className="mb-[40px] font-[600] text-[20px] leading-[30px]">
        Создать владельца
      </h3>
      <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
        <InputTextWrapper placeholder="Батырбек" label="Имя:" />
        <InputTextWrapper
          placeholder="batyrbek@gmail.com"
          label="Почта:"
          type="email"
        />
        <InputTextWrapper
          placeholder="+7 778 891 32 09"
          label="Телефон номер:"
          type="tel"
          pattern={"[7]"}
        />
        <div className="flex gap-[30px]">
          <InputTextWrapper
            placeholder="*********"
            label="Пароль"
            type="password"
          />
          <InputTextWrapper
            placeholder="*********"
            label="Повторите пароль"
            type="password"
          />
        </div>
        <Button
          text="Создать"
          gradient={true}
          spacingClass={"mx-auto px-[150px] py-[20px]"}
        />
      </form>
    </div>
  )
}

export default CreateOwnerForm
