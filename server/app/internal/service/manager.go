package service

import (
	"github.com/alibekabdrakhman1/orynal/config"
	"github.com/alibekabdrakhman1/orynal/internal/repository"
	"github.com/alibekabdrakhman1/orynal/internal/service/services"
	"go.uber.org/zap"
)

type Manager struct {
	Auth       IAuthService
	User       IUserService
	Restaurant IRestaurantService
	Table      ITableService
	Menu       IMenuService
	Order      IOrderService
}

func NewManager(repository *repository.Manager, config *config.Config, logger *zap.SugaredLogger) *Manager {
	return &Manager{
		Auth:       services.NewAuthService(repository, config, logger),
		User:       services.NewUserService(repository, config, logger),
		Restaurant: services.NewRestaurantService(repository, config, logger),
		Table:      services.NewTableService(repository, config, logger),
		Menu:       services.NewMenuService(repository, config, logger),
		Order:      services.NewOrderService(repository, config, logger),
	}
}
