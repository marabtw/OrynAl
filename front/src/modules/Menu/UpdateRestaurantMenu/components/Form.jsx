import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "@components/FormComponents/FormInputFileWrapper/FormInputFileWrapper"
import FormSelectWrapper from "@components/FormComponents/FormSelectWrapper"
import Button from "@ui/Button/Button"

import { getMenuTypes } from "../../api"

const Form = ({ update, setDataForUpdate }) => {
  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[30px] border-[3px] border-[#ebebeb] rounded-[20px] max-md:gap-[15px]">
      <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
        <FormInputTextWrapper
          label="Название меню:"
          placeholder="Чизбургер"
          onChange={(e) => {
            setDataForUpdate((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }}
        />
        <FormInputFileWrapper label="Фотографии" placeholder="Добавить фото" />
      </div>
      <FormSelectWrapper
        label={"Тип меню"}
        placeholder={"Фаст-фуд"}
        options={getMenuTypes()}
        onChange={(e) => {
          setDataForUpdate((prevState) => ({
            ...prevState,
            type: e.value,
          }))
        }}
      />
      <FormInputTextWrapper
        label="Описание"
        placeholder="Напишите краткое описание меню...."
        onChange={(e) => {
          setDataForUpdate((prevState) => ({
            ...prevState,
            description: e.target.value,
          }))
        }}
      />
      <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
        <FormInputTextWrapper
          label={"Цена:"}
          placeholder={"1200 тенге"}
          type="number"
          onChange={(e) => {
            setDataForUpdate((prevState) => ({
              ...prevState,
              price: +e.target.value,
            }))
          }}
        />
        <FormSelectWrapper
          label={"Доступность"}
          placeholder={"Доступен"}
          options={[
            { label: "Доступен", value: "Доступен" },
            { label: "Не доступен", value: "Не доступен" },
          ]}
          onChange={(e) => {
            setDataForUpdate((prevState) => ({
              ...prevState,
              status: e.value,
            }))
          }}
        />
      </div>
      <Button
        text="Изменить"
        gradient={true}
        spacingClass={"mx-auto px-[110px] py-[20px]"}
        onClick={update}
      />
    </form>
  )
}

export default Form
