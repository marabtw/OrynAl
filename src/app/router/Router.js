import { Route, Routes } from "react-router-dom"

import { ROUTERS } from "./Router.config"

import Home from "../../pages/Home/Home"
import Restaurant from "../../pages/Restaurant/Restaurant"
import OrderHistory from "../../pages/OrderHistory/OrderHistory"
import MyOrderPage from "../../pages/MyOrderPage/MyOrderPage"
import MyRestaurants from "../../pages/MyRestaurants/MyRestaurants"
import MyRestaurantTables from "../../pages/MyRestaurantTables/MyRestaurantTables"
import MyRestaurantMenus from "../../pages/MyRestaurantMenus/MyRestaurantMenus"

import MyProfile from "../../pages/MyProfile/MyProfile"
import Login from "../../pages/Login/Login"

import UpdateRestaurant from "../../pages/UpdateRestaurant/UpdateRestaurant"
import UpdateTable from "../../pages/UpdateTable/UpdateTable"
import UpdateMenu from "../../pages/UpdateMenu/UpdateMenu"

import CreateRestaurant from "../../pages/CreateRestaurant/CreateRestaurant"
import CreateOwner from "../../pages/CreateOwner/CreateOwner"
import CreateTable from "../../pages/CreateTable/CreateTable"
import CreateMenu from "../../pages/CreateMenu/CreateMenu"

import OwnerRestaurants from "../../pages/OwnerRestaurants/OwnerRestaurants"
import Owners from "../../pages/Owners/Owners"
import Clients from "../../pages/Clients/Clients"

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTERS.Home} element={<Home />} />
      <Route path={ROUTERS.Restaurant} element={<Restaurant />} />
      <Route path={ROUTERS.OrderHistory} element={<OrderHistory />} />
      <Route path={ROUTERS.MyOrderPage} element={<MyOrderPage />} />
      <Route path={ROUTERS.MyRestaurants} element={<MyRestaurants />} />
      <Route
        path={ROUTERS.MyRestaurantsTables}
        element={<MyRestaurantTables />}
      />
      <Route
        path={ROUTERS.MyRestaurantsMenus}
        element={<MyRestaurantMenus />}
      />
      <Route path={ROUTERS.UpdateRestaurant} element={<UpdateRestaurant />} />
      <Route path={ROUTERS.UpdateTable} element={<UpdateTable />} />
      <Route path={ROUTERS.UpdateMenu} element={<UpdateMenu />} />
      <Route path={ROUTERS.CreateMenu} element={<CreateMenu />} />
      <Route path={ROUTERS.CreateTable} element={<CreateTable />} />
      <Route path={ROUTERS.MyProfile} element={<MyProfile />} />
      <Route path={ROUTERS.Login} element={<Login />} />
      <Route path={ROUTERS.OwnerRestaurants} element={<OwnerRestaurants />} />
      <Route path={ROUTERS.Owners} element={<Owners />} />
      <Route path={ROUTERS.Clients} element={<Clients />} />
      <Route path={ROUTERS.CreateRestaurant} element={<CreateRestaurant />} />
      <Route path={ROUTERS.CreateOwner} element={<CreateOwner />} />
    </Routes>
  )
}

export default Router
