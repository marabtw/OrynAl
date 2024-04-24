package postgre

import (
	"context"
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

func (r *TableRepository) GetRestaurantTables(ctx context.Context, restaurantID uint) ([]model.Table, error) {
	var tables []model.Table
	if err := r.DB.WithContext(ctx).Where("restaurant_id = ?", restaurantID).Find(&tables).Error; err != nil {
		return nil, err
	}
	return tables, nil
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
	if err := r.DB.WithContext(ctx).Save(table).Error; err != nil {
		return nil, err
	}
	return table, nil
}

func (r *TableRepository) DeleteTable(ctx context.Context, id uint) error {
	if err := r.DB.WithContext(ctx).Delete(&model.Table{}, id).Error; err != nil {
		return err
	}
	return nil
}

func (r *TableRepository) GetAvailableTime(ctx context.Context, date time.Time) ([]time.Time, error) {
	//TODO implement me
	panic("implement me")
}
