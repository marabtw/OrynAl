import RestaurantItemCard from "./RestaurantItemCard"
import { Swiper, SwiperSlide } from "swiper/react"
import LinearGradientText from "@ui/LinearGradientText/LinearGradienText"

const PopularRestaurants = ({ restaurants, totalPage, setParams }) => {
  return (
    <div className="mt-[50px] py-[50px] flex flex-col gap-[80px] font-poppins max-md:gap-[20px] max-md:mt-[20px] max-lg:gap-[40px]">
      <div className="flex flex-col text-center gap-[30px] max-md:gap-[10px] max-xl:gap-[20px]">
        <LinearGradientText
          tag={"h2"}
          text={"Популярные заведения"}
          from={"#6AA7FC"}
          to={"#3D6FFB"}
          className="font-[600] text-[50px] leading-[60px] max-lg:text-[35px] max-lg:leading-[40px] max-sm:text-[25px] max-sm:leading-[30px]"
        />
        <p className="text-[20px] leading-[25px] max-lg:text-[18px] max-lg:leading-[22px] max-sm:text-[14px] max-sm:leading-[18px]">
          Посетители сайта часто бронирует здесь
        </p>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={false}
        pagination={false}
        navigation={false}
        className=""
      >
        {restaurants?.lenght > 0
          ? restaurants.map((restaurant) => (
              <SwiperSlide key={restaurant.id}>
                <RestaurantItemCard data={restaurant} />
              </SwiperSlide>
            ))
          : [1, 2, 3, 4, 5, 6].map((i) => (
              <SwiperSlide key={i}>
                <div className="w-[350px] aspect-[4/5] border-2 box-border rounded-xl max-xl:w-[250px] max-md:w-[200px] max-sm:w-[130px]"></div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}

export default PopularRestaurants
