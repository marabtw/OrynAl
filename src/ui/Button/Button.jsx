import React from "react"

const Button = ({
  type = "button",
  text = "button",
  uppercase = false,
  spacingClass,
  textStyles,
  backgroundColor,
  gradient,
  rounded,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center text-white font-poppins
			${textStyles ? textStyles : "text-[15px] font-[600] leading-[22.5px]"} 
			${gradient ? "bg-gradient-to-r from-customLightBlue to-customBLue" : ""} 
			${backgroundColor ? `bg-[${backgroundColor}]` : ""}
			${rounded ? rounded : "rounded-[10px]"} 
			${uppercase ? "uppercase" : ""} 
			${spacingClass  ? spacingClass  : "px-[16px] py-[10px]"} 
			`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
