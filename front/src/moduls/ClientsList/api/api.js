import myApi from "../../../app/lib/axios"

export const getClients = async () => {
  try {
    const response = await myApi.get("/api/admin/clients")
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export const deleteClient = async (clientId) => {
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
