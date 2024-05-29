import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Navigation } from "swiper/modules"

const Slider = ({ images = [] }) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={false}
        pagination={false}
        navigation={false}
        modules={[Navigation]}
        className="h-[300px]"
      >
        {images.length > 0
          ? images.map((image) => (
              <SwiperSlide className="min-w-[300px] aspect-square border">
                <img
                  src={image.route}
                  alt={image.route}
                  className="w-full rounded-xl"
                />
              </SwiperSlide>
            ))
          : [1, 2, 3].map(() => (
              <SwiperSlide className=" min-w-[300px] aspect-square border rounded-xl bg-slate-100"></SwiperSlide>
            ))}
      </Swiper>
    </>
  )
}

export default Slider
