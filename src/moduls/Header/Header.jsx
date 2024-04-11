import { role } from "../../data/mainData"
import UserHeader from "./components/UserHeader"
import ManagerHeader from "./components/ManagerHeader"
import AdminHeader from "./components/AdminHeader"

const Header = () => {

  const checkUserRole = (userRole) => {
    switch (userRole) {
      case "user":
        return <UserHeader />
      case "manager":
        return <ManagerHeader />
      case "admin":
        return <AdminHeader />
      default:
        return <UserHeader />
    }
  }

  return (
    <div className={`sticky top-0 w-full h-[120px] px-[2%] bg-white rounded-bl-[50px] rounded-br-[50px] shadow-[0px_4px_10px_rgba(0,0,0,.25)] z-[9999] 
		max-md:h-[60px] max-md:px-[4%] max-md:rounded-bl-[25px] max-md:rounded-br-[25px]`}>
      {checkUserRole(role)}
    </div>
  )
}

export default Header
