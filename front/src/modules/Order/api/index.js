import myApi from "@lib/axios"

import { getRestaurantRequest } from "@modules/Restaurants/api"
import {
  getAllTablesRequest,
  getTableCategoriesRequest,
} from "@modules/Tables/api"
import {
  getRestaurantMenuRequest,
  getByOwnerMenuCategoriesRequest,
} from "@modules/Menu/api"

export {
  getRestaurantRequest,
  getAllTablesRequest,
  getRestaurantMenuRequest,
  getByOwnerMenuCategoriesRequest,
  getTableCategoriesRequest,
}

export const getByOwnerAllOrders = async (restaurantId, params) => {
  const queryParams = params
    ? {
        page: params.pageIndex,
        limit: params.limit,
      }
    : {}
  const response = await myApi.get(`/api/restaurants/${restaurantId}/orders`, {
    params: queryParams,
  })
  return response.data
}

export const getByUserAllOrders = async (params) => {
  const queryParams = params
    ? {
        page: params.pageIndex,
        limit: params.limit,
      }
    : {}
  const response = await myApi.get("/api/orders", {
    params: queryParams,
  })
  return response.data
}

export const getOrder = async (orderId) => {
  const response = await myApi.get(`/api/orders/${orderId}`)
  return response.data
}

export const createByUserOrder = async (body) => {
  const response = await myApi.post(`/api/orders/create`, body)
  return response.data
}

export const updateOrder = async (orderId, body) => {
  const response = await myApi.put(`/api/orders/${orderId}`, body)
  return response.data
}

export const deleteOrder = async (orderId) => {
  const response = await myApi.delete(`/api/orders/${orderId}`)
  return response.data
}
