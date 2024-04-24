import FormInputText from "../../../ui/Field/FormInputText"

const FormInputTextWrapper = ({ placeholder = "...", label = "...", type="text",pattern,onChange }) => {
  return (
    <div className="flex flex-col gap-[15px] w-full">
      <h3 className="text-[15px] font-[600] left-[22.5px]">{label}</h3>
      <FormInputText placeholder={placeholder} type={type} pattern={pattern} onChange={onChange}/>
    </div>
  )
}

export default FormInputTextWrapper
