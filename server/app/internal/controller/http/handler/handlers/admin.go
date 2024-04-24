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

func NewAdminHandler(service *service.Manager, logger *zap.SugaredLogger) *AdminHandler {
	return &AdminHandler{
		service: service,
		logger:  logger,
	}
}

type AdminHandler struct {
	service *service.Manager
	logger  *zap.SugaredLogger
}

// GetClients godoc
// @Summary Get a list of all clients
// @Description Get all clients from the database
// @Tags Admin
// @Accept  json
// @Produce  json
// @Success 200 {object} CustomResponse "Successfully retrieved clients"
// @Failure 500 {object} CustomResponse "Internal server error"
// @Router /admin/clients [get]
func (h *AdminHandler) GetClients(c echo.Context) error {
	clients, err := h.service.User.GetAllClients(c.Request().Context())
	if err != nil {
		h.logger.Error("Failed to get clients:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to get clients",
			Data:    err.Error(),
		})
	}
	return c.JSON(http.StatusOK, response.CustomResponse{
		Status:  http.StatusOK,
		Message: "Success",
		Data:    clients,
	})
}

func (h *AdminHandler) GetClient(c echo.Context) error {
	clientID, err := strconv.ParseUint(c.Param("id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid client id",
			Data:    err.Error(),
		})
	}

	client, err := h.service.User.GetByID(c.Request().Context(), uint(clientID))
	if err != nil {
		h.logger.Error("Failed to get client:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to get client",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusOK, response.CustomResponse{
		Status:  http.StatusOK,
		Message: "Success",
		Data:    client,
	})
}

func (h *AdminHandler) DeleteClient(c echo.Context) error {
	clientID, err := strconv.ParseUint(c.Param("id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid client id",
			Data:    err.Error(),
		})
	}

	err = h.service.User.Delete(c.Request().Context(), uint(clientID))
	if err != nil {
		h.logger.Error("Failed to delete client:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to delete client",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusOK, response.CustomResponse{
		Status:  http.StatusOK,
		Message: "Deleted",
	})
}

func (h *AdminHandler) GetOwners(c echo.Context) error {
	owners, err := h.service.User.GetAllOwners(c.Request().Context())
	if err != nil {
		h.logger.Error("Failed to get owners:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to get owners",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusOK, response.CustomResponse{
		Status:  http.StatusOK,
		Message: "Success",
		Data:    owners,
	})
}

func (h *AdminHandler) CreateOwner(c echo.Context) error {
	var owner model.User
	if err := c.Bind(&owner); err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid request body",
			Data:    err.Error(),
		})
	}

	createdOwner, err := h.service.User.CreateOwner(c.Request().Context(), &owner)
	if err != nil {
		h.logger.Error("Failed to create owner:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to create owner",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusCreated, response.CustomResponse{
		Status:  http.StatusCreated,
		Message: "Success",
		Data:    createdOwner,
	})
}

func (h *AdminHandler) DeleteOwner(c echo.Context) error {
	ownerID, err := strconv.ParseUint(c.Param("id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid owner ID",
			Data:    err.Error(),
		})
	}

	err = h.service.User.Delete(c.Request().Context(), uint(ownerID))
	if err != nil {
		h.logger.Error("Failed to delete owner:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to delete owner",
			Data:    err.Error(),
		})
	}

	return c.NoContent(http.StatusNoContent)
}

func (h *AdminHandler) GetRestaurants(c echo.Context) error {
	restaurants, err := h.service.Restaurant.GetRestaurants(c.Request().Context())
	if err != nil {
		h.logger.Error("Failed to get restaurants:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to get restaurants",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusOK, response.CustomResponse{
		Status:  http.StatusOK,
		Message: "Success",
		Data:    restaurants,
	})
}

func (h *AdminHandler) GetRestaurant(c echo.Context) error {
	restaurantID, err := strconv.ParseUint(c.Param("id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid restaurant ID",
			Data:    err.Error(),
		})
	}

	restaurant, err := h.service.Restaurant.GetRestaurantByID(c.Request().Context(), uint(restaurantID))
	if err != nil {
		h.logger.Error("Failed to get restaurant:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to get restaurant",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusOK, response.CustomResponse{
		Status:  http.StatusOK,
		Message: "Success",
		Data:    restaurant,
	})
}

func (h *AdminHandler) CreateRestaurant(c echo.Context) error {
	var restaurant model.Restaurant
	if err := c.Bind(&restaurant); err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid request body",
			Data:    err.Error(),
		})
	}

	createdRestaurant, err := h.service.Restaurant.CreateRestaurant(c.Request().Context(), &restaurant)
	if err != nil {
		h.logger.Error("Failed to create restaurant:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to create restaurant",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusCreated, response.CustomResponse{
		Status:  http.StatusCreated,
		Message: "Success",
		Data:    createdRestaurant,
	})
}

func (h *AdminHandler) DeleteRestaurant(c echo.Context) error {
	restaurantID, err := strconv.ParseUint(c.Param("id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid restaurant ID",
			Data:    err.Error(),
		})
	}

	err = h.service.Restaurant.DeleteRestaurant(c.Request().Context(), uint(restaurantID))
	if err != nil {
		h.logger.Error("Failed to delete restaurant:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to delete restaurant",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusOK, response.CustomResponse{
		Status:  http.StatusOK,
		Message: "Success",
		Data:    nil,
	})
}

func (h *AdminHandler) UpdateRestaurant(c echo.Context) error {
	restaurantID, err := strconv.ParseUint(c.Param("id"), 10, 64)
	if err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid restaurant ID",
			Data:    err.Error(),
		})
	}

	var updatedRestaurant model.Restaurant
	if err := c.Bind(&updatedRestaurant); err != nil {
		return c.JSON(http.StatusBadRequest, response.CustomResponse{
			Status:  http.StatusBadRequest,
			Message: "Invalid request body",
			Data:    err.Error(),
		})
	}

	updatedRestaurant.ID = uint(restaurantID)
	restaurant, err := h.service.Restaurant.UpdateRestaurant(c.Request().Context(), &updatedRestaurant, uint(restaurantID))
	if err != nil {
		h.logger.Error("Failed to update restaurant:", err)
		return c.JSON(http.StatusInternalServerError, response.CustomResponse{
			Status:  http.StatusInternalServerError,
			Message: "Failed to update restaurant",
			Data:    err.Error(),
		})
	}

	return c.JSON(http.StatusOK, response.CustomResponse{
		Status:  http.StatusOK,
		Message: "Success",
		Data:    restaurant,
	})
}
