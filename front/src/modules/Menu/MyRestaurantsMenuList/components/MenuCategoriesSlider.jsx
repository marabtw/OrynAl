import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "@styles/swiperSlider.css"

import { Navigation } from "swiper/modules"

const MenuCategoriesSlider = ({
  menuTypes = [],
  getCategory = () => {},
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Swiper
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={30}
        pagination={false}
        navigation={false}
        loop={false}
        className="h-[40px]"
      >
        {menuTypes?.length > 0 &&
          menuTypes?.map((category, index) => (
            <SwiperSlide
              key={category}
              onClick={() => {
                setActiveIndex(index)
                getCategory(category)
              }}
            >
              <div
                className={`flex justify-center items-center w-full h-full text-center text-[16px] font-semibold rounded-xl ${
                  index === activeIndex ? "bg-[#6aa7fc] text-white" : ""
                }`}
              >
                {category}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}

export default MenuCategoriesSlider
