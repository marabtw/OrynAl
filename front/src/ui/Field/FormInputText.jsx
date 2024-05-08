const FormInputText = ({ placeholder, type = "text", pattern, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      pattern={"[0-9]*"}
      className="w-full py-[25px] px-[20px] border-[3px] border-[#ebebeb] rounded-[20px] outline-none text-[15px] font-[600] leading-[22.5px]  placeholder-[#C6C6C6]"
      onChange={onChange}
			inputMode="numeric"
    />
  )
}

export default FormInputText
