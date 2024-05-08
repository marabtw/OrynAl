import myApi from "@lib/axios"

export const searchByOwnerRestaurants = async (searchQuery) => {
  try {
    const response = await myApi.get(`/api/restaurants?q=${searchQuery}`)
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}