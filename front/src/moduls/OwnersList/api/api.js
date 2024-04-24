import myApi from "../../../app/lib/axios"

export const getAllOwners = async () => {
  try {
    const response = await myApi.get("/api/admin/owners")
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}

export const deleteOwner = async (ownerId) => {
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