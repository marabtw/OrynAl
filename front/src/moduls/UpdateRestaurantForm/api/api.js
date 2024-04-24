import myApi from "../../../app/lib/axios"

export const getRestaurantRequest = async (restaurantId) => {
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

export const putRestaurantDataRequest = async (restaurantId, body) => {
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

export const deleteRestaurantRequest = async (restaurantId) => {
  try {
    const response = await myApi.delete(
      `/api/admin/restaurants/${restaurantId}`
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
