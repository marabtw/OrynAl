import { useState } from "react"
import { Link } from "react-router-dom"
import { DotsHorizontalIcon } from "../../../../ui/icons/icons"
import ActionsContainer from "../../../../components/ActionsContainer/ActionsContainer"

const RestaurantCard = ({ data }) => {
  const [showActions, setShowActions] = useState(false)
  const [actions, setActions] = useState([
    {
      action: "Удалить",
      onClick: () => console.log("object"),
    },
    { action: "Изменить", to: `/my-restaurants/${data.id}` },
  ])

  return (
    <div className="relative flex flex-col w-[400px] h-[300px] p-[20px] font-poppins shadow-[0px_4px_4px_rgba(0,0,0,.25)] rounded-[20px] bg-white">
      <div className="absolute top-[30px] right-[20px] text-center">
        <DotsHorizontalIcon
          className="text-[26px] text-[#C4C4C4] cursor-pointer"
          onClick={() => setShowActions(!showActions)}
        />
        {showActions && (
          <ActionsContainer actions={actions} position={"top-full left-1/2"} />
        )}
      </div>
      <div className="flex gap-[20px]">
        <img
          src={data.image}
          alt=""
          className="w-[100px] h-[100px] rounded-[20px]"
        />
        <div className="mt-[10px]">
          <h3 className="text-[24px] font-[700] leading-[36px]">{data.name}</h3>
          <div className="flex gap-[10px] mt-[5px] text-[13px] leading-[19.5px] font-[700]">
            <Link
              to={"/my-restaurants/tables"}
              className="w-[80px] h-[20px]  text-center rounded-[5px] text-[#6AA7FC] bg-[#f2f1fa]"
            >
              Столик
            </Link>
            <Link
              to={"/my-restaurants/menus"}
              className="w-[80px] h-[20px]  text-center rounded-[5px] text-[#FF007A] bg-[#f2f1fa]"
            >
              Меню
            </Link>
          </div>
        </div>
      </div>
      <p className="font-[700] text-[13px] text-[#c4c4c4] leading-[19.5px]">
        {data.description}
      </p>
      <div className="flex justify-between mt-auto px-[20px] pt-[20px] border-t-2 border-black border-dashed">
        <div className="font-[700] text-[13px] leading-[19.5px]">
          <h4>{data.rate}/10</h4>
          <h4 className="text-[#A5A5A5]">Рейтинг</h4>
        </div>
        <div className="font-[700] text-[13px] leading-[19.5px]">
          <h4>{data.attendance}/день</h4>
          <h4 className="text-[#A5A5A5]">Посещаемость</h4>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
