import { Link } from "react-router-dom"

const LinkButton = ({
  text,
  to,
  onClick,
  uppercase,
  className,
  spacingClass,
	textClass,
}) => {
  return (
    <Link
      to={to}
      className={`flex items-center justify-center 
				max-w-max rounded-[10px] 
				${textClass ? textClass : "text-[20px] font-[600] leading-[30px]"}
				bg-gradient-to-r from-[#62ADFC] to-[#4277FB] text-white 
				transition-all duration-75
				${uppercase && "uppercase"} ${className} ${spacingClass ? spacingClass : "px-10 py-5"}
				hover:scale-105`}
      onClick={onClick}
    >
      {text}
    </Link>
  )
}

export default LinkButton
