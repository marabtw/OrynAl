import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Pagination, Navigation } from "swiper/modules"

const Slider = ({ images = [] }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
				className="h-[200px]"
      >
        {images.length > 0
          ? images.map((image) => <SwiperSlide className="h-full border rounded-xl "><img src={image}/></SwiperSlide>)
          : [1, 2, 3].map(() => <SwiperSlide className="h-full border rounded-xl bg-slate-100"></SwiperSlide>)}
      </Swiper>
    </>
    // <div className="h-[286px] w-full overflow-hidden">
    //   <div className="flex gap-[30px] w-[878px] overflow-hidden">
    //     {images?.map((image) => (
    //       <img key={image + Math.random()} src={image} className="min-w-[30%] w-[30%] min-h-[286px] overflow-hidden rounded-[20px]" />
    //     ))}
    //   </div>
    // </div>
  )
}

export default Slider
