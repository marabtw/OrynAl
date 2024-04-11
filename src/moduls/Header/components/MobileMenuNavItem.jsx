import { Link } from "react-router-dom"

const MobileMenuNavItem = ({ item }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:text-red-400">
      {item.icon}
      <Link to={item.to} className="">
        {item.label}
      </Link>
    </div>
  )
}

export default MobileMenuNavItem
