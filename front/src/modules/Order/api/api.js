import myApi from "@lib/axios"

import { getRestaurantRequest } from "@modules/Restaurants/api/api"
import { getAllTablesRequest } from "@modules/Tables/api/api"
import { getRestaurantMenuRequest } from "@modules/Menu/api/api"

export { getRestaurantRequest, getAllTablesRequest, getRestaurantMenuRequest }

export const getByOwnerAllOrders = async (
  restaurantId,
  params = { pageIndex: 1, limit: 5 }
) => {
  try {
    const response = await myApi.get(
      `/api/restaurants/${restaurantId}/orders`,
      {
        params: {
          page: params.pageIndex,
          limit: params.limit,
        },
      }
    )
    return response
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
export const getByUserAllOrders = async (
  params = { pageIndex: 1, limit: 5 }
) => {
  try {
    const response = await myApi.get("/api/orders", {
      params: {
        page: params.pageIndex,
        limit: params.limit,
      },
    })
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

export const createByUserOrder = async (body) => {
  try {
    const response = await myApi.post(`/api/orders/create`, body)
    return response
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export const updateOrder = async (orderId, body) => {
  try {
    const response = await myApi.put(`/api/orders/${orderId}`, body)
    return response
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export const deleteOrder = async (orderId) => {
  try {
    const response = await myApi.delete(`/api/orders/${orderId}`)
    return response
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
