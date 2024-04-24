package services

import (
	"context"
	"errors"
	"github.com/alibekabdrakhman1/orynal/config"
	"github.com/alibekabdrakhman1/orynal/internal/model"
	"github.com/alibekabdrakhman1/orynal/internal/repository"
	"github.com/alibekabdrakhman1/orynal/pkg/enums"
	"github.com/alibekabdrakhman1/orynal/pkg/utils"
	"go.uber.org/zap"
)

func NewOrderService(repository *repository.Manager, config *config.Config, logger *zap.SugaredLogger) *OrderService {
	return &OrderService{repository: repository, config: config, logger: logger}
}

type OrderService struct {
	repository *repository.Manager
	config     *config.Config
	logger     *zap.SugaredLogger
}

func (s *OrderService) Create(ctx context.Context, order *model.Order) (*model.Order, error) {
	if order.Status != enums.Reserved {
		return nil, errors.New("order status is invalid")
	}
	createdOrder, err := s.repository.Order.CreateOrder(ctx, order)
	if err != nil {
		return nil, err
	}
	return createdOrder, nil
}

func (s *OrderService) Update(ctx context.Context, id uint, order *model.Order) (*model.Order, error) {
	userID, err := utils.GetIDFromContext(ctx)
	if err != nil {
		return nil, err
	}

	oldOrder, err := s.repository.Order.GetOrder(ctx, userID, id)
	if err != nil {
		return nil, err
	}

	switch oldOrder.Status {
	case enums.Canceled:
		return nil, errors.New("order status is canceled")
	case enums.Completed:
		return nil, errors.New("order status is completed")
	}

	updatedOrder, err := s.repository.Order.UpdateOrder(ctx, order)
	if err != nil {
		return nil, err
	}
	return updatedOrder, nil
}

func (s *OrderService) Delete(ctx context.Context, id uint) error {
	userID, err := utils.GetIDFromContext(ctx)
	if err != nil {
		return err
	}

	_, err = s.repository.Order.GetOrder(ctx, userID, id)
	if err != nil {
		return err
	}

	err = s.repository.Order.DeleteOrder(ctx, id)
	if err != nil {
		return err
	}
	return nil
}

func (s *OrderService) GetByID(ctx context.Context, id uint) (*model.Order, error) {
	userID, err := utils.GetIDFromContext(ctx)
	if err != nil {
		return nil, err
	}

	order, err := s.repository.Order.GetOrder(ctx, userID, id)
	if err != nil {
		return nil, err
	}
	return order, nil
}

func (s *OrderService) GetAllOrders(ctx context.Context) ([]model.Order, error) {
	id, err := utils.GetIDFromContext(ctx)
	if err != nil {
		return nil, err
	}

	orders, err := s.repository.Order.GetAllOrders(ctx, id)
	if err != nil {
		return nil, err
	}
	return orders, nil
}
