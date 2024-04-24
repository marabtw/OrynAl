import { CircleAddIcon } from "../../../../../../ui/icons/icons"

const FoodCard = ({ salad }) => {
  return (
    <div className="relative flex flex-col items-center justify-between w-full h-[362px] px-[30px] py-[40px] font-poppins transition-all duration-200 border border-[#c4c4c4] shadow-[0px_4px_4px_rgba(0,0,0,.25)] rounded-[50px] hover:border-[5px] hover:border-[#447bfb]">
      <img
        src={salad.image}
        alt=""
        className="absolute top-0 translate-y-[-50%] w-[150px] aspect-square rounded-full"
      />
      <div className="w-full relative before:w-[10px] before:aspect-square before:absolute before:right-0 before:top-[50%] before:translate-y-[-50%] before:bg-[#c4c4c4] before:rounded-full"></div>
      <div className="w-[238px] flex flex-col items-center gap-[10px] text-center">
        <h3 className="text-[20px] font-[800] leading-[24px]">{salad.nameOfSalad}</h3>
				<hr className="w-[193px] h-[2px] text-center"/>
        <p className="text-[15px] leading-[24px]">{salad.description}</p>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center text-[24px] text-white w-[50px] aspect-square cursor-pointer bg-[#6AA7FC] rounded-full">
          <CircleAddIcon />
        </div>
        <h3 className="font-[600] text-[24px] leading-[24px]">{salad.cost} ₸</h3>
      </div>
    </div>
  )
}

export default FoodCard
