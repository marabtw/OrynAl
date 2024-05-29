import { CircleAddIcon, TrashIcon } from "@ui/icons/icons"

const FoodCard = ({ foodData = {}, getFoodForCart, selectedFoodsId = [] }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-between w-full h-[362px] px-[30px] py-[40px] font-poppins transition-all duration-200 
		 border border-[#c4c4c4] shadow-[0px_4px_4px_rgba(0,0,0,.25)] rounded-[50px] hover:border-[#447bfb] min-w-[300px]"
    >
      <div className="absolute top-0 translate-y-[-50%] w-[150px] aspect-square rounded-full bg-slate-100 overflow-hidden">
        {foodData.photo && (
          <img
            src={foodData.photo.route}
            alt={foodData.name}
            className="w-full"
          />
        )}
      </div>
      <div
        className={`w-full relative before:w-[10px] before:aspect-square before:absolute before:right-0 before:top-[50%] before:translate-y-[-50%]
			 ${
         foodData.available ? "before:bg-[#c4c4c4]" : "before:bg-[#b91c1c]"
       } before:rounded-full`}
      ></div>
      <div className="w-[238px] flex flex-col items-center gap-[10px] text-center">
        <h3 className="text-[20px] font-[800] leading-[24px]">
          {foodData.name}
        </h3>
        <hr className="w-[193px] h-[2px] text-center" />
        <p className="text-[15px] leading-[24px]">{foodData.description}</p>
      </div>
      <div className="flex justify-between items-center w-full">
        {selectedFoodsId.includes(foodData.id) ? (
          <div
            className="flex justify-center items-center text-[24px] text-white w-[50px] aspect-square cursor-pointer bg-[#b91c1c] rounded-full hover:scale-105"
            onClick={() => {
              getFoodForCart({
                id: foodData.id,
              })
            }}
          >
            <TrashIcon />
          </div>
        ) : (
          <div
            className="flex justify-center items-center text-[24px] text-white w-[50px] aspect-square cursor-pointer bg-[#6AA7FC] rounded-full hover:scale-105"
            onClick={() => {
              getFoodForCart({
                id: foodData.id,
                amount: 1,
                image: foodData.image ? foodData.image : "",
                name: foodData.name,
                price: foodData.price,
                itemTotalPrice: foodData.price,
              })
            }}
          >
            <CircleAddIcon />
          </div>
        )}
        <h3 className="font-[600] text-[24px] leading-[24px]">
          {foodData.price} ₸
        </h3>
      </div>
    </div>
  )
}

export default FoodCard
