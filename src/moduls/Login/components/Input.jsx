import React from "react"

const Input = ({label="...", placeholder="...", type="text"}) => {
  return (
    <div className="font-[700] text-[20px] leading-[30px] text-[#989898]">
      <h4>{label}</h4>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-[15px] border-2 border-[#447DFB] rounded-[10px]"
      />
    </div>
  )
}

export default Input
