package postgre

import (
	"context"
	"errors"
	"github.com/alibekabdrakhman1/orynal/internal/model"
	"github.com/alibekabdrakhman1/orynal/pkg/enums"
	"gorm.io/gorm"
)

type UserRepository struct {
	DB *gorm.DB
}

func NewUserRepository(db *gorm.DB) *UserRepository {
	return &UserRepository{
		DB: db,
	}
}

func (r *UserRepository) Create(ctx context.Context, user *model.User) (*model.UserResponse, error) {
	result := r.DB.WithContext(ctx).Create(&user)
	if result.Error != nil {
		return nil, result.Error
	}

	if result.RowsAffected == 0 {
		return nil, errors.New("unable to create user")
	}

	return &model.UserResponse{
		ID:      user.ID,
		Name:    user.Name,
		Surname: user.Surname,
		Email:   user.Email,
		Phone:   user.Phone,
		Role:    user.Role,
	}, nil
}

func (r *UserRepository) Update(ctx context.Context, user *model.User) (*model.UserResponse, error) {
	var oldUser model.User
	if err := r.DB.WithContext(ctx).First(&oldUser, user.ID).Error; err != nil {
		return nil, err
	}

	if oldUser.Role != user.Role {
		return nil, errors.New("you cannot change user role")
	}

	if err := r.DB.WithContext(ctx).Model(&oldUser).Updates(user).Error; err != nil {
		return nil, err
	}

	return &model.UserResponse{
		ID:      oldUser.ID,
		Name:    oldUser.Name,
		Surname: oldUser.Surname,
		Email:   oldUser.Email,
		Phone:   oldUser.Phone,
		Role:    oldUser.Role,
	}, nil
}

func (r *UserRepository) Delete(ctx context.Context, id uint) error {
	var user model.User
	if err := r.DB.WithContext(ctx).First(&user, id).Error; err != nil {
		return err
	}

	if err := r.DB.WithContext(ctx).Delete(&user).Error; err != nil {
		return err
	}

	return nil
}

func (r *UserRepository) GetByID(ctx context.Context, id uint) (*model.UserResponse, error) {
	var user model.User
	if err := r.DB.WithContext(ctx).First(&user, id).Error; err != nil {
		return nil, err
	}

	return &model.UserResponse{
		ID:      user.ID,
		Name:    user.Name,
		Surname: user.Surname,
		Email:   user.Email,
		Phone:   user.Phone,
		Role:    user.Role,
	}, nil
}

func (r *UserRepository) GetByEmail(ctx context.Context, email string) (*model.User, error) {
	var user *model.User
	if err := r.DB.WithContext(ctx).Where("email = ?", email).First(&user).Error; err != nil {
		return nil, err
	}

	return user, nil
}

func (r *UserRepository) GetAllClients(ctx context.Context) ([]model.UserResponse, error) {
	var clients []model.User
	if err := r.DB.WithContext(ctx).Where("role = ?", enums.User).Find(&clients).Error; err != nil {
		return nil, err
	}

	var userResponses []model.UserResponse
	for _, user := range clients {
		userResponses = append(userResponses, model.UserResponse{
			ID:      user.ID,
			Name:    user.Name,
			Surname: user.Surname,
			Email:   user.Email,
			Phone:   user.Phone,
			Role:    user.Role,
		})
	}

	return userResponses, nil
}

func (r *UserRepository) GetAllOwners(ctx context.Context) ([]model.UserResponse, error) {
	var owners []model.User
	if err := r.DB.WithContext(ctx).Where("role = ?", "owner").Find(&owners).Error; err != nil {
		return nil, err
	}

	var userResponses []model.UserResponse
	for _, user := range owners {
		userResponses = append(userResponses, model.UserResponse{
			ID:      user.ID,
			Name:    user.Name,
			Surname: user.Surname,
			Email:   user.Email,
			Phone:   user.Phone,
			Role:    user.Role,
		})
	}

	return userResponses, nil
}
