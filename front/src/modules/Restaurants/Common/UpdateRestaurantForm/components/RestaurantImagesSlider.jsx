import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "@styles/swiperSlider.css"

const RestaurantImagesSlider = ({ images }) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={false}
        pagination={false}
        navigation={false}
        className=""
      >
        {images?.lenght > 0
          ? images.map((image, index) => (
              <SwiperSlide key={image}>
                <img src={image} alt="" />
              </SwiperSlide>
            ))
          : [1, 2, 3].map((i) => (
              <SwiperSlide key={i}>
                <div className="h-[180px] w-[180px] border-2 box-border rounded-xl"></div>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  )
}

export default RestaurantImagesSlider
