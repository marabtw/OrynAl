package controller

import (
	"github.com/labstack/echo/v4"
)

func (s *Server) SetupRoutes() {
	v1 := s.App.Group("/api")
	s.setupAuthRoutes(v1)
	s.setupAdminRoutes(v1)
	s.setupOrderRoutes(v1)
	s.setupRestaurantRoutes(v1)
	s.setupProfileRoutes(v1)
}

func (s *Server) setupAuthRoutes(g *echo.Group) {
	auth := g.Group("/auth")
	auth.POST("/login", s.handler.User.SignIn)
	auth.POST("/register", s.handler.User.SignUp)
	auth.POST("/refresh-token", s.handler.User.RefreshToken)
}

func (s *Server) setupProfileRoutes(g *echo.Group) {
	auth := g.Group("/profile", s.jwt.ValidateAuth)
	auth.GET("", s.handler.User.Profile)
	auth.PUT("", s.handler.User.UpdateProfile)
	auth.DELETE("", s.handler.User.DeleteProfile)
}

func (s *Server) setupAdminRoutes(g *echo.Group) {
	admin := g.Group("/admin")
	admin.Use(s.jwt.ValidateAuth)
	admin.Use(s.jwt.ValidateAdmin)
	admin.GET("/owners", s.handler.Admin.GetOwners)
	admin.DELETE("/owners/:id", s.handler.Admin.DeleteOwner)
	admin.POST("/owners", s.handler.Admin.CreateOwner)
	admin.GET("/restaurants", s.handler.Admin.GetRestaurants)
	admin.POST("/restaurants", s.handler.Admin.CreateRestaurant)
	admin.PUT("/restaurants/:id", s.handler.Admin.UpdateRestaurant)
	admin.DELETE("/restaurants/:id", s.handler.Admin.DeleteRestaurant)
	admin.GET("/restaurants/:id", s.handler.Admin.GetRestaurant)
	admin.GET("/clients", s.handler.Admin.GetClients)
	admin.DELETE("/clients/:id", s.handler.Admin.DeleteClient)
}

func (s *Server) setupOrderRoutes(g *echo.Group) {
	order := g.Group("/orders")
	order.Use(s.jwt.ValidateAuth)
	order.POST("/create", s.handler.Order.CreateOrder)
	order.DELETE("/:id", s.handler.Order.DeleteOrder)
	order.PUT("/:id", s.handler.Order.UpdateOrder)
	order.GET("/:id", s.handler.Order.GetOrder)
	order.GET("", s.handler.Order.GetAllOrders)
}

func (s *Server) setupRestaurantRoutes(g *echo.Group) {
	restaurant := g.Group("/restaurants")
	restaurant.Use(s.jwt.ValidateAuth)
	restaurant.GET("", s.handler.Restaurant.GetRestaurants)
	restaurant.GET("/:id", s.handler.Restaurant.GetRestaurantByID)
	restaurant.GET("/:id/orders", s.handler.Restaurant.GetRestaurantByID, s.jwt.ValidateOwner)
	//restaurant.GET("/favorite", s.handler.Restaurant.FavoriteRestaurants)

	s.setupMenuRoutes(restaurant)
	s.setupTableRoutes(restaurant)
}

func (s *Server) setupMenuRoutes(g *echo.Group) {
	menu := g.Group("/:id/menu")
	menu.GET("", s.handler.Menu.GetRestaurantMenu)
	menu.GET("/:food_id", s.handler.Menu.GetRestaurantFood)
	menu.POST("", s.handler.Menu.CreateRestaurantFood, s.jwt.ValidateOwner)
	menu.PUT("/:food_id", s.handler.Menu.UpdateRestaurantFood, s.jwt.ValidateOwner)
	menu.DELETE("/:food_id", s.handler.Menu.DeleteRestaurantFood, s.jwt.ValidateOwner)
}

func (s *Server) setupTableRoutes(g *echo.Group) {
	tables := g.Group("/:id/tables")
	tables.GET("", s.handler.Table.GetRestaurantTables)
	tables.GET("/:table_id", s.handler.Table.GetRestaurantTable)
	tables.POST("", s.handler.Table.CreateRestaurantTable, s.jwt.ValidateOwner)
	tables.PUT("/:table_id", s.handler.Table.UpdateRestaurantTable, s.jwt.ValidateOwner)
	tables.DELETE("/:table_id", s.handler.Table.DeleteRestaurantTable, s.jwt.ValidateOwner)
}
