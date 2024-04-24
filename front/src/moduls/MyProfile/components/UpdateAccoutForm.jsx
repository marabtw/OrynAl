import { useState } from "react"
import FormInputTextWrapper from "../../../components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import Button from "../../../ui/Button/Button"

const UpdateAccoutForm = ({ currentUserData, updateUserData }) => {
  const [dataForUpdate, setDataForUpdate] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  })

  return (
    <div className="min-w-[40%]">
      <h3 className="mb-[40px] font-[600] text-[20px] leading-[30px] max-md:mb-[20px]">
        Изменить аккаунт
      </h3>
      <form className="flex flex-col gap-[40px] p-[20px] border-[3px] border-[#ebebeb] rounded-[10px]">
        <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
          <FormInputTextWrapper
            label="Имя:"
            placeholder={currentUserData.name}
            onChange={(e) => {
              setDataForUpdate((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }}
          />
          <FormInputTextWrapper
            label="Фамилия:"
            placeholder={currentUserData.surname}
            onChange={(e) => {
              setDataForUpdate((prevState) => ({
                ...prevState,
                surname: e.target.value,
              }))
            }}
          />
          <FormInputTextWrapper
            label="Почта:"
            placeholder={currentUserData.email}
            onChange={(e) => {
              setDataForUpdate((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }}
          />
          <FormInputTextWrapper
            label="Телефон номер:"
            placeholder={currentUserData.phone}
            onChange={(e) => {
              setDataForUpdate((prevState) => ({
                ...prevState,
                phone: e.target.value,
              }))
            }}
          />
        </div>
        <Button
          text="Изменить"
          gradient={true}
          spacingClass={"mx-auto px-[110px] py-[20px]"}
          onClick={() => {
            const updatedUserData = {
              ...currentUserData,
              ...Object.entries(dataForUpdate).reduce((acc, [key, value]) => {
                if (value !== "") {
                  acc[key] = value
                }
                return acc
              }, {}),
            }
            updateUserData(updatedUserData)
          }}
        />
      </form>
    </div>
  )
}

export default UpdateAccoutForm
