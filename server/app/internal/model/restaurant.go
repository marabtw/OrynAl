package model

import "time"

type Restaurant struct {
	ID          uint              `gorm:"primaryKey;autoIncrement" json:"id"`
	Name        string            `gorm:"size:255;not null" json:"name"`
	Address     string            `gorm:"size:255;not null" json:"address"`
	Description string            `json:"description"`
	City        string            `json:"city"`
	Status      bool              `json:"status"`
	Phone       string            `gorm:"not null" json:"phone"`
	OwnerID     uint              `gorm:"not null" json:"ownerId"`
	Owner       UserResponse      `gorm:"foreignKey:OwnerID;references:ID" json:"owner"`
	ModeFrom    time.Time         `gorm:"not null" json:"modeFrom"`
	ModeTo      time.Time         `gorm:"not null" json:"modeTo"`
	Icon        string            `json:"icon,omitempty"`
	Services    []Services        `gorm:"many2many:restaurant_services;" json:"services"`
	Photos      []RestaurantPhoto `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;" json:"-"`
	Orders      []Order           `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;" json:"-"`
	Tables      []Table           `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;" json:"-"`
}

type RestaurantPhoto struct {
	ID           uint   `gorm:"primaryKey;autoIncrement" json:"id"`
	PhotoURL     string `json:"photo"`
	RestaurantID uint   `gorm:"not null;foreignkey:ID" json:"restaurantId"`
}

type Services struct {
	ID   uint   `gorm:"primaryKey;autoIncrement" json:"id"`
	Name string `gorm:"size:255;not null" json:"name"`
}

type RestaurantService struct {
	ID           uint `gorm:"primaryKey;autoIncrement" json:"id"`
	ServiceID    uint `gorm:"not null" json:"service_id"`
	RestaurantID uint `gorm:"not null" json:"restaurant_id"`
}
