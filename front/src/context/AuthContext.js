import { createContext, useEffect, useState } from "react"

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user")
    return savedUser ? JSON.parse(savedUser) : ""
  })
  const [userRole, setUserRole] = useState("user")

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      localStorage.setItem("user", JSON.stringify(user))
      setUserRole(user.role || "user")
    } else {
      localStorage.removeItem("user")
      setUserRole("user")
    }
  }, [user])

  return (
    <AuthContext.Provider value={{ user, setUser, userRole }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
