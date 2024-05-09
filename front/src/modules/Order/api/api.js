import myApi from "@lib/axios"

import { getRestaurantRequest } from "@modules/Restaurants/api/api"
import { getAllTablesRequest } from "@modules/Tables/api/api"
import { getRestaurantMenuRequest } from "@modules/Menu/api/api"

export { getRestaurantRequest, getAllTablesRequest, getRestaurantMenuRequest }

export const getByOwnerAllOrders = async (restaurantId) => {
  try {
    const response = await myApi.get(`/api/restaurants/${restaurantId}/orders`)
    return response
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
export const getByUserAllOrders = async () => {
  try {
    const response = await myApi.get("/api/orders")
    return response
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
export const getOrder = async (orderId) => {
  try {
    const response = await myApi.get(`/api/orders/${orderId}`)
    return response
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export const createByUserOrder = async (orderId) => {
  try {
    const response = await myApi.post(`/api/orders/${orderId}`)
    return response
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export const updateOrder = async (orderId) => {
  try {
    const response = await myApi.put(`/api/orders/${orderId}`)
    return response
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export const deleteOrder = async (orderId) => {
  try {
    const response = await myApi.put(`/api/orders/${orderId}`)
    return response
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
