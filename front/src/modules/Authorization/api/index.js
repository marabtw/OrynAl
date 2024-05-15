import myApi from "@lib/axios"

export const signinRequest = async (email, password) => {
  const response = await myApi.post("/api/auth/login", { email, password })
  return response
}

export const signupRequest = async (name, surname, email, phone, password) => {
  const response = await myApi.post("/api/auth/register", {
    name,
    surname,
    email,
    phone,
    password,
  })
  return response
}

export const refreshTokenRequest = async () => {
  const response = await myApi.get("/refresh")
  return response.data
}
