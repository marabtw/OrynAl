import { Link } from "react-router-dom"

const LinkButton = ({ text, to, bg, onClick, uppercase, id, className }) => {
  return (
    <Link
      to={to}
      className={`items-center justify-center px-[16px] py-[20px] rounded-[10px] text-white 
		${uppercase && "uppercase"} text-[20px] font-[600] leading-[30px] max-w-max
		bg-gradient-to-r from-[#62ADFC] to-[#4277FB] ${className}`}
    >
      {text}
    </Link>
  )
}

export default LinkButton
