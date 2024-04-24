import { Route, Routes } from "react-router-dom"
import { ROUTERS } from "./Router.config"

//main
import Home from "../../pages/HomePage"
import LoginPage from "../../pages/LoginPage"
import MyProfilePage from "../../pages/MyProfilePage"

//universal
import OrdersHistoryPage from "../../pages/OrdersHistoryPage"
import OrderDetailsPage from "../../pages/OrderDetailsPage"

//user
import CreateOrderPage from "../../pages/CreateOrderPage"

//owner
import MyRestaurantsPage from "../../pages/MyRestaurantsPage"
import MyRestaurantTablesPage from "../../pages/MyRestaurantTablesPage"
import MyRestaurantMenusPage from "../../pages/MyRestaurantMenusPage"

import CreateTablePage from "../../pages/CreateTablePage"
import CreateMenuPage from "../../pages/CreateMenuPage"

import UpdateRestaurantPage from "../../pages/UpdateRestaurantPage"
import UpdateTablePage from "../../pages/UpdateTablePage"
import UpdateMenuPage from "../../pages/UpdateMenuPage"

//admin
import RestaurantsPage from "../../pages/RestaurantsPage"
import OwnersPage from "../../pages/OwnersPage"
import ClientsPage from "../../pages/ClientsPage"

import CreateRestaurantPage from "../../pages/CreateRestaurantPage"
import CreateOwnerPage from "../../pages/CreateOwnerPage"

const Router = () => {
  return (
    <Routes>
      {/* main */}
      <Route path={ROUTERS.Home} element={<Home />} />
      <Route path={ROUTERS.MyProfile} element={<MyProfilePage />} />
      <Route path={ROUTERS.Login} element={<LoginPage />} />

      {/* universal */}
      <Route path={ROUTERS.OrderHistory} element={<OrdersHistoryPage />} />
      <Route path={ROUTERS.OrderDetails} element={<OrderDetailsPage />} />

      {/* user */}
      <Route path={ROUTERS.CreateOrder} element={<CreateOrderPage />} />

      {/* owner */}
      <Route path={ROUTERS.MyRestaurants} element={<MyRestaurantsPage />} />
      <Route
        path={ROUTERS.MyRestaurantsTables}
        element={<MyRestaurantTablesPage />}
      />
      <Route
        path={ROUTERS.MyRestaurantsMenus}
        element={<MyRestaurantMenusPage />}
      />
      <Route path={ROUTERS.CreateMenu} element={<CreateMenuPage />} />
      <Route path={ROUTERS.CreateTable} element={<CreateTablePage />} />

      <Route
        path={ROUTERS.UpdateRestaurant}
        element={<UpdateRestaurantPage />}
      />
      <Route path={ROUTERS.UpdateTable} element={<UpdateTablePage />} />
      <Route path={ROUTERS.UpdateMenu} element={<UpdateMenuPage />} />

      {/* admin */}
      <Route path={ROUTERS.Owners} element={<OwnersPage />} />
      <Route path={ROUTERS.Clients} element={<ClientsPage />} />
      <Route path={ROUTERS.Restaurants} element={<RestaurantsPage />} />

      <Route
        path={ROUTERS.UpdateRestaurantByAdmin}
        element={<UpdateRestaurantPage />}
      />
      <Route path={ROUTERS.CreateOwner} element={<CreateOwnerPage />} />
      <Route
        path={ROUTERS.CreateRestaurant}
        element={<CreateRestaurantPage />}
      />
    </Routes>
  )
}

export default Router
