package services

import (
	"context"
	"errors"
	"fmt"
	"github.com/alibekabdrakhman1/orynal/config"
	"github.com/alibekabdrakhman1/orynal/internal/model"
	"github.com/alibekabdrakhman1/orynal/internal/repository"
	"github.com/alibekabdrakhman1/orynal/pkg/enums"
	"github.com/alibekabdrakhman1/orynal/pkg/utils"
	"go.uber.org/zap"
)

func NewRestaurantService(repository *repository.Manager, config *config.Config, logger *zap.SugaredLogger) *RestaurantService {
	return &RestaurantService{repository: repository, config: config, logger: logger}
}

type RestaurantService struct {
	repository *repository.Manager
	config     *config.Config
	logger     *zap.SugaredLogger
}

func (s *RestaurantService) GetRestaurants(ctx context.Context) ([]model.Restaurant, error) {
	return s.repository.Restaurant.GetRestaurants(ctx)
}

func (s *RestaurantService) GetRestaurantByID(ctx context.Context, id uint) (*model.Restaurant, error) {
	return s.repository.Restaurant.GetRestaurantByID(ctx, id)
}

func (s *RestaurantService) CreateRestaurant(ctx context.Context, restaurant *model.Restaurant) (*model.Restaurant, error) {
	role, err := utils.GetRoleFromContext(ctx)
	if err != nil {
		s.logger.Error(err)
		return nil, err
	}

	if role != enums.Admin {
		return nil, errors.New("permission denied")
	}

	owner, err := s.repository.User.GetByID(ctx, restaurant.OwnerID)
	if err != nil {
		s.logger.Error(err)
		return nil, err
	}

	if owner.Role != enums.Owner {
		return nil, errors.New("your owner id is incorrect")
	}

	return s.repository.Restaurant.CreateRestaurant(ctx, restaurant)
}

func (s *RestaurantService) UpdateRestaurant(ctx context.Context, restaurant *model.Restaurant, id uint) (*model.Restaurant, error) {
	role, err := utils.GetRoleFromContext(ctx)
	if err != nil {
		s.logger.Error(err)
		return nil, err
	}

	switch role {
	case enums.Admin:
		return s.repository.Restaurant.UpdateRestaurant(ctx, id, restaurant)
	case enums.Owner:
		if err := s.checkOwner(ctx, id); err != nil {
			return nil, err
		}
		return s.repository.Restaurant.UpdateRestaurant(ctx, id, restaurant)
	default:
		return nil, errors.New("permission denied")
	}
}

func (s *RestaurantService) DeleteRestaurant(ctx context.Context, id uint) error {
	role, err := utils.GetRoleFromContext(ctx)
	if err != nil {
		s.logger.Error(err)
		return err
	}

	switch role {
	case enums.Admin:
		return s.repository.Restaurant.DeleteRestaurant(ctx, id)
	case enums.Owner:
		if err := s.checkOwner(ctx, id); err != nil {
			return err
		}
		return s.repository.Restaurant.DeleteRestaurant(ctx, id)
	default:
		return errors.New("permission denied")
	}
}

func (s *RestaurantService) FavoriteRestaurant(ctx context.Context, id uint) (*model.Restaurant, error) {
	//TODO implement me
	panic("implement me")
}

func (s *RestaurantService) GetRestaurantOrders(ctx context.Context, id uint) ([]model.Order, error) {
	role, err := utils.GetRoleFromContext(ctx)
	if err != nil {
		s.logger.Error(err)
		return nil, err
	}

	switch role {
	case enums.Admin:
		return s.repository.Order.GetRestaurantOrders(ctx, id)
	case enums.Owner:
		if err := s.checkOwner(ctx, id); err != nil {
			return nil, err
		}
		return s.repository.Order.GetRestaurantOrders(ctx, id)
	default:
		return nil, errors.New("permission denied")
	}
}

func (s *RestaurantService) checkOwner(ctx context.Context, restaurantID uint) error {
	restaurant, err := s.repository.Restaurant.GetRestaurantByID(ctx, restaurantID)
	if err != nil {
		s.logger.Error(fmt.Errorf("there is not restaurant by id: %v\n%w", restaurantID, err))
		return fmt.Errorf("there is not restaurant by id: %v", restaurantID)
	}

	userID, err := utils.GetIDFromContext(ctx)
	if err != nil {
		s.logger.Error(err)
		return fmt.Errorf("there is not user id from ctx")
	}

	if restaurant.OwnerID != userID {
		s.logger.Error(fmt.Errorf("the user id is not owner of restaurant"))
		return fmt.Errorf("permission denied")
	}

	return nil
}
