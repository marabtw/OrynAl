package postgre

import (
	"context"
	"github.com/alibekabdrakhman1/orynal/internal/model"
	"gorm.io/gorm"
)

func NewOrderRepository(db *gorm.DB) *OrderRepository {
	return &OrderRepository{
		DB: db,
	}
}

type OrderRepository struct {
	DB *gorm.DB
}

func (r *OrderRepository) CreateOrder(ctx context.Context, order *model.Order) (*model.Order, error) {
	if err := r.DB.WithContext(ctx).Create(order).Error; err != nil {
		return nil, err
	}
	return order, nil
}

func (r *OrderRepository) DeleteOrder(ctx context.Context, id uint) error {
	if err := r.DB.WithContext(ctx).Delete(&model.Order{}, id).Error; err != nil {
		return err
	}
	return nil
}

func (r *OrderRepository) UpdateOrder(ctx context.Context, order *model.Order) (*model.Order, error) {
	if err := r.DB.WithContext(ctx).Model(&model.Order{}).Save(order).Error; err != nil {
		return nil, err
	}
	return order, nil
}

func (r *OrderRepository) GetOrder(ctx context.Context, userID, id uint) (*model.Order, error) {
	var order model.Order
	if err := r.DB.WithContext(ctx).Where("id = ? AND user_id = ?", id, userID).First(&order).Error; err != nil {
		return nil, err
	}
	return &order, nil
}

func (r *OrderRepository) GetAllOrders(ctx context.Context, userID uint) ([]model.Order, error) {
	var orders []model.Order
	if err := r.DB.WithContext(ctx).Where("user_id = ?", userID).Find(&orders).Error; err != nil {
		return nil, err
	}
	return orders, nil
}

func (r *OrderRepository) GetRestaurantOrders(ctx context.Context, restaurantID uint) ([]model.Order, error) {
	var orders []model.Order
	if err := r.DB.WithContext(ctx).Where("restaurant_id = ?", restaurantID).Find(&orders).Error; err != nil {
		return nil, err
	}
	return orders, nil
}
