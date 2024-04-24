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
	GetAllClients(ctx context.Context) ([]model.UserResponse, error)
	GetAllOwners(ctx context.Context) ([]model.UserResponse, error)
}

type IRestaurantRepository interface {
	GetRestaurants(ctx context.Context) ([]model.Restaurant, error)
	GetRestaurantByID(ctx context.Context, id uint) (*model.Restaurant, error)
	GetRestaurantByOwner(ctx context.Context, ownerID uint) (*model.Restaurant, error)
	GetFavoriteRestaurants(ctx context.Context, userID uint) ([]model.Restaurant, error)
	CreateRestaurant(ctx context.Context, restaurant *model.Restaurant) (*model.Restaurant, error)
	CreateRestaurantPhotos(ctx context.Context, restaurant *model.RestaurantPhoto) error
	DeleteRestaurant(ctx context.Context, restaurantID uint) error
	UpdateRestaurant(ctx context.Context, restaurantID uint, restaurant *model.Restaurant) (*model.Restaurant, error)
}

type ITableRepository interface {
	GetRestaurantTables(ctx context.Context, restaurantID uint) ([]model.Table, error)
	GetRestaurantTable(ctx context.Context, restaurantID uint, tableID uint) (*model.Table, error)
	CreateTable(ctx context.Context, table *model.Table) (*model.Table, error)
	UpdateTable(ctx context.Context, table *model.Table) (*model.Table, error)
	DeleteTable(ctx context.Context, id uint) error
	GetAvailableTime(ctx context.Context, date time.Time) ([]time.Time, error)
}

type IFoodRepository interface {
	GetRestaurantMenu(ctx context.Context, restaurantID uint, foodType string) ([]model.Food, error)
	GetRestaurantFood(ctx context.Context, restaurantID uint, foodID uint) (*model.Food, error)
	CreateRestaurantFood(ctx context.Context, food *model.Food) (*model.Food, error)
	UpdateRestaurantFood(ctx context.Context, food *model.Food) (*model.Food, error)
	DeleteRestaurantFood(ctx context.Context, foodID uint) error
}

type IOrderRepository interface {
	CreateOrder(ctx context.Context, order *model.Order) (*model.Order, error)
	DeleteOrder(ctx context.Context, id uint) error
	UpdateOrder(ctx context.Context, order *model.Order) (*model.Order, error)
	GetOrder(ctx context.Context, userID uint, id uint) (*model.Order, error)
	GetAllOrders(ctx context.Context, userID uint) ([]model.Order, error)
	GetRestaurantOrders(ctx context.Context, restaurantID uint) ([]model.Order, error)
}
