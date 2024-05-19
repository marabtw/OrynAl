package postgre

import (
	"context"
	"errors"
	"fmt"
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

func (r *RestaurantRepository) GetPopularRestaurants(ctx context.Context) (*model.ListResponse, error) {
	var restaurants []model.Restaurant

	err := r.DB.Table("orders").
		Select("restaurants.id, restaurants.name, restaurants.address, restaurants.description, restaurants.city, restaurants.status, restaurants.phone, restaurants.owner_id, restaurants.mode_from, restaurants.mode_to, restaurants.icon, count(orders.id) as order_count").
		Joins("JOIN restaurants ON restaurants.id = orders.restaurant_id").
		Group("restaurants.id").
		Order("order_count DESC").
		Limit(10).
		Find(&restaurants).Error

	if err != nil {
		return nil, err
	}

	return &model.ListResponse{
		Items:        restaurants,
		ItemsPerPage: 10,
		TotalPages:   1,
		PageIndex:    1,
		TotalItems:   10,
	}, nil
}

func (r *RestaurantRepository) GetRestaurants(ctx context.Context, params *model.Params) (*model.ListResponse, error) {
	var restaurants []model.Restaurant
	var totalItems int64

	countQuery := r.DB.WithContext(ctx)
	if params.Query != "" {
		countQuery = countQuery.Where("name LIKE ?", "%"+params.Query+"%")
	}
	if err := countQuery.Table("restaurants").Count(&totalItems).Error; err != nil {
		return nil, err
	}

	if int(totalItems) <= params.Offset {
		return nil, errors.New("offset cannot be less than total items")
	}

	query := r.DB.WithContext(ctx).Table("restaurants").
		Limit(params.Limit).
		Offset(params.Offset)

	if params.Query != "" {
		query = query.Where("name LIKE ?", "%"+params.Query+"%")
	}

	query = query.Find(&restaurants)

	if err := query.Find(&restaurants).Error; err != nil {
		return nil, err
	}

	for i := 0; i < len(restaurants); i++ {
		var owner model.UserResponse
		if err := r.DB.Table("users").Where("id = ?", restaurants[i].OwnerID).First(&owner).Error; err != nil {
			return nil, err
		}

		var services []model.Service
		if err := r.DB.Raw("SELECT services.* FROM services JOIN restaurant_service ON services.id = restaurant_service.service_id WHERE restaurant_service.restaurant_id = ?", restaurants[i].ID).Scan(&services).Error; err != nil {
			return nil, err
		}

		restaurants[i].Owner = owner
		restaurants[i].Services = services

	}
	fmt.Println(restaurants)

	return &model.ListResponse{
		Items:        restaurants,
		ItemsPerPage: params.Limit,
		PageIndex:    params.PageIndex,
		TotalItems:   int(totalItems),
	}, nil
}

func (r *RestaurantRepository) GetRestaurantByID(ctx context.Context, id uint) (*model.Restaurant, error) {
	var restaurantResponse model.Restaurant

	if err := r.DB.WithContext(ctx).
		Table("restaurants").
		Preload("Photos").
		First(&restaurantResponse, id).Error; err != nil {
		return &model.Restaurant{}, err
	}

	var owner model.UserResponse
	if err := r.DB.Table("users").Where("id = ?", restaurantResponse.OwnerID).First(&owner).Error; err != nil {
		return nil, err
	}

	var services []model.Service
	if err := r.DB.Raw("SELECT services.* FROM services JOIN restaurant_service ON services.id = restaurant_service.service_id WHERE restaurant_service.restaurant_id = ?", id).Scan(&services).Error; err != nil {
		return nil, err
	}

	var photos []model.RestaurantPhoto
	if err := r.DB.Table("restaurant_photos").Where("restaurant_id = ?", id).First(&photos).Error; err != nil {
		if !errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, err
		}
	}

	restaurantResponse.Owner = owner
	restaurantResponse.Services = services
	restaurantResponse.Photos = photos

	return &restaurantResponse, nil
}

func (r *RestaurantRepository) GetRestaurantsByOwner(ctx context.Context, ownerID uint, params *model.Params) (*model.ListResponse, error) {
	var restaurants []model.Restaurant
	var totalItems int64

	countQuery := r.DB.WithContext(ctx).Where("owner_id = ?", ownerID)
	if params.Query != "" {
		countQuery = countQuery.Where("LOWER(name) LIKE ?", "%"+strings.ToLower(params.Query)+"%")
	}

	if err := countQuery.Table("restaurants").Count(&totalItems).Error; err != nil {
		return nil, err
	}

	if int(totalItems) <= params.Offset {
		return nil, errors.New("offset exceeds total items")
	}

	query := r.DB.WithContext(ctx).
		Table("restaurants").
		Where("owner_id = ?", ownerID).
		Find(&restaurants).
		Limit(params.Limit).
		Offset(params.Offset)

	if params.Query != "" {
		query = query.Where("LOWER(name) LIKE ?", "%"+strings.ToLower(params.Query)+"%")
	}

	for i := 0; i < len(restaurants); i++ {
		var owner model.UserResponse
		if err := r.DB.Table("users").Where("id = ?", restaurants[i].OwnerID).First(&owner).Error; err != nil {
			return nil, err
		}

		var services []model.Service
		if err := r.DB.Raw("SELECT services.* FROM services JOIN restaurant_service ON services.id = restaurant_service.service_id WHERE restaurant_service.restaurant_id = ?", restaurants[i].ID).Scan(&services).Error; err != nil {
			return nil, err
		}

		restaurants[i].Owner = owner
		restaurants[i].Services = services
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

func (r *RestaurantRepository) CreateRestaurant(ctx context.Context, restaurant *model.Restaurant) (*model.Restaurant, error) {
	var restaurantResponse *model.Restaurant

	tx := r.DB.WithContext(ctx).Begin()

	createRestaurant := model.Restaurant{
		Name:        restaurant.Name,
		Address:     restaurant.Address,
		Description: restaurant.Description,
		City:        restaurant.City,
		Status:      restaurant.Status,
		OwnerID:     restaurant.OwnerID,
		ModeFrom:    restaurant.ModeFrom,
		ModeTo:      restaurant.ModeTo,
		Icon:        restaurant.Icon,
	}

	if err := tx.Table("restaurants").Create(&createRestaurant).Error; err != nil {
		tx.Rollback()
		return nil, err
	}

	for _, service := range restaurant.Services {
		restaurantService := model.RestaurantService{
			ServiceID:    service.ID,
			RestaurantID: createRestaurant.ID,
		}
		if err := tx.Table("restaurant_service").Create(&restaurantService).Error; err != nil {
			tx.Rollback()
			return nil, err
		}
	}
	if len(restaurant.Photos) > 0 {
		if err := tx.Table("restaurant_photos").Create(restaurant.Photos).Error; err != nil {
			fmt.Println(err)
			tx.Rollback()
			return nil, err
		}
	}

	if err := tx.Table("restaurants").Preload("Owner").Preload("Photos").Where("id = ?", createRestaurant.ID).First(&restaurantResponse).Error; err != nil {
		tx.Rollback()
		return nil, err
	}

	var owner model.UserResponse
	if err := tx.Table("users").Where("id = ?", restaurant.OwnerID).First(&owner).Error; err != nil {
		tx.Rollback()
		return nil, err
	}

	var photos []model.RestaurantPhoto
	if err := tx.Table("restaurant_photos").Where("restaurant_id = ?", createRestaurant.ID).First(&photos).Error; err != nil {
		if !errors.Is(err, gorm.ErrRecordNotFound) {
			tx.Rollback()
			return nil, err
		}
	}

	if err := tx.Commit().Error; err != nil {
		return nil, err
	}

	restaurantResponse.Owner = owner
	restaurantResponse.Services = restaurant.Services
	restaurantResponse.Photos = photos

	return restaurantResponse, nil
}

func (r *RestaurantRepository) DeleteRestaurant(ctx context.Context, restaurantID uint) error {
	if err := r.DB.WithContext(ctx).Table("restaurants").Delete(&model.Restaurant{}, restaurantID).Error; err != nil {
		return err
	}
	return nil
}

func (r *RestaurantRepository) UpdateRestaurant(ctx context.Context, restaurantID uint, restaurant *model.Restaurant) (*model.Restaurant, error) {
	var existingRestaurant model.Restaurant
	if err := r.DB.WithContext(ctx).Table("restaurants").First(&existingRestaurant, restaurantID).Error; err != nil {
		return nil, err
	}

	if err := r.DB.WithContext(ctx).Table("restaurants").Model(&existingRestaurant).Updates(restaurant).Error; err != nil {
		return nil, err
	}

	var updatedRestaurant model.Restaurant
	if err := r.DB.WithContext(ctx).Table("restaurants").Preload("Owner").Preload("Photos").First(&updatedRestaurant, restaurantID).Error; err != nil {
		return nil, err
	}

	if err := r.UpdateRestaurantPhotos(ctx, restaurantID, restaurant.Photos); err != nil {
		return nil, err
	}

	if err := r.UpdateRestaurantServices(ctx, restaurantID, restaurant.Services); err != nil {
		return nil, err
	}

	var owner model.UserResponse
	if err := r.DB.Table("users").Where("id = ?", updatedRestaurant.OwnerID).First(&owner).Error; err != nil {
		return nil, err
	}

	var services []model.Service
	if err := r.DB.Raw("SELECT services.* FROM services JOIN restaurant_service ON services.id = restaurant_service.service_id WHERE restaurant_service.restaurant_id = ?", restaurantID).Scan(&services).Error; err != nil {
		return nil, err
	}

	var photos []model.RestaurantPhoto
	if err := r.DB.Table("restaurant_photos").Where("restaurant_id = ?", restaurantID).First(&photos).Error; err != nil {
		if !errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, err
		}
	}

	updatedRestaurant.Owner = owner
	updatedRestaurant.Services = services
	updatedRestaurant.Photos = photos

	return &updatedRestaurant, nil
}

func (r *RestaurantRepository) UpdateRestaurantPhotos(ctx context.Context, restaurantID uint, photos []model.RestaurantPhoto) error {
	if err := r.DB.WithContext(ctx).Table("restaurant_photos").Where("restaurant_id = ?", restaurantID).Delete(&model.RestaurantPhoto{}).Error; err != nil {
		return err
	}

	for _, photo := range photos {
		if err := r.DB.WithContext(ctx).Table("restaurant_photos").Create(&photo).Error; err != nil {
			return err
		}
	}

	return nil
}

func (r *RestaurantRepository) UpdateRestaurantServices(ctx context.Context, restaurantID uint, services []model.Service) error {
	if err := r.DB.WithContext(ctx).Table("restaurant_service").Where("restaurant_id = ?", restaurantID).Delete(&model.RestaurantService{}).Error; err != nil {
		return err
	}

	for _, service := range services {
		if err := r.DB.WithContext(ctx).Table("restaurant_service").Create(&model.RestaurantService{
			RestaurantID: restaurantID,
			ServiceID:    service.ID,
		}).Error; err != nil {
			return err
		}
	}

	return nil
}
