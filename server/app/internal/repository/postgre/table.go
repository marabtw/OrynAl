package postgre

import (
	"context"
	"errors"
	"github.com/alibekabdrakhman1/orynal/internal/model"
	"gorm.io/gorm"
	"time"
)

func NewTableRepository(db *gorm.DB) *TableRepository {
	return &TableRepository{
		DB: db,
	}
}

type TableRepository struct {
	DB *gorm.DB
}

func (r *TableRepository) GetTableCategories(ctx context.Context, restaurantID uint) ([]string, error) {
	var types []string

	if err := r.DB.WithContext(ctx).Table("tables").
		Select("DISTINCT type").
		Where("restaurant_id = ?", restaurantID).
		Pluck("type", &types).Error; err != nil {
		return nil, err
	}

	return types, nil
}

func (r *TableRepository) GetRestaurantTables(ctx context.Context, restaurantID uint, params *model.Params) (*model.ListResponse, error) {
	var tables []model.Table
	var totalItems int64

	countQuery := r.DB.WithContext(ctx).
		Model(&model.Table{}).
		Table("tables").
		Where("restaurant_id = ?", restaurantID)

	if params.Query != "" {
		countQuery = countQuery.Where("LOWER(type) = LOWER(?)", params.Query)
	}

	if params.Date != nil {
		countQuery = countQuery.
			Joins("LEFT JOIN orders ON tables.id = orders.table_id AND orders.date::date = ?", params.Date.Format("2006-01-02")).
			Where("orders.id IS NULL")
	}

	if err := countQuery.Count(&totalItems).Error; err != nil {
		return nil, err
	}

	if int64(params.Offset) >= totalItems {
		return nil, errors.New("offset exceeds total items")
	}

	query := r.DB.WithContext(ctx).
		Table("tables").
		Select("tables.*").
		Where("restaurant_id = ?", restaurantID)

	if params.Query != "" {
		query = query.Where("LOWER(type) = LOWER(?)", params.Query)
	}

	if params.Date != nil {
		query = query.
			Joins("LEFT JOIN orders ON tables.id = orders.table_id AND orders.date::date = ?", params.Date.Format("2006-01-02")).
			Where("orders.id IS NULL")
	}

	query = query.Limit(params.Limit).
		Offset(params.Offset)

	if params.Order != nil && params.SortVector != nil {
		query = query.Order(params.Order.(string) + " " + params.SortVector.(string))
	}

	if err := query.Find(&tables).Error; err != nil {
		return nil, err
	}

	return &model.ListResponse{
		Items:        tables,
		ItemsPerPage: params.Limit,
		PageIndex:    params.PageIndex,
		TotalItems:   int(totalItems),
	}, nil
}

func (r *TableRepository) GetRestaurantTable(ctx context.Context, restaurantID uint, tableID uint) (*model.Table, error) {
	var table model.Table
	if err := r.DB.WithContext(ctx).Where("restaurant_id = ? AND id = ?", restaurantID, tableID).First(&table).Error; err != nil {
		return nil, err
	}
	return &table, nil
}

func (r *TableRepository) CreateTable(ctx context.Context, table *model.Table) (*model.Table, error) {
	if err := r.DB.WithContext(ctx).Create(table).Error; err != nil {
		return nil, err
	}
	return table, nil
}

func (r *TableRepository) UpdateTable(ctx context.Context, table *model.Table) (*model.Table, error) {
	var ot model.Table
	if err := r.DB.WithContext(ctx).First(&ot, table.ID).Error; err != nil {
		return nil, err
	}

	if err := r.DB.WithContext(ctx).Model(&ot).Updates(table).Error; err != nil {
		return nil, err
	}

	return table, nil
}

func (r *TableRepository) DeleteTable(ctx context.Context, id uint) error {
	var table model.Table
	if err := r.DB.WithContext(ctx).First(&table, id).Error; err != nil {
		return err
	}

	if err := r.DB.WithContext(ctx).Delete(&table).Error; err != nil {
		return err
	}

	return nil
}

func (r *TableRepository) GetAvailableTime(ctx context.Context, date time.Time) ([]time.Time, error) {
	//TODO implement me
	panic("implement me")
}
