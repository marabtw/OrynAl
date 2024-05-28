import { useContext } from "react"
import { Link } from "react-router-dom"
import { UIContext } from "src/shared/context/UIContext"

const ContextMenu = ({ menuActions = [], position }) => {
  const { setOpenedContextMenuIndex } = useContext(UIContext)
  const closeContextMenuFunction = () => {
    setOpenedContextMenuIndex(null)
  }

  return (
    <div
      className={`absolute ${
        position ? position : "top-full right-full"
      }  flex flex-col gap-[5px] min-w-max p-[10px] border-2 border-[#ebebeb] rounded-[5px] bg-white z-50
			max-md:py-[5px] max-md:text-[14px]`}
    >
      {menuActions.map((action) =>
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
