import { useContext } from "react"
import { Link } from "react-router-dom"
import { UIContext } from "@context/UIContext"

const ContextMenu = ({ menuActions = [], position, index = -1 }) => {
  const { setOpenedContextMenuIndex } = useContext(UIContext)
  const closeContextMenuFunction = () => {
    setOpenedContextMenuIndex(null)
  }

  return (
    <div
      className={`absolute ${
        position ? position : "top-full right-full"
      }  flex flex-col gap-[5px] p-[10px] border-2 border-[#ebebeb] rounded-[5px] bg-white z-50`}
    >
      {menuActions.map((action, index) =>
        action.hasOwnProperty("to") ? (
          <Link
            key={action.action + `${Math.random() * 99999999}`}
            to={action.to}
            className="hover:text-[#FF0000]"
            onClick={() => closeContextMenuFunction()}
          >
            {action.action}
          </Link>
        ) : (
          <h4
            key={action.action + `${Math.random() * 99999999}`}
            className="hover:text-[#FF0000] cursor-pointer"
            onClick={() => {
              action.onClick()
              closeContextMenuFunction()
            }}
          >
            {action.action}
          </h4>
        )
      )}
    </div>
  )
}

export default ContextMenu
