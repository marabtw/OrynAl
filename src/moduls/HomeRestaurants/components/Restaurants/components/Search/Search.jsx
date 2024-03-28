import React from "react"

const Search = () => {
  return (
    <label htmlFor="restaurantSearch" className="relative min-w-max">
      <input
        id="restaurantSearch"
        placeholder="Введите название Ресторана"
        className="w-[1200px] h-[90px] outline-none px-[20px] py-[20px] text-[20px] font-[500] leading-[90px] border-[5px] border-[#6AA7FC] text-[#447AFB] rounded-[20px]"
      />
      <button className="absolute right-[20px] top-1/2 translate-y-[-50%] px-[80px] py-[10px] text-white bg-[#6AA7FC] border-none rounded-[8px]">
        Найти
      </button>
    </label>
  )
}

export default Search
