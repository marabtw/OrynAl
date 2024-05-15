
const FoodCategories = ({ categories, selectCategory }) => {
  const getImageByCategory = () => {
    return ""
  }
  return (
    <div className="font-poppins">
      <div className="flex gap-[10px]">
        {categories?.map((category) => (
          <div
            key={category}
            className="flex flex-col justify-center items-center gap-[10px] min-w-[181px] h-[193px] border border-[#c4c4c4] rounded-[20px] cursor-pointer
						shadow-[0px_4px_12px_-2px_rgba(0,0,0,.2) hover:border-[#8ab8ff]"
            onClick={() => selectCategory(category)}
          >
            <div
              className={`flex justify-center items-center w-[100px] aspect-square rounded-full overflow-hidden ${
                !getImageByCategory(category) && "bg-green-400"
              }`}
            >
              <img
                src={getImageByCategory(category)}
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <h4 className="text-[16px] font-[800] leading-[24px]">
              {category}
            </h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodCategories
