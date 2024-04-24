package handlers

import (
	"github.com/alibekabdrakhman1/orynal/internal/model"
	"github.com/alibekabdrakhman1/orynal/internal/service"
	"github.com/alibekabdrakhman1/orynal/pkg/response"
	"github.com/labstack/echo/v4"
	"go.uber.org/zap"
	"net/http"
	"strconv"
)

func NewMenuHandler(service *service.Manager, logger *zap.SugaredLogger) *MenuHandler {
	return &MenuHandler{
		service: service,
		logger:  logger,
	}
}

type MenuHandler struct {
	service *service.Manager
	logger  *zap.SugaredLogger
}

func (h *MenuHandler) GetRestaurantMenu(c echo.Context) error {
	restaurantID, err := strconv.ParseUint(c.Param("id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid restaurant ID",
			Data:    err.Error(),
		})
	}

	foodType := c.QueryParam("foodType")

	menu, err := h.service.Menu.GetRestaurantMenu(c.Request().Context(), uint(restaurantID), foodType)
	if err != nil {
		h.logger.Error("Failed to get restaurant menu:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to get restaurant menu",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusOK, response.CustomResponse{
		Status:  http.StatusOK,
		Message: "Success",
		Data:    menu,
	})
}

func (h *MenuHandler) GetRestaurantFood(c echo.Context) error {
	restaurantID, err := strconv.ParseUint(c.Param("restaurant_id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid restaurant ID",
			Data:    err.Error(),
		})
	}

	foodID, err := strconv.ParseUint(c.Param("food_id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid food ID",
			Data:    err.Error(),
		})
	}

	food, err := h.service.Menu.GetRestaurantFood(c.Request().Context(), uint(restaurantID), uint(foodID))
	if err != nil {
		h.logger.Error("Failed to get restaurant food:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to get restaurant food",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusOK, response.CustomResponse{
		Status:  http.StatusOK,
		Message: "Success",
		Data:    food,
	})
}

func (h *MenuHandler) CreateRestaurantFood(c echo.Context) error {
	restaurantID, err := strconv.ParseUint(c.Param("id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid restaurant ID",
			Data:    err.Error(),
		})
	}

	var food model.Food
	if err := c.Bind(&food); err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid request body",
			Data:    err.Error(),
		})
	}

	createdFood, err := h.service.Menu.CreateRestaurantFood(c.Request().Context(), uint(restaurantID), &food)
	if err != nil {
		h.logger.Error("Failed to create restaurant food:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to create restaurant food",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusCreated, response.CustomResponse{
		Status:  http.StatusCreated,
		Message: "Success",
		Data:    createdFood,
	})
}

func (h *MenuHandler) UpdateRestaurantFood(c echo.Context) error {
	restaurantID, err := strconv.ParseUint(c.Param("restaurant_id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid restaurant ID",
			Data:    err.Error(),
		})
	}

	foodID, err := strconv.ParseUint(c.Param("food_id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid food ID",
			Data:    err.Error(),
		})
	}

	var updatedFood model.Food
	if err := c.Bind(&updatedFood); err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid request body",
			Data:    err.Error(),
		})
	}

	updatedFood.ID = uint(foodID)
	food, err := h.service.Menu.UpdateRestaurantFood(c.Request().Context(), uint(restaurantID), &updatedFood)
	if err != nil {
		h.logger.Error("Failed to update restaurant food:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to update restaurant food",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusOK, response.CustomResponse{
		Status:  http.StatusOK,
		Message: "Success",
		Data:    food,
	})
}

func (h *MenuHandler) DeleteRestaurantFood(c echo.Context) error {
	restaurantID, err := strconv.ParseUint(c.Param("restaurant_id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid restaurant ID",
			Data:    err.Error(),
		})
	}

	foodID, err := strconv.ParseUint(c.Param("food_id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid food ID",
			Data:    err.Error(),
		})
	}

	err = h.service.Menu.DeleteRestaurantFood(c.Request().Context(), uint(restaurantID), uint(foodID))
	if err != nil {
		h.logger.Error("Failed to delete restaurant food:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to delete restaurant food",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusOK, response.CustomResponse{
		Status:  http.StatusOK,
		Message: "Success",
		Data:    nil,
	})
}
