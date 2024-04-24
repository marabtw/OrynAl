package repository

import (
	"github.com/alibekabdrakhman1/orynal/internal/repository/postgre"
	"gorm.io/gorm"
)

type Manager struct {
	User       IUserRepository
	UserToken  IUserTokenRepository
	Restaurant IRestaurantRepository
	Order      IOrderRepository
	Food       IFoodRepository
	Table      ITableRepository
}

func NewManager(db *gorm.DB) *Manager {
	return &Manager{
		User:       postgre.NewUserRepository(db),
		UserToken:  postgre.NewUserTokenRepository(db),
		Restaurant: postgre.NewRestaurantRepository(db),
		Order:      postgre.NewOrderRepository(db),
		Food:       postgre.NewFoodRepository(db),
		Table:      postgre.NewTableRepository(db),
	}
}
