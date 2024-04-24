import { createContext, useEffect, useState } from "react"

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("")
  const [userRole, setUserRole] = useState("user")

  useEffect(() => {
    setUserRole(user?.role || "user")
  }, [user])

  return (
    <AuthContext.Provider value={{ user, setUser, userRole }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider }
