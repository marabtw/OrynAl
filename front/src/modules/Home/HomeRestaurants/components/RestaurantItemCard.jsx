import { useState } from "react"
import LinkButton from "@ui/Button/LinkButton"
import RatingStars from "@components/RatingStars/RatingStars"
import { HeartFullIcon, HeartEmptyIcon } from "@/ui/icons/icons"
import { ROUTERS } from "@router/Router.config"
import { removeWildcard } from "@helpers/helpers"

const RestaurantItemCard = ({ data }) => {
  const [favorive, setFavorite] = useState(false)

  return (
    <div className="relative flex flex-col items-center gap-[10px] min-h-[600px] py-[30px] border-[#e2e2e2] border-2 rounded-md shadow-[0px_0px_5px_-1px_#e2e2e2]">
      {favorive ? (
        <HeartFullIcon
          className="absolute top-[30px] right-[30px] text-[49px] cursor-pointer hover:fill-orange-600"
          onClick={() => setFavorite(!favorive)}
        />
      ) : (
        <HeartEmptyIcon
          className="absolute top-[30px] right-[30px] text-[49px] cursor-pointer hover:fill-orange-600"
          onClick={() => setFavorite(!favorive)}
        />
      )}
      <div className="rounded-full overflow-hidden w-[65%]">
        {data.image ? (
          <img src={data.image} alt="restaurant" className="w-full" />
        ) : (
          <div className="w-full aspect-square rounded-full border bg-slate-100"></div>
        )}
      </div>
      <h2 className="text-[40px] leading-[60px] font-[600]">{data.name}</h2>
      <div className="">
        <RatingStars fontSize={"32px"} rate={data.rate} />
      </div>
      <p className="w-[204px] text-center text-[17px] leading-[25.5px]">
        {data.categories}
      </p>
      <p className="w-[204px] text-center text-[17px] leading-[25.5px]">
        {data.address}
      </p>
      <LinkButton
        to={`${removeWildcard(ROUTERS.Orders.root)}${
          ROUTERS.Orders.createOrder
        }`}
        text={"забронировать столик"}
        uppercase={true}
        id={data.id}
      />
    </div>
  )
}

export default RestaurantItemCard
