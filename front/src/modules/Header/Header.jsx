import { useContext } from "react"
import { AuthContext } from "@context/AuthContext"
import UserHeader from "./User/UserHeader"
import OwnerHeader from "./Owner/OwnerHeader"
import AdminHeader from "./Admin/AdminHeader"

const Header = () => {
  const { user, userRole } = useContext(AuthContext)

  const checkUserRole = () => {
    switch (userRole) {
      case "user":
        return <UserHeader user={user} />
      case "owner":
        return <OwnerHeader user={user} />
      case "admin":
        return <AdminHeader user={user} />
      default:
        return <UserHeader user={user} />
    }
  }

  return (
    <div
      className={`sticky top-0 w-full h-[120px] px-[2%] bg-white rounded-bl-[50px] rounded-br-[50px] shadow-[0px_4px_10px_rgba(0,0,0,.25)] z-[9999] 
		max-md:h-[60px] max-md:px-[4%] max-md:rounded-bl-[25px] max-md:rounded-br-[25px]`}
    >
      {checkUserRole()}
    </div>
  )
}

export default Header
