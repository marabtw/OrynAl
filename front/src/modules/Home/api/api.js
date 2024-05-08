import myApi from "@lib/axios"

import { getAllRestaurantsRequest } from "@modules/Restaurants/api/api"

export { getAllRestaurantsRequest }


// export const getAllRestaurantsRequest = async () => {
//   try {
//     const response = await myApi.get(`/api/restaurants`)
//     return response.data
//   } catch (error) {
//     if (error.response) {
//       throw new Error(error.response.data.message)
//     } else {
//       throw new Error("Something went wrong")
//     }
//   }
// }