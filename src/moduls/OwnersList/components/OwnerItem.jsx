import { useState } from "react"
import { DotsVerticalIcon } from "../../../ui/icons/icons"
import ActionsContainer from "../../../components/ActionsContainer/ActionsContainer"

const OwnerItem = ({ item }) => {
  const [show, setShow] = useState(false)
  const [actions, setActions] = useState([
    {
      action: "Удалить",
      onClick: () => console.log("object"),
    },
  ])

  return (
    <li className="grid grid-cols-[.7fr_repeat(3,1fr)_.4fr] p-[10px] py-[20px] rounded-[10px] bg-white">
      <h4 className="flex items-center">{item.id}</h4>
      <h4 className="flex justify-center items-center">{item.name}</h4>
      <h4 className="flex justify-center items-center">{item.callNumber}</h4>
      <h4 className="flex justify-center items-center">{item.email}</h4>
      <div className="flex justify-center items-center">
        <div className="relative">
          <DotsVerticalIcon
            className="cursor-pointer"
            onClick={() => setShow(!show)}
          />
          {show && <ActionsContainer actions={actions} />}
        </div>
      </div>
    </li>
  )
}

export default OwnerItem
