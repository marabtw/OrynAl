import { dataFoodCategories } from "../../../../../../data/bookingData"

const FoodCategories = () => {
  return (
    <div className="w-full overflow-auto font-poppins">
      <div className="flex gap-[10px]">
        {dataFoodCategories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col justify-center items-center gap-[10px] w-[181px] h-[193px] border border-[#c4c4c4] rounded-[20px] shadow-[0px_4px_12px_-2px_rgba(0,0,0,.2)"
          >
            <div className={`flex justify-center items-center w-[100px] aspect-square rounded-full overflow-hidden ${!category.image && "bg-green-400"}`}>
              <img
                src={category.image}
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <h4 className="text-[16px] font-[800] leading-[24px]">
              {category.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodCategories
