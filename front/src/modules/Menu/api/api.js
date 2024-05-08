import myApi from "@lib/axios"

export const getByOwnerRestaurantMenuRequest = async (restaurantId) => {
  try {
    const response = await myApi.get(`/api/restaurants/${restaurantId}/menu`)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
export const getByOwnerMenuItemRequest = async (restaurantId, foodId) => {
  try {
    const response = await myApi.get(
      `/api/restaurants/${restaurantId}/menu/${foodId}`
    )
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
export const createByOwnerMenuItemRequest = async (restaurantId, body) => {
  try {
    const response = await myApi.post(
      `/api/restaurants/${restaurantId}/menu`,
      body
    )
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
export const updateByOwnerMenuItemRequest = async (
  restaurantId,
  foodId,
  body
) => {
  try {
    const response = await myApi.put(
      `/api/restaurants/${restaurantId}/menu/${foodId}`,
      body
    )
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export const deleteByOwnerMenuItemRequest = async (restaurantId, foodId) => {
  try {
    const response = await myApi.delete(
      `/api/restaurants/${restaurantId}/menu/${foodId}`
    )
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export const getMenuTypes = () => {
  return [
    { label: "Фаст-фуд", value: "Фаст-фуд" },
    { label: "Первый", value: "Первый" },
    { label: "Десерт", value: "Десерт" },
  ]
}
