import { Link } from "react-router-dom"

const ActionsContainer = ({ actions }) => {
  return (
    <div className="absolute top-full right-full flex flex-col gap-[5px] p-[10px] border-2 border-[#ebebeb] rounded-[5px] bg-white">
      {actions.map((action, index) =>
        action.hasOwnProperty("to") ? <Link to={action.to} className="hover:text-[#FF0000]">{action.action}</Link> : <h4 className="hover:text-[#FF0000] cursor-pointer" onClick={action.onClick}>{action.action}</h4>
      )}
    </div>
  )
}

export default ActionsContainer
