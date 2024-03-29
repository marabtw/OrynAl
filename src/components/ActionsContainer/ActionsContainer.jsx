import { Link } from "react-router-dom"
// [
// 	{
// 		action: "удалить",
// 		onClick: () => {},
// 	},
// 	{
// 		action: "посмотреть",
// 		to: "/"
// 	}
// ]

const ActionsContainer = ({ actions, position }) => {
  return (
    <div
      className={`absolute ${
        position ? position : "top-full right-full"
      }  flex flex-col gap-[5px] p-[10px] border-2 border-[#ebebeb] rounded-[5px] bg-white z-50`}
    >
      {actions.map((action, index) =>
        action.hasOwnProperty("to") ? (
          <Link key={action.action + `${Math.random() * 99999999}`} to={action.to} className="hover:text-[#FF0000]">
            {action.action}
          </Link>
        ) : (
          <h4
            key={action.action + `${Math.random() * 99999999}`}
            className="hover:text-[#FF0000] cursor-pointer"
            onClick={action.onClick}
          >
            {action.action}
          </h4>
        )
      )}
    </div>
  )
}

export default ActionsContainer
