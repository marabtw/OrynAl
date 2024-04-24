import myApi from "../../../app/lib/axios"

export const postOwner = async (body) => {
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
