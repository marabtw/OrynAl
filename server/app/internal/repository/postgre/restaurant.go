package postgre

import (
	"context"
	"github.com/alibekabdrakhman1/orynal/internal/model"
	"gorm.io/gorm"
)

func NewRestaurantRepository(db *gorm.DB) *RestaurantRepository {
	return &RestaurantRepository{
		DB: db,
	}
}

type RestaurantRepository struct {
	DB *gorm.DB
}

func (r *RestaurantRepository) GetRestaurants(ctx context.Context) ([]model.Restaurant, error) {
	var restaurants []model.Restaurant
	if err := r.DB.WithContext(ctx).Find(&restaurants).Error; err != nil {
		return nil, err
	}
	return restaurants, nil
}

func (r *RestaurantRepository) GetRestaurantByID(ctx context.Context, id uint) (*model.Restaurant, error) {
	var restaurant model.Restaurant
	if err := r.DB.WithContext(ctx).First(&restaurant, id).Error; err != nil {
		return nil, err
	}
	return &restaurant, nil
}

func (r *RestaurantRepository) GetRestaurantByOwner(ctx context.Context, ownerID uint) (*model.Restaurant, error) {
	var restaurant model.Restaurant
	if err := r.DB.WithContext(ctx).Where("owner_id = ?", ownerID).First(&restaurant).Error; err != nil {
		return nil, err
	}
	return &restaurant, nil
}

func (r *RestaurantRepository) GetFavoriteRestaurants(ctx context.Context, userID uint) ([]model.Restaurant, error) {
	//TODO implement me
	panic("implement me")
}

func (r *RestaurantRepository) CreateRestaurant(ctx context.Context, restaurant *model.Restaurant) (*model.Restaurant, error) {
	if err := r.DB.WithContext(ctx).Create(restaurant).Error; err != nil {
		return nil, err
	}
	return restaurant, nil
}

func (r *RestaurantRepository) CreateRestaurantPhotos(ctx context.Context, restaurantPhoto *model.RestaurantPhoto) error {
	if err := r.DB.WithContext(ctx).Create(restaurantPhoto).Error; err != nil {
		return err
	}
	return nil
}

func (r *RestaurantRepository) DeleteRestaurant(ctx context.Context, restaurantID uint) error {
	if err := r.DB.WithContext(ctx).Delete(&model.Restaurant{}, restaurantID).Error; err != nil {
		return err
	}
	return nil
}

func (r *RestaurantRepository) UpdateRestaurant(ctx context.Context, restaurantID uint, restaurant *model.Restaurant) (*model.Restaurant, error) {
	if err := r.DB.WithContext(ctx).Model(&model.Restaurant{}).Where("id = ?", restaurantID).Updates(restaurant).Error; err != nil {
		return nil, err
	}
	return restaurant, nil
}
