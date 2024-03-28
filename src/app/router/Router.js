import { Route, Routes } from "react-router-dom"

import { ROUTERS } from "./Router.config"

import Home from "../../pages/HomePage"
import CreateOrderPage from "../../pages/CreateOrderPage"
import OrderHistory from "../../pages/OrdersHistoryPage"
import OrderDetailsPage from "../../pages/OrderDetailsPage"
import MyRestaurants from "../../pages/MyRestaurantsPage"
import MyRestaurantTables from "../../pages/MyRestaurantTablesPage"
import MyRestaurantMenus from "../../pages/MyRestaurantMenusPage"

import MyProfilePage from "../../pages/MyProfilePage"
import LoginPage from "../../pages/LoginPage"

import UpdateRestaurant from "../../pages/UpdateRestaurantPage"
import UpdateTable from "../../pages/UpdateTablePage"
import UpdateMenu from "../../pages/UpdateMenuPage"

import CreateRestaurant from "../../pages/CreateRestaurantPage"
import CreateOwner from "../../pages/CreateOwnerPage"
import CreateTable from "../../pages/CreateTablePage"
import CreateMenu from "../../pages/CreateMenuPage"

import RestaurantsPage from "../../pages/RestaurantsPage"
import Owners from "../../pages/OwnersPage"
import Clients from "../../pages/ClientsPage"

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTERS.Home} element={<Home />} />
      <Route path={ROUTERS.UserCreateOrder} element={<CreateOrderPage />} />
      <Route path={ROUTERS.OrderHistory} element={<OrderHistory />} />
      <Route path={ROUTERS.MyOrderPage} element={<OrderDetailsPage />} />
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
      <Route path={ROUTERS.MyProfile} element={<MyProfilePage />} />
      <Route path={ROUTERS.Login} element={<LoginPage />} />
      <Route path={ROUTERS.OwnerRestaurants} element={<RestaurantsPage />} />
      <Route path={ROUTERS.Owners} element={<Owners />} />
      <Route path={ROUTERS.Clients} element={<Clients />} />
      <Route path={ROUTERS.CreateRestaurant} element={<CreateRestaurant />} />
      <Route path={ROUTERS.CreateOwner} element={<CreateOwner />} />
    </Routes>
  )
}

export default Router
