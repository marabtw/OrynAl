import { useContext } from "react"
import { AuthContext } from "../../app/Context/AuthContext"
import UserHeader from "./components/UserHeader"
import OwnerHeader from "./components/OwnerHeader"
import AdminHeader from "./components/AdminHeader"

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
        return null
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
