import React from "react"

const LoginInput = ({
  label = "...",
  placeholder = "...",
  type = "text",
  required = false,
}) => {
  return (
    <div className="text-[20px] leading-[30px] font-poppins">
      <h4 className="text-[#989898] font-[700]">{label}</h4>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-[15px] font-[500] border-2 border-[#447DFB] rounded-[10px]"
        required={required ? "required" : ""}
      />
    </div>
  )
}

export default LoginInput
