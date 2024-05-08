package handlers

import (
	"github.com/alibekabdrakhman1/orynal/internal/service"
	"github.com/labstack/echo/v4"
	"go.uber.org/zap"
)

type ReviewsHandler struct {
	service *service.Manager
	logger  *zap.SugaredLogger
}

func NewReviewsHandler(service *service.Manager, logger *zap.SugaredLogger) *ReviewsHandler {
	return &ReviewsHandler{
		service: service,
		logger:  logger,
	}
}

func (h *ReviewsHandler) CreateReview(c echo.Context) error {
	//TODO implement me
	panic("implement me")
}

func (h *ReviewsHandler) GetReviews(c echo.Context) error {
	//TODO implement me
	panic("implement me")
}
