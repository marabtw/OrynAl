package model

import "time"

type Restaurant struct {
	ID              uint              `gorm:"primaryKey;autoIncrement" json:"id"`
	Name            string            `gorm:"size:255;not null" json:"name"`
	Address         string            `gorm:"size:255;not null" json:"address"`
	Description     string            `json:"description"`
	City            string            `json:"city"`
	Status          bool              `json:"status"`
	OwnerID         uint              `gorm:"not null" json:"ownerId"`
	ModeFrom        time.Time         `gorm:"not null" json:"modeFrom"`
	ModeTo          time.Time         `gorm:"not null" json:"modeTo"`
	Icon            string            `json:"icon,omitempty"`
	CanWork         bool              `gorm:"default:false" json:"can_work"`
	LiveMusic       bool              `gorm:"default:false" json:"live_music"`
	BanquetHall     bool              `gorm:"default:false" json:"banquet_hall"`
	Hookah          bool              `gorm:"default:false" json:"hookah"`
	UnlimitedBeer   bool              `gorm:"default:false" json:"unlimited_beer"`
	RainyRhythm     bool              `gorm:"default:false" json:"rainy_rhythm"`
	KidsPlayroom    bool              `gorm:"default:false" json:"kids_playroom"`
	OwnConfectioner bool              `gorm:"default:false" json:"own_confectioner"`
	Photos          []RestaurantPhoto `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;" json:"-"`
	Orders          []Order           `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;" json:"-"`
	Tables          []Table           `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;" json:"-"`
}

type RestaurantPhoto struct {
	ID           uint   `gorm:"primaryKey;autoIncrement" json:"id"`
	PhotoURL     string `json:"photo"`
	RestaurantID uint   `gorm:"not null;foreignkey:ID" json:"restaurantId"`
}

type RestaurantResponse struct {
	ID              uint              `gorm:"primaryKey;autoIncrement" json:"id"`
	Name            string            `gorm:"size:255;not null" json:"name"`
	Address         string            `gorm:"size:255;not null" json:"address"`
	Description     string            `json:"description"`
	City            string            `json:"city"`
	Status          bool              `json:"status"`
	OwnerID         uint              `gorm:"not null" json:"ownerId"`
	Owner           UserResponse      `gorm:"foreignKey:OwnerID;references:ID" json:"owner"`
	ModeFrom        time.Time         `gorm:"not null" json:"modeFrom"`
	ModeTo          time.Time         `gorm:"not null" json:"modeTo"`
	Icon            string            `json:"icon,omitempty"`
	CanWork         bool              `gorm:"default:false" json:"can_work"`
	LiveMusic       bool              `gorm:"default:false" json:"live_music"`
	BanquetHall     bool              `gorm:"default:false" json:"banquet_hall"`
	Hookah          bool              `gorm:"default:false" json:"hookah"`
	UnlimitedBeer   bool              `gorm:"default:false" json:"unlimited_beer"`
	RainyRhythm     bool              `gorm:"default:false" json:"rainy_rhythm"`
	KidsPlayroom    bool              `gorm:"default:false" json:"kids_playroom"`
	OwnConfectioner bool              `gorm:"default:false" json:"own_confectioner"`
	Photos          []RestaurantPhoto `gorm:"foreignKey:RestaurantID;constraint:OnUpdate:CASCADE,OnDelete:CASCADE;" json:"-"`
}

func (RestaurantResponse) TableName() string {
	return "restaurants"
}
