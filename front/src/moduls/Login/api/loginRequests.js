import myApi from "../../../app/lib/axios"

export const signin = async (email, password) => {
  try {
    const response = await myApi.post("/api/auth/login", { email, password })
    return response
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export const signup = async (name, surname, email, phone, password) => {
  try {
    const response = await myApi.post("/api/auth/register", {
      name,
      surname,
      email,
      phone,
      password,
    })
    return response
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export const refresh = async () => {
  try {
    const response = await myApi.get("/refresh")
    return response.data
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}
