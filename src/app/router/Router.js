import { Route, Routes } from "react-router-dom"

import { ROUTERS } from "./Router.config"

import Home from "../../pages/HomePage"
import Restaurant from "../../pages/RestaurantPage"
import OrderHistory from "../../pages/OrdersHistoryPage"
import MyOrderPage from "../../pages/MyOrderPage"
import MyRestaurants from "../../pages/MyRestaurantsPage"
import MyRestaurantTables from "../../pages/MyRestaurantTablesPage"
import MyRestaurantMenus from "../../pages/MyRestaurantMenusPage"

import MyProfile from "../../pages/MyProfilePage"
import Login from "../../pages/LoginPage"

import UpdateRestaurant from "../../pages/UpdateRestaurantPage"
import UpdateTable from "../../pages/UpdateTablePage"
import UpdateMenu from "../../pages/UpdateMenuPage"

import CreateRestaurant from "../../pages/CreateRestaurantPage"
import CreateOwner from "../../pages/CreateOwnerPage"
import CreateTable from "../../pages/CreateTablePage"
import CreateMenu from "../../pages/CreateMenuPage"

import OwnerRestaurants from "../../pages/OwnerRestaurantsPage"
import Owners from "../../pages/OwnersPage"
import Clients from "../../pages/ClientsPage"

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
