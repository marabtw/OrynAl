import { Route, Routes } from "react-router-dom"

import { ROUTERS } from "./Router.config"

import Home from "../../pages/Home/Home"
import Restaurant from "../../pages/Restaurant/Restaurant"

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTERS.Home} element={<Home />} />
      <Route path={ROUTERS.Restaurant} element={<Restaurant />} />
    </Routes>
  )
}

export default Router
