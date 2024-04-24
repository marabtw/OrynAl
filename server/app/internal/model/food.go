package model

type Food struct {
	ID           uint    `gorm:"primaryKey;autoIncrement" json:"id"`
	Name         string  `gorm:"not null" json:"name"`
	Type         string  `gorm:"not null" json:"type"`
	Description  string  `json:"description"`
	Price        float64 `gorm:"not null" json:"price"`
	Status       string  `gorm:"not null" json:"status"`
	Photo        []byte  `gorm:"type:bytea" json:"photo,omitempty"`
	RestaurantID uint    `gorm:"not null" json:"restaurantId"`
}
