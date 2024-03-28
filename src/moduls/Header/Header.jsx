import { role } from "../../data/mainData"
import UserHeader from "./components/UserHeader"
import CompanyHeader from "./components/CompanyHeader"
import AdminHeader from "./components/AdminHeader"

const Header = () => {

  const checkUserRole = (userRole) => {
    switch (userRole) {
      case "user":
        return <UserHeader />
      case "company":
        return <CompanyHeader />
      case "admin":
        return <AdminHeader />
      default:
        return <UserHeader />
    }
  }

  return (
    <div className={`sticky top-0 w-full z-[9999]`}>
      {checkUserRole(role)}
    </div>
  )
}

export default Header
