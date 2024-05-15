import { getTableCapacity, getTableType } from "../../api"

import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "@components/FormComponents/FormInputFileWrapper"
import FormSelectWrapper from "@components/FormComponents/FormSelectWrapper"

import Button from "@ui/Button/Button"

const Form = ({ tableData, setDataForUpdate, update }) => {
  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[30px] border-[3px] border-[#ebebeb] rounded-[20px] max-md:gap-[15px]">
      <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
        <FormInputTextWrapper
          label="Название столика:"
          placeholder="Столик #1"
          onChange={(value) => {
            setDataForUpdate((prevState) => ({
              ...prevState,
              name: value ? value : tableData.name,
            }))
          }}
        />
        <FormInputFileWrapper label="Фотографии:" placeholder="Добавить фото" />
      </div>
      <FormSelectWrapper
        label={"Тип столика:"}
        placeholder={"Тапчан"}
        options={getTableType()}
        onChange={(value) => {
          setDataForUpdate((prevState) => ({
            ...prevState,
            type: value ? value : tableData.type,
          }))
        }}
      />
      <FormInputTextWrapper
        label="Описание:"
        placeholder="Напишите краткое описание меню...."
        onChange={(value) => {
          setDataForUpdate((prevState) => ({
            ...prevState,
            description: value ? value : tableData.description,
          }))
        }}
      />
      <FormInputTextWrapper
        label={"Вместимость:"}
        placeholder={"10 человек"}
        type={"number"}
        onChange={(value) => {
          setDataForUpdate((prevState) => ({
            ...prevState,
            capacity: value ? +value : tableData.capacity,
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
