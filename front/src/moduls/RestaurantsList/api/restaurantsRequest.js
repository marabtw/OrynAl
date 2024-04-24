import myApi from "../../../app/lib/axios"

export const getRestaurants = async () => {
  try {
    const response = await myApi.get("/api/admin/restaurants")
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}