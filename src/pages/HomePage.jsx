import React from "react"
import HeroSection from "../moduls/HeroSection/HeroSection"
import HomeRestaurants from "../moduls/HomeRestaurants/HomeRestaurants"
import Footer from "../moduls/Footer/Footer"
import ShowLocation from "../components/ShowLocation/ShowLocation"

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <ShowLocation text="Алматы"/>
      <div className="mx-[50px] bg-white">
        <HeroSection />
        <HomeRestaurants />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
