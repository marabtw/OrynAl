import React, { useState } from "react"

const Sort = () => {
  const [active, setActive] = useState("Сортировать в этом разделе")
  const [sort, setSort] = useState([
    "Сортировать в этом разделе",
    "Избранное",
    "Тип Заведения",
    "Кухня",
    "Особенности",
    "По расстоянию от меня",
  ])

  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-[65px]">
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

export default Sort
