const InputText = ({ placeholder, type = "text", pattern }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      pattern={`${pattern && pattern}`}
      className="w-full py-[25px] px-[20px] border-[3px] border-[#ebebeb] rounded-[20px] outline-none text-[15px] font-[600] leading-[22.5px]  placeholder-[#C6C6C6]"
    />
  )
}

export default InputText
