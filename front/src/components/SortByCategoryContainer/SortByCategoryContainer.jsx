import { useEffect, useState } from "react"

const SortByCategoryContainer = ({ categories, className, getCategory=() => {} }) => {
  const [active, setActive] = useState("Все рестораны")

  useEffect(() => {
    getCategory(active)
  }, [active])

  return (
    <div
      className={`w-full flex flex-wrap gap-[20px] ${className} max-lg:justify-center`}
    >
			<span
          className={`flex items-center cursor-pointer 
						px-[10px] py-[5px]
						text-[20px] leading-[41px] font-[400]
						rounded-[10px] 
						${"" === active ? "text-white bg-[#6AA7FC]" : "hover:bg-[#f2f3f6]"} 
						transition-all duration-150
						max-lg:text-[18px] max-lg:leading-[25px] max-sm:text-[16px] max-sm:leading-[20px] max-md:text-center`}
          onClick={() => setActive("")}
        >
          {"Все"}
        </span>
      {categories?.map((el) => (
        <span
          key={el}
          className={`flex items-center cursor-pointer 
						px-[10px] py-[5px]
						text-[20px] leading-[41px] font-[400]
						rounded-[10px] 
						${el === active ? "text-white bg-[#6AA7FC]" : "hover:bg-[#f2f3f6]"} 
						transition-all duration-150
						max-lg:text-[18px] max-lg:leading-[25px] max-sm:text-[16px] max-sm:leading-[20px] max-md:text-center`}
          onClick={() => setActive(el)}
        >
          {el}
        </span>
      ))}
    </div>
  )
}

export default SortByCategoryContainer
