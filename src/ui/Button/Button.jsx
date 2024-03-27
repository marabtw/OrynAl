import React from "react"

const Button = ({ text = "button", uppercase = false, className }) => {
  return (
    <button
      className={`items-center justify-center px-[16px] py-[10px] rounded-[10px] text-white font-poppins
		${uppercase && "uppercase"} bg-gradient-to-r from-[#62ADFC] to-[#4277FB] ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
