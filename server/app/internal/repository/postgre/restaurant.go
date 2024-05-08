package postgre

import (
	"context"
	"errors"
	"github.com/alibekabdrakhman1/orynal/internal/model"
	"gorm.io/gorm"
	"strings"
)

func NewRestaurantRepository(db *gorm.DB) *RestaurantRepository {
	return &RestaurantRepository{
		DB: db,
	}
}

type RestaurantRepository struct {
	DB *gorm.DB
}

func (r *RestaurantRepository) GetRestaurants(ctx context.Context, params *model.Params) (*model.ListResponse, error) {
	var restaurants []model.RestaurantResponse
	var totalItems int64

	countQuery := r.DB.WithContext(ctx)
	if params.Query != "" {
		countQuery = countQuery.Where("name LIKE ?", "%"+params.Query+"%")
	}
	if err := countQuery.Model(&model.Restaurant{}).Count(&totalItems).Error; err != nil {
		return nil, err
	}

	if int(totalItems) <= params.Offset {
		return nil, errors.New("offset cannot be less than total items")
	}

	query := r.DB.WithContext(ctx).Model(&model.Restaurant{}).
		Preload("Owner").
		Limit(params.Limit).
		Offset(params.Offset)

	if params.Query != "" {
		query = query.Where("name LIKE ?", "%"+params.Query+"%")
	}

	query = query.Find(&restaurants)

	if err := query.Find(&restaurants).Error; err != nil {
		return nil, err
	}

	return &model.ListResponse{
		Items:        restaurants,
		ItemsPerPage: params.Limit,
		PageIndex:    params.PageIndex,
		TotalItems:   int(totalItems),
	}, nil
}

func (r *RestaurantRepository) GetRestaurantByID(ctx context.Context, id uint) (*model.RestaurantResponse, error) {
	var restaurantResponse model.RestaurantResponse

	if err := r.DB.WithContext(ctx).
		Model(&model.Restaurant{}).
		Preload("Photos").
		Preload("Owner").
		First(&restaurantResponse, id).Error; err != nil {
		return &model.RestaurantResponse{}, err
	}

	return &restaurantResponse, nil
}

func (r *RestaurantRepository) GetRestaurantsByOwner(ctx context.Context, ownerID uint, params *model.Params) (*model.ListResponse, error) {
	var restaurants []model.RestaurantResponse
	var totalItems int64

	countQuery := r.DB.WithContext(ctx).Where("owner_id = ?", ownerID)
	if params.Query != "" {
		countQuery = countQuery.Where("LOWER(name) LIKE ?", "%"+strings.ToLower(params.Query)+"%")
	}

	if err := countQuery.Model(&model.RestaurantResponse{}).Count(&totalItems).Error; err != nil {
		return nil, err
	}

	if int(totalItems) <= params.Offset {
		return nil, errors.New("offset exceeds total items")
	}

	query := r.DB.WithContext(ctx).
		Preload("Owner").
		Where("owner_id = ?", ownerID).
		Find(&restaurants).
		Limit(params.Limit).
		Offset(params.Offset)

	if params.Query != "" {
		query = query.Where("LOWER(name) LIKE ?", "%"+strings.ToLower(params.Query)+"%")
	}

	if err := query.Error; err != nil {
		return nil, err
	}

	return &model.ListResponse{
		Items:        restaurants,
		ItemsPerPage: params.Limit,
		PageIndex:    params.PageIndex,
		TotalItems:   int(totalItems),
	}, nil
}

func (r *RestaurantRepository) GetFavoriteRestaurants(ctx context.Context, userID uint, params *model.Params) (*model.ListResponse, error) {
	//TODO implement me
	panic("implement me")
}

func (r *RestaurantRepository) CreateRestaurant(ctx context.Context, restaurant *model.Restaurant) (*model.RestaurantResponse, error) {
	if err := r.DB.WithContext(ctx).Create(restaurant).Error; err != nil {
		return nil, err
	}

	var createdRestaurant model.RestaurantResponse
	if err := r.DB.WithContext(ctx).Preload("Owner").Preload("Photos").First(&createdRestaurant, restaurant.ID).Error; err != nil {
		return nil, err
	}

	return &createdRestaurant, nil
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

func (r *RestaurantRepository) UpdateRestaurant(ctx context.Context, restaurantID uint, restaurant *model.Restaurant) (*model.RestaurantResponse, error) {
	var existingRestaurant model.Restaurant
	if err := r.DB.WithContext(ctx).First(&existingRestaurant, restaurantID).Error; err != nil {
		return nil, err
	}

	if err := r.DB.WithContext(ctx).Model(&existingRestaurant).Updates(restaurant).Error; err != nil {
		return nil, err
	}

	var updatedRestaurant model.RestaurantResponse
	if err := r.DB.WithContext(ctx).Preload("Owner").Preload("Photos").First(&updatedRestaurant, restaurantID).Error; err != nil {
		return nil, err
	}

	return &updatedRestaurant, nil
}
