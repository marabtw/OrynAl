package service

import (
	"context"
	"github.com/alibekabdrakhman1/orynal/internal/model"
	"time"
)

type IAuthService interface {
	Login(ctx context.Context, login model.Login) (*model.JwtTokens, error)
	Register(ctx context.Context, user model.Register) (uint, error)
	RefreshToken(ctx context.Context, refreshToken string) (*model.JwtTokens, error)
	GetJwtUserID(jwtToken string) (*model.ContextUserID, error)
	GetJwtUserRole(jwtToken string) (*model.ContextUserRole, error)
}

type IUserService interface {
	Create(ctx context.Context, user *model.User) (*model.UserResponse, error)
	CreateOwner(ctx context.Context, user *model.User) (*model.UserResponse, error)
	Update(ctx context.Context, user *model.User) (*model.UserResponse, error)
	Delete(ctx context.Context, id uint) error
	Profile(ctx context.Context) (*model.UserResponse, error)
	GetByID(ctx context.Context, id uint) (*model.UserResponse, error)
	GetAllClients(ctx context.Context) ([]model.UserResponse, error)
	GetAllOwners(ctx context.Context) ([]model.UserResponse, error)
}

type IRestaurantService interface {
	GetRestaurants(ctx context.Context) ([]model.Restaurant, error)
	GetRestaurantByID(ctx context.Context, id uint) (*model.Restaurant, error)
	CreateRestaurant(ctx context.Context, restaurant *model.Restaurant) (*model.Restaurant, error)
	UpdateRestaurant(ctx context.Context, restaurant *model.Restaurant, id uint) (*model.Restaurant, error)
	DeleteRestaurant(ctx context.Context, id uint) error
	FavoriteRestaurant(ctx context.Context, id uint) (*model.Restaurant, error)
	GetRestaurantOrders(ctx context.Context, id uint) ([]model.Order, error)
}

type IOrderService interface {
	Create(ctx context.Context, order *model.Order) (*model.Order, error)
	Update(ctx context.Context, id uint, order *model.Order) (*model.Order, error)
	Delete(ctx context.Context, id uint) error
	GetByID(ctx context.Context, id uint) (*model.Order, error)
	GetAllOrders(ctx context.Context) ([]model.Order, error)
}

type IMenuService interface {
	GetRestaurantMenu(ctx context.Context, restaurantID uint, foodType string) ([]model.Food, error)
	GetRestaurantFood(ctx context.Context, restaurantID, foodID uint) (*model.Food, error)
	CreateRestaurantFood(ctx context.Context, restaurantID uint, food *model.Food) (*model.Food, error)
	UpdateRestaurantFood(ctx context.Context, restaurantID uint, food *model.Food) (*model.Food, error)
	DeleteRestaurantFood(ctx context.Context, restaurantID, foodID uint) error
}

type ITableService interface {
	GetRestaurantTables(ctx context.Context, restaurantID uint) ([]model.Table, error)
	GetRestaurantTable(ctx context.Context, restaurantID uint, tableID uint) (*model.Table, error)
	CreateRestaurantTable(ctx context.Context, restaurantID uint, table *model.Table) (*model.Table, error)
	UpdateRestaurantTable(ctx context.Context, restaurantID uint, table *model.Table) (*model.Table, error)
	DeleteRestaurantTable(ctx context.Context, restaurantID uint, tableID uint) error
	GetAvailableTime(ctx context.Context, restaurantID uint, tableID uint, date time.Time) ([]time.Time, error)
}
