import myApi from "@lib/axios"

export const getProfileRequest = async () => {
  try {
    const response = await myApi.get("/api/profile")
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}
export const updateProfileRequest = async (body) => {
  try {
    const response = await myApi.put("/api/profile", body)
    return response
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}
export const deleteProfileRequest = async () => {
  try {
    const response = await myApi.delete("/api/profile")
    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("Something went wrong")
    }
  }
}
