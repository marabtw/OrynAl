export const ROUTERS = {
  //main
  Home: "/",
  MyProfile: "/my-profile",
  Login: "/login",

  //universal
  OrderHistory: "/order-history",
  OrderDetails: "/order-history/:order-id",
	
  //user
  CreateOrder: "/create-order/:id",
	
  //owner
  MyRestaurants: "/my-restaurants/:restaurant-id",
  MyRestaurantsTables: "/my-restaurants/tables",
  MyRestaurantsMenus: "/my-restaurants/menus",
	
  CreateTable: "/my-restaurants/tables/create",
  CreateMenu: "/my-restaurants/menus/create",
	
  UpdateRestaurant: "/my-restaurants/:restaurant-id",
  UpdateTable: "/my-restaurants/tables/:id",
  UpdateMenu: "/my-restaurants/menus/:id",

  //admin
  Owners: "/owners",
  Restaurants: "/restaurants",
  Clients: "/clients",

  CreateOwner: "/my-restaurants/owners/create",
  CreateRestaurant: "/my-restaurants/create",
}
