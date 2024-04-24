import { useState, useCallback } from "react"
import { ShowIcon, HideIcon } from "../../../ui/icons/icons"

const LoginInput = ({
  label = "...",
  placeholder = "...",
  type = "text",
  required = false,
  onChange = (value) => {
    console.log("function not found")
  },
}) => {
  const [inputType, setInputType] = useState(type)

  const togglePasswordVisibility = useCallback(() => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"))
  }, [])

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className="text-[20px] leading-[30px] font-poppins">
      <h4 className="text-[#989898] font-[700]">{label}</h4>
      <label className="relative font-poppins">
        <input
          type={inputType}
          placeholder={placeholder}
          className="w-full p-[15px] font-[500] border-2 border-[#447DFB] rounded-[10px]"
          required={required ? "required" : ""}
          onChange={handleChange}
        />
        {type === "password" && (
          <div
            className="absolute right-5 top-1/2 translate-y-[-50%] text-[30px] cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              togglePasswordVisibility()
            }}
          >
            {inputType === "password" ? <ShowIcon /> : <HideIcon />}
          </div>
        )}
      </label>
    </div>
  )
}

export default LoginInput
