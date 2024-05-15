import myApi from "@lib/axios"

export const getAllTablesRequest = async ({
  restaurantId,
  params,
  cancelToken,
}) => {
  const quetyParams = params
    ? {
        page: params.pageIndex,
        limit: params.limit,
      }
    : {}
  const response = await myApi.get(`/api/restaurants/${restaurantId}/tables`, {
    params: quetyParams,
    cancelToken: cancelToken ? cancelToken.token : undefined,
  })
  return response.data
}

export const getByOwnerTableRequest = async ({
  restaurantId,
  tableId,
  cancelToken,
}) => {
  const response = await myApi.get(
    `/api/restaurants/${restaurantId}/tables/${tableId}`,
    {
      cancelToken: cancelToken ? cancelToken.token : undefined,
    }
  )
  return response.data
}

export const createByOwnerTableRequest = async (restaurantId, body) => {
  const response = await myApi.post(
    `/api/restaurants/${restaurantId}/tables`,
    body
  )
  return response.data
}

export const updateByOwnerTableRequest = async ({
  restaurantId,
  tableId,
  body,
}) => {
  const response = await myApi.put(
    `/api/restaurants/${restaurantId}/tables/${tableId}`,
    body
  )
  return response.data
}

export const deleteByOwnerTableRequest = async ({ restaurantId, tableId }) => {
  const response = await myApi.delete(
    `/api/restaurants/${restaurantId}/tables/${tableId}`
  )
  return response.data
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
