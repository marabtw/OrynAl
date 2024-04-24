package model

import "time"

type Order struct {
	ID           uint        `gorm:"primaryKey;autoIncrement" json:"id"`
	RestaurantID uint        `gorm:"not null" json:"restaurantId"`
	TotalSum     float64     `json:"totalSum"`
	UserID       uint        `json:"userId"`
	TableID      uint        `json:"tableId"`
	Date         time.Time   `gorm:"not null" json:"date"`
	Status       string      `gorm:"not null" json:"status"`
	OrderFoods   []OrderFood `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;" json:"-"`
}

type OrderFood struct {
	ID      uint `gorm:"primaryKey;autoIncrement" json:"id"`
	OrderID uint `gorm:"not null" json:"orderId"`
	FoodID  uint `gorm:"not null" json:"foodId"`
}
