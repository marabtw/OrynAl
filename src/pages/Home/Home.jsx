import React from "react"
import HeroSection from "../../moduls/HeroSection/HeroSection"
import RestaurantsHome from "../../moduls/RestaurantsHome/RestaurantsHome"
import Footer from "../../moduls/Footer/Footer"
import ShowLocation from "../../components/ShowLocation/ShowLocation"

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <ShowLocation text="Алматы"/>
      <div className="mx-[50px] bg-white">
        <HeroSection />
        <RestaurantsHome />
      </div>
      <Footer />
    </div>
  )
}

export default Home
