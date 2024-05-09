import myApi from "@lib/axios"

export const getAllTablesRequest = async (restaurantId, param) => {
  try {
    const response = await myApi.get(
      `/api/restaurants/${restaurantId}/tables`,
      {
        params: {
          page: param.pageIndex,
          limit: param.limit,
        },
      }
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
export const getByOwnerTableRequest = async (restaurantId, tableId) => {
  try {
    const response = await myApi.get(
      `/api/restaurants/${restaurantId}/tables/${tableId}`
    )
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
export const createByOwnerTableRequest = async (restaurantId, body) => {
  try {
    const response = await myApi.post(
      `/api/restaurants/${restaurantId}/tables`,
      body
    )
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
export const updateByOwnerTableRequest = async (
  restaurantId,
  tableId,
  body
) => {
  try {
    const response = await myApi.put(
      `/api/restaurants/${restaurantId}/tables/${tableId}`,
      body
    )
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
export const deleteByOwnerTableRequest = async (restaurantId, tableId) => {
  try {
    const response = await myApi.delete(
      `/api/restaurants/${restaurantId}/tables/${tableId}`
    )
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export const getTableCapacity = () => {
  return [
    { label: "5 человек", value: 5 },
    { label: "10 человек", value: 10 },
    { label: "15 человек", value: 15 },
    { label: "20 человек", value: 20 },
    { label: "25 человек", value: 25 },
    { label: "30 человек", value: 30 },
  ]
}
export const getTableType = () => {
  return [
    { label: "Тапчан", value: "Тапчан" },
    { label: "Стол", value: "Стол" },
  ]
}
