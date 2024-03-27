import React from "react"
import InputText from "../../ui/Field/InputText"

const InputTextWrapper = ({ placeholder = "...", label = "...", type="text",pattern }) => {
  return (
    <div className="flex flex-col gap-[15px] w-full">
      <h3 className="text-[15px] font-[600] left-[22.5px]">{label}</h3>
      <InputText placeholder={placeholder} type={type} pattern={pattern}/>
    </div>
  )
}

export default InputTextWrapper
