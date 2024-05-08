package repository

import (
	"context"
	"github.com/alibekabdrakhman1/orynal/internal/model"
	"time"
)

type IUserTokenRepository interface {
	CreateUserToken(ctx context.Context, userToken model.UserToken) error
	UpdateUserToken(ctx context.Context, userToken model.UserToken) error
}

type IUserRepository interface {
	Create(ctx context.Context, user *model.User) (*model.UserResponse, error)
	Update(ctx context.Context, user *model.User) (*model.UserResponse, error)
	Delete(ctx context.Context, id uint) error
	GetByID(ctx context.Context, id uint) (*model.UserResponse, error)
	GetByEmail(ctx context.Context, email string) (*model.User, error)
	GetAllClients(ctx context.Context, params *model.Params) (*model.ListResponse, error)
	GetAllOwners(ctx context.Context, params *model.Params) (*model.ListResponse, error)
}

type IRestaurantRepository interface {
	GetRestaurants(ctx context.Context, params *model.Params) (*model.ListResponse, error)
	GetRestaurantByID(ctx context.Context, id uint) (*model.RestaurantResponse, error)
	GetRestaurantsByOwner(ctx context.Context, ownerID uint, params *model.Params) (*model.ListResponse, error)
	GetFavoriteRestaurants(ctx context.Context, userID uint, params *model.Params) (*model.ListResponse, error)
	CreateRestaurant(ctx context.Context, restaurant *model.Restaurant) (*model.RestaurantResponse, error)
	CreateRestaurantPhotos(ctx context.Context, restaurant *model.RestaurantPhoto) error
	DeleteRestaurant(ctx context.Context, restaurantID uint) error
	UpdateRestaurant(ctx context.Context, restaurantID uint, restaurant *model.Restaurant) (*model.RestaurantResponse, error)
}

type ITableRepository interface {
	GetRestaurantTables(ctx context.Context, restaurantID uint, params *model.Params) (*model.ListResponse, error)
	GetRestaurantTable(ctx context.Context, restaurantID uint, tableID uint) (*model.Table, error)
	CreateTable(ctx context.Context, table *model.Table) (*model.Table, error)
	UpdateTable(ctx context.Context, table *model.Table) (*model.Table, error)
	DeleteTable(ctx context.Context, id uint) error
	GetAvailableTime(ctx context.Context, date time.Time) ([]time.Time, error)
}

type IFoodRepository interface {
	GetRestaurantMenu(ctx context.Context, restaurantID uint) (map[string][]model.Food, error)
	GetRestaurantFood(ctx context.Context, restaurantID uint, foodID uint) (*model.Food, error)
	CreateRestaurantFood(ctx context.Context, food *model.Food) (*model.Food, error)
	UpdateRestaurantFood(ctx context.Context, food *model.Food) (*model.Food, error)
	DeleteRestaurantFood(ctx context.Context, foodID uint) error
}

type IOrderRepository interface {
	CreateOrder(ctx context.Context, order *model.Order) (*model.OrderResponse, error)
	DeleteOrder(ctx context.Context, id uint) error
	UpdateOrder(ctx context.Context, order *model.Order) (*model.OrderResponse, error)
	GetOrder(ctx context.Context, userID uint, id uint) (*model.OrderResponse, error)
	GetAllOrders(ctx context.Context, userID uint, params *model.Params) (*model.ListResponse, error)
	GetRestaurantOrders(ctx context.Context, restaurantID uint, params *model.Params) (*model.ListResponse, error)
}
