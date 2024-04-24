import { useContext, useEffect } from "react"
import { UIContext } from "../../app/Context/UIContext"
import { MoreVerticalIcon } from "../../ui/icons/icons"
import ContextMenu from "../ContextMenu/ContextMenu"

const ListItem = ({ elementData, menuActions, index }) => {
  const { openedContextMenuIndex, setOpenedContextMenuIndex } =
    useContext(UIContext)

  const handleContextMenu = () => {
    if (openedContextMenuIndex === index) {
      setOpenedContextMenuIndex(null)
    } else {
      setOpenedContextMenuIndex(index)
    }
  }

  const closeContextMenuFunction = () => {
    setOpenedContextMenuIndex(null)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openedContextMenuIndex === index &&
        !event.target.closest(".context-menu-wrapper")
      ) {
        closeContextMenuFunction()
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [openedContextMenuIndex])

  const renderValue = (key, value) => {
    if (key === "image") {
      return <img src={value} className="w-[38px] aspect-square rounded-full" />
    } else {
      return (
        <h4 className="flex">{statusMap[key] || availableMap[key] || value}</h4>
      )
    }
  }

  const renderMobileVersion = (key, value) => {
    if (key === "id") {
      return (
        <div key={key} className="flex justify-between">
          <h4 className="flex">{value}</h4>
          {renderContextMenu()}
        </div>
      )
    } else {
      return (
        <div key={key} className="flex justify-between gap-1 items-center">
          <h4>{rename(key)}</h4>
          {key === "image" ? (
            <img src={value} className="w-[38px] aspect-square rounded-full" />
          ) : (
            <h4 className="flex">
              {statusMap[key] || availableMap[key] || value}
            </h4>
          )}
        </div>
      )
    }
  }

  const renderContextMenu = () => {
    return (
      <div className="relative context-menu-wrapper max-md:text-[16px]">
        <MoreVerticalIcon
          className="cursor-pointer"
          onClick={handleContextMenu}
        />
        {openedContextMenuIndex === index && (
          <ContextMenu menuActions={menuActions} />
        )}
      </div>
    )
  }

  return (
    <>
      <li
        className={`grid p-[10px] py-[20px] rounded-[10px] bg-white max-md:hidden`}
        style={{
          gridTemplateColumns: `.5fr repeat(${
            Object.keys(elementData).length - 1
          }, 1fr) .4fr`,
        }}
      >
        {Object.keys(elementData)?.map((key) => (
          <div key={key} className="flex justify-center items-center">
            {renderValue(key, elementData[key])}
          </div>
        ))}
        <div className="flex justify-center items-center">
          {renderContextMenu()}
        </div>
      </li>
      <li className="md:hidden relative flex flex-col gap-2 p-[10px] py-[20px] rounded-[10px] bg-white overflow-hidden max-sm:text-[14px]">
        {Object.keys(elementData)?.map((key) =>
          renderMobileVersion(key, elementData[key])
        )}
      </li>
    </>
  )
}

const rename = (key) => translations[key] || key

const translations = {
  name: "Имя",
  surname: "Фамилия",
  callNumber: "Телефон",
  email: "Почта",
  address: "Адрес",
  city: "Город",
  owner: "Владелец",
  status: "Статус",
  image: "Фото",
  type: "Тип",
  capacity: "Вместимость",
  description: "Описание",
  price: "Цена",
  available: "В наличии",
}
const statusMap = {
	true: "Активный",
	false: "Неактивный",
}
const availableMap = {
	true: "Да",
	false: "Нет",
}

export default ListItem
