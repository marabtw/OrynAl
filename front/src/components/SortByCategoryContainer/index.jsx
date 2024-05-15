import { useState } from "react"

const SortByCategoryContainer = ({ sortList, className }) => {
  const [active, setActive] = useState("Сортировать в этом разделе")
  const [sort, setSort] = useState(sortList)

  return (
    <div className={`w-full flex justify-center ${className} `}>
      <div className="flex justify-between flex-wrap w-full">
        {sort.map((el) => (
          <span
            key={el}
            className={`h-[50px] flex items-center px-[10px] cursor-pointer text-[20px] ${
              el === active && "text-white bg-[#6AA7FC]"
            } rounded-[10px] transition-all duration-150`}
            onClick={() => setActive(el)}
          >
            {el}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SortByCategoryContainer