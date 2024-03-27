import React from "react"
import InputFile from "../../ui/Field/InputFile"

const InputFileWrapper = ({ placeholder = "...", label = "..." }) => {
  return (
    <div className="w-full flex flex-col gap-[15px]">
      <h3 className="text-[15px] font-[600] left-[22.5px]">{label}</h3>
      <InputFile placeholder={placeholder} />
    </div>
  )
}

export default InputFileWrapper
