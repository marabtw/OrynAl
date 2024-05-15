import HeroSection from "../HeroSection"
import HomeRestaurants from "../HomeRestaurants"
import Footer from "../Footer"

import LocationInfo from "@components/LocationInfo"

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <LocationInfo text="Алматы" />
      <div className="mx-[50px] bg-white max-xl:mx-[20px] max-md:mx-0">
        <HeroSection />
        <HomeRestaurants />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
