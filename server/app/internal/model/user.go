package model

type User struct {
	ID       uint   `gorm:"primary_key;auto_increment" json:"id"`
	Name     string `gorm:"not null" json:"name"`
	Surname  string `gorm:"not null" json:"surname"`
	Email    string `gorm:"unique;not null" json:"email"`
	Phone    string `gorm:"unique;not null" json:"phone"`
	Role     string `gorm:"not null" json:"role"`
	Password string `gorm:"not null" json:"password"`
}

type UserResponse struct {
	ID      uint   `gorm:"primary_key;auto_increment" json:"id"`
	Name    string `gorm:"not null" json:"name"`
	Surname string `gorm:"not null" json:"surname"`
	Email   string `gorm:"unique;not null" json:"email"`
	Phone   string `gorm:"unique;not null" json:"phone"`
	Role    string `gorm:"not null" json:"role"`
}
