import React from "react"

const Button = ({
  type = "button",
  text = "button",
  uppercase = false,
  className,
  backgroundColor,
  gradient,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`flex items-center justify-center text-white font-poppins ${
        className && className
      } ${gradient && "bg-gradient-to-r from-customLightBlue to-customBLue"} ${
        backgroundColor && `${backgroundColor}`
      } ${
        uppercase && "uppercase"
      } px-[16px] py-[10px] text-[15px] font-[600] leading-[22.5px] rounded-[10px]`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
