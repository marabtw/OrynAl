import myApi from "@lib/axios"
import {
  deleteByAdminRestaurantRequest,
  getAllCities,
  getAllServices,
} from "@modules/Management/api/api"

export { deleteByAdminRestaurantRequest, getAllCities, getAllServices }

export const getAllRestaurantsRequest = async (param) => {
  try {
    const response = await myApi.get(`/api/restaurants`, {
			params: {
        page: param.pageIndex,
        limit: param.limit,
      },
		})
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export const getByAdminRestaurantRequest = async (restaurantId) => {
  try {
    const response = await myApi.get(`/api/admin/restaurants/${restaurantId}`)
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export const getRestaurantRequest = async (restaurantId) => {
  try {
    const response = await myApi.get(`/api/restaurants/${restaurantId}`)
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export const updateByAdminRestaurantRequest = async (restaurantId, body) => {
  try {
    const response = await myApi.put(
      `/api/admin/restaurants/${restaurantId}`,
      body
    )
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export const updateByOwnerRestaurantRequest = async (restaurantId, body) => {
  try {
    const response = await myApi.put(`/api/restaurants/${restaurantId}`, body)
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}
