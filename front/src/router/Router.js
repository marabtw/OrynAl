import { Route, Routes, useNavigate } from "react-router-dom"
import { ROUTERS } from "./Router.config"

import Home from "@modules/Home"
import Profile from "@modules/Profile"
import Authorization from "@modules/Authorization"
import Management from "@modules/Management"
import Restaurants from "@modules/Restaurants"
import RestaurantTable from "@modules/Tables"
import RestaurantMenu from "@modules/Menu"
import Order from "@modules/Order"
import { useContext, useEffect } from "react"
import { AuthContext } from "@context/AuthContext"
import { removeWildcard } from "@helpers/helpers"

const Router = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("isFirstVisit") === null

    if (isFirstVisit) {
      localStorage.setItem("isFirstVisit", "false")
      navigate(getInitialRoute(user.role))
    }
  }, [user])

  const getInitialRoute = (role) => {
    if (role === "admin") {
      return `${removeWildcard(ROUTERS.Management.root)}${
        ROUTERS.Management.allRestaurants
      }`
    } else if (role === "owner") {
      return `${removeWildcard(ROUTERS.Restaurant.root)}${
        ROUTERS.Restaurant.myRestaurants
      }`
    } else {
      return ROUTERS.Home
    }
  }

  return (
    <Routes>
      <Route path={ROUTERS.Home} element={<Home />} />
      <Route path={ROUTERS.Profile.root} element={<Profile />} />
      <Route path={ROUTERS.Authorization.root} element={<Authorization />} />
      <Route path={ROUTERS.Management.root} element={<Management />} />
      <Route path={ROUTERS.Restaurant.root} element={<Restaurants />} />
      <Route
        path={ROUTERS.RestaurantTable.root}
        element={<RestaurantTable />}
      />
      <Route path={ROUTERS.RestaurantMenu.root} element={<RestaurantMenu />} />
      <Route path={ROUTERS.Orders.root} element={<Order />} />
      <Route
        path="*"
        element={
          <h2 className="flex justify-center items-center">Ресурс не найден</h2>
        }
      />
    </Routes>
  )
}

export default Router
