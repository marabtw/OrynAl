import myApi from "@lib/axios"
import { v4 as uuidv4 } from "uuid"

export const getByAdminAllOwnersRequest = async (page = 1, limit = 15) => {
  try {
    const response = await myApi.get(`/api/admin/owners`, {
      params: {
        page: page,
        limit: limit,
      },
    })
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export const createByAdminOwnerRequest = async (body) => {
  try {
    const response = await myApi.post("/api/admin/owners", body)
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export const deleteByAdminOwnerRequest = async (ownerId) => {
  if (!ownerId) {
    throw new Error("Owner not found")
  }
  try {
    const response = await myApi.delete(`/api/admin/owners/${ownerId}`)
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export const getByAdminAllRestaurantsRequest = async () => {
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

export const сreateByAdminRestaurantRequest = async (body) => {
  try {
    const response = await myApi.post("/api/admin/restaurants", body)
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export const deleteByAdminRestaurantRequest = async (restaurantId) => {
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

export const getByAdminAllClientsRequest = async (params) => {
  try {
    const response = await myApi.get("/api/admin/clients", {
      params: {
        page: params.pageIndex,
        limit: params.limit,
      },
    })
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export const deleteByAdminClientRequest = async (clientId) => {
  try {
    const response = await myApi.delete(`/api/admin/clients/${clientId}`)
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export const getAllServices = () => {
  return [
    { id: uuidv4(), name: "Место, где можно поработать" },
    { id: uuidv4(), name: "Под ритмом диджея" },
    { id: uuidv4(), name: "Живая музыка" },
    { id: uuidv4(), name: "Бар, где пиво без границ" },
    { id: uuidv4(), name: "Банкетный зал" },
    { id: uuidv4(), name: "С детской игровой комнатой" },
    { id: uuidv4(), name: "Кальянная" },
    { id: uuidv4(), name: "Своя кондитерская" },
  ]
}

export const getAllCities = () => {
  return [
    {
      label: "Astana",
      value: "Astana",
    },
    {
      label: "Almaty",
      value: "Almaty",
    },
    {
      label: "Aktau",
      value: "Aktau",
    },
  ]
}

export const getTimes = () => {
  const currentDate = new Date()

  currentDate.setMinutes(0)

  const options = []
  for (let hour = 0; hour < 24; hour++) {
    for (let minute of [0, 30]) {
      const dateCopy = new Date(currentDate.getTime())
      dateCopy.setHours(hour)
      dateCopy.setMinutes(minute)
      const isoString = dateCopy.toISOString()
      options.push({
        value: isoString,
        label: `${String(hour).padStart(2, "0")}:${String(minute).padStart(
          2,
          "0"
        )}`,
      })
    }
  }
  return options
}
