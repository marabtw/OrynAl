import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "@styles/swiperSlider.css"

import { Navigation } from "swiper/modules"

const RestaurantImagesSlider = ({ images }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={false}
        navigation={false}
        className=""
      >
        {images
          ? images.map((image, index) => (
              <SwiperSlide key={image}>
                <img src={image} alt="" />
              </SwiperSlide>
            ))
          : [1, 2, 3].map((i) => (
              <SwiperSlide key={i}>
                <div className="h-[120px] border-2 box-border rounded-xl"></div>
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  )
}

export default RestaurantImagesSlider
