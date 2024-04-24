import FormSelect from "../../../ui/Select/FormSelect"

const FormSelectWrapper = ({ placeholder, label, placeholderIcon=false }) => {
  return (
    <div className="w-full flex flex-col gap-[15px]">
      <h3 className="text-[15px] font-[600] left-[22.5px]">{label} ▼</h3>
      <FormSelect placeholder={placeholder} placeholderIcon={placeholderIcon}/>
    </div>
  )
}

export default FormSelectWrapper
