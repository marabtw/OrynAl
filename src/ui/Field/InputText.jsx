import React from "react"

const InputText = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full py-[25px] px-[20px] border-[3px] border-[#ebebeb] rounded-[20px] outline-none"
    />
  )
}

export default InputText
