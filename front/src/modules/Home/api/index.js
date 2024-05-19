import myApi from "@lib/axios"

import { getAllRestaurantsRequest } from "@modules/Restaurants/api"

export { getAllRestaurantsRequest }

export const searchRestaurants = async ({ searchQuery, cancelToken }) => {
  const response = await myApi.get(`/api/restaurants?q=${searchQuery}`, {
    cancelToken: cancelToken ? cancelToken.token : undefined,
  })
  return response.data
}
