import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setContextMenuOpenIndex,
  closeContextMenu,
} from "../../store/contextMenuSlice"
import { DotsVerticalIcon } from "../../ui/icons/icons"
import ContextMenu from "../ContextMenu/ContextMenu"

const rename = (value) => {
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
  return translations[value] || value
}

const ListItem = ({ elementData, menuActions, index }) => {
  const array = Object.entries(elementData)
  const dispatch = useDispatch()
  const openIndex = useSelector((state) => state.contextMenu.openIndex)

  const handleContextMenuToggle = () => {
    if (openIndex === index) {
      dispatch(closeContextMenu())
    } else {
      dispatch(setContextMenuOpenIndex(index))
    }
  }

  const closeContextMenuFunction = () => {
    dispatch(closeContextMenu())
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openIndex === index &&
        !event.target.closest(".context-menu-wrapper")
      ) {
        closeContextMenuFunction()
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [openIndex])

  const renderValue = (key, value) => {
    if (key === "image") {
      return <img src={value} className="w-[38px] aspect-square rounded-full" />
    } else {
      return (
        <h4 className="flex">
          {key === "status"
            ? value
              ? "Активный"
              : "Неактивный"
            : key === "available"
            ? value
              ? "Да"
              : "Нет"
            : value}
        </h4>
      )
    }
  }

  const renderContextMenu = () => {
    return (
      <div className="relative context-menu-wrapper">
        <DotsVerticalIcon
          className="cursor-pointer"
          onClick={handleContextMenuToggle}
        />
        {openIndex === index && <ContextMenu menuActions={menuActions} />}
      </div>
    )
  }

  const renderMobileVersion = (key, value) => {
    if (key === "id") {
      return (
        <div key={key} className="flex">
          <h4 className="flex">{value}</h4>
          <div className="absolute right-[10px] top-[20px]">
            <DotsVerticalIcon
              className="cursor-pointer text-[20px]"
              onClick={handleContextMenuToggle}
            />
            {openIndex === index && <ContextMenu menuActions={menuActions} />}
          </div>
        </div>
      )
    } else {
      return (
        <div key={key} className="grid grid-cols-[.5fr_1fr] gap-1 items-center">
          <h4>{rename(key)}</h4>
          {key === "image" ? (
            <img src={value} className="w-[38px] aspect-square rounded-full" />
          ) : (
            <h4 className="flex">
              {key === "status"
                ? value
                  ? "Активный"
                  : "Неактивный"
                : key === "available"
                ? value
                  ? "Да"
                  : "Нет"
                : value}
            </h4>
          )}
        </div>
      )
    }
  }

  return (
    <>
      <li
        className={`grid p-[10px] py-[20px] rounded-[10px] bg-white max-md:hidden`}
        style={{
          gridTemplateColumns: `.5fr repeat(${array.length - 1}, 1fr) .4fr`,
        }}
      >
        {array.map(([key, value]) => (
          <div key={key} className="flex justify-center items-center">
            {renderValue(key, value)}
          </div>
        ))}
        <div className="flex justify-center items-center">
          {renderContextMenu()}
        </div>
      </li>
      <li className="md:hidden relative flex flex-col gap-2 p-[10px] py-[20px] rounded-[10px] bg-white overflow-hidden max-sm:text-[14px]">
        {array.map(([key, value]) =>
          renderMobileVersion(key, value)
        )}
      </li>
    </>
  )
}

export default ListItem
