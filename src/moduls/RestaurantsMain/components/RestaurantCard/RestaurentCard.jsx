import React, { useState } from "react"
import { HeartFullIcon, HeartEmptyIcon } from "../../../../ui/icons/icons"
import LinkButton from "../../../../ui/LInkButton/LinkButton"
import ShowRating from "../../../../components/ShowRating/ShowRating"

const RestaurentCard = ({data}) => {
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
        <img src={data.image} alt="restaurant" className="w-full" />
      </div>
      <h2 className="text-[40px] leading-[60px] font-[600]">{data.name}</h2>
      <div className="">
        <ShowRating fontSize={"32px"} rate={data.rate}/>
      </div>
      <p className="w-[204px] text-center text-[17px] leading-[25.5px]">
        {data.categories}
      </p>
      <p className="w-[204px] text-center text-[17px] leading-[25.5px]">
			{data.address}
      </p>
      <LinkButton text={"забронировать столик"} uppercase={true} id={data.id}/>
    </div>
  )
}

export default RestaurentCard
