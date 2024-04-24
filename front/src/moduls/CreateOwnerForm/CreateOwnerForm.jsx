import { useState, useMemo } from "react"
import Button from "../../ui/Button/Button"
import FormInputTextWrapper from "../../components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import { postOwner } from "./api/api"
import { isValidEmail } from "../../app/helpers/helpers"

const CreateOwnerForm = () => {
  const [dataForCreate, setDataForCreate] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    role: "owner",
  })
  const [rePassword, setRePassword] = useState("")

  const isFormValid = useMemo(() => {
    return (
      isValidEmail(dataForCreate.email) &&
      dataForCreate.name &&
      dataForCreate.phone &&
      dataForCreate.password &&
      dataForCreate.password === rePassword
    )
  })

  const createOwner = () => {
    if (isFormValid) {
      postOwner(dataForCreate)
        .then((res) => {
          console.log(res)
          alert("success")
        })
        .catch((error) => console.log(error))
    } else {
      alert("")
    }
  }

  return (
    <div className="w-full">
      <h3 className="mb-[40px] font-[600] text-[20px] leading-[30px] max-lg:mb-[10px] max-xl:mb-[20px]">
        Создать владельца
      </h3>
      <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
        <FormInputTextWrapper
          placeholder="Батырбек"
          label="Имя:"
          onChange={(e) => {
            setDataForCreate((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }}
        />
        <FormInputTextWrapper
          placeholder="batyrbek@gmail.com"
          label="Почта:"
          type="email"
          onChange={(e) => {
            setDataForCreate((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }}
        />
        <FormInputTextWrapper
          placeholder="+7 778 891 32 09"
          label="Телефон номер:"
          type="tel"
          pattern={"[7]"}
          onChange={(e) => {
            setDataForCreate((prevState) => ({
              ...prevState,
              phone: e.target.value,
            }))
          }}
        />
        <div className="flex gap-[30px] max-md:flex-col">
          <FormInputTextWrapper
            placeholder="*********"
            label="Пароль"
            type="password"
            onChange={(e) => {
              setDataForCreate((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }}
          />
          <FormInputTextWrapper
            placeholder="*********"
            label="Повторите пароль"
            type="password"
            onChange={(e) => {
              setRePassword(e.target.value)
            }}
          />
        </div>
        <Button
          text="Создать"
          gradient={true}
          spacingClass={"mx-auto px-[150px] py-[20px] max-md:mx-0 max-md:px-0"}
          onClick={createOwner}
        />
      </form>
    </div>
  )
}

export default CreateOwnerForm
