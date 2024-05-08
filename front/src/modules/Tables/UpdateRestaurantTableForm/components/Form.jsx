import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "@components/FormComponents/FormInputFileWrapper/FormInputFileWrapper"
import FormSelectWrapper from "@components/FormComponents/FormSelectWrapper/FormSelectWrapper"
import Button from "@ui/Button/Button"

import {
  getTableCapacity,
  getTableType,
} from "@modules/Tables/api/api"

const Form = ({ setDataForUpdate, update }) => {
  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[30px] border-[3px] border-[#ebebeb] rounded-[20px] max-md:gap-[15px]">
      <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
        <FormInputTextWrapper
          label="Название столика:"
          placeholder="Столик #1"
          onChange={(e) => {
            setDataForUpdate((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }}
        />
        <FormInputFileWrapper label="Фотографии:" placeholder="Добавить фото" />
      </div>
      <FormSelectWrapper
        label={"Тип столика:"}
        placeholder={"Тапчан"}
        options={getTableType()}
        onChange={(e) => {
          setDataForUpdate((prevState) => ({
            ...prevState,
            type: e.value,
          }))
        }}
      />
      <FormInputTextWrapper
        label="Описание:"
        placeholder="Напишите краткое описание меню...."
        onChange={(e) => {
          setDataForUpdate((prevState) => ({
            ...prevState,
            description: e.target.value,
          }))
        }}
      />
      <FormSelectWrapper
        label={"Вместимость:"}
        placeholder={"10 человек"}
        options={getTableCapacity()}
        onChange={(e) => {
          setDataForUpdate((prevState) => ({
            ...prevState,
            capacity: e.value,
          }))
        }}
      />
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
