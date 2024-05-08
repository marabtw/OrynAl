package postgre

import (
	"context"
	"github.com/alibekabdrakhman1/orynal/internal/model"
	"gorm.io/gorm"
)

func NewFoodRepository(db *gorm.DB) *FoodRepository {
	return &FoodRepository{
		DB: db,
	}
}

type FoodRepository struct {
	DB *gorm.DB
}

func (r *FoodRepository) GetRestaurantMenu(ctx context.Context, restaurantID uint) (map[string][]model.Food, error) {
	menu := make(map[string][]model.Food)

	var foods []model.Food
	if err := r.DB.WithContext(ctx).Where("restaurant_id = ?", restaurantID).Find(&foods).Error; err != nil {
		return nil, err
	}

	for _, food := range foods {
		menu[food.Type] = append(menu[food.Type], food)
	}

	return menu, nil
}

func (r *FoodRepository) GetRestaurantFood(ctx context.Context, restaurantID uint, foodID uint) (*model.Food, error) {
	var food model.Food
	if err := r.DB.WithContext(ctx).Where("restaurant_id = ? AND id = ?", restaurantID, foodID).First(&food).Error; err != nil {
		return nil, err
	}
	return &food, nil
}

func (r *FoodRepository) CreateRestaurantFood(ctx context.Context, food *model.Food) (*model.Food, error) {
	if err := r.DB.WithContext(ctx).Create(food).Error; err != nil {
		return nil, err
	}
	return food, nil
}

func (r *FoodRepository) UpdateRestaurantFood(ctx context.Context, food *model.Food) (*model.Food, error) {
	var of model.Food
	if err := r.DB.WithContext(ctx).First(&of, food.ID).Error; err != nil {
		return nil, err
	}

	if err := r.DB.WithContext(ctx).Model(&of).Updates(food).Error; err != nil {
		return nil, err
	}

	return food, nil
}

func (r *FoodRepository) DeleteRestaurantFood(ctx context.Context, foodID uint) error {
	if err := r.DB.WithContext(ctx).Delete(&model.Food{}, foodID).Error; err != nil {
		return err
	}
	return nil
}
