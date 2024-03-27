import { role } from "../../data/mainData"
import UserHeader from "./components/UserHeader"
import EmployeeHeader from "./components/EmployeeHeader"
import OwnerHeader from "./components/OwnerHeader"

const Header = () => {
  const checkUserRole = (userRole) => {
    switch (userRole) {
      case "user":
        return <UserHeader />
      case "employee":
        return <EmployeeHeader />
      case "owner":
        return <OwnerHeader />
      default:
        return <UserHeader />
    }
  }

  return checkUserRole(role)
}

export default Header
