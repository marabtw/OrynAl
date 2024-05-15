import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import Form from "./components/Form"
import { ROUTERS } from "@router/Router.config"
import { removeWildcard } from "@helpers"
import {
  getByOwnerMenuItemRequest,
  deleteByOwnerMenuItemRequest,
  updateByOwnerMenuItemRequest,
} from "../api"

import PreviousDataDisplay from "@components/PreviousDataDisplay"
import UpdateFormsContainer from "@components/UpdateFormsContainer"
import Button from "@ui/Button/Button"

const UpdateRestaurantMenu = ({ restaurantId }) => {
  const navigate = useNavigate()
  const { menuId } = useParams()
  const [menuItemData, setMenuItemData] = useState([])

  const [dataForUpdate, setDataForUpdate] = useState({
    name: "",
    type: "",
    description: "",
    price: "",
    status: "",
  })

  useEffect(() => {
    getByOwnerMenuItemRequest(restaurantId, menuId)
      .then((response) => {
        setMenuItemData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [restaurantId])

  const updateMenuItemData = () => {
    const updatedData = {
      ...menuItemData,
      ...Object.entries(dataForUpdate).reduce((acc, [key, value]) => {
        if (value !== "") {
          acc[key] = value
        }
        return acc
      }, {}),
    }
    updateByOwnerMenuItemRequest(restaurantId, menuId, updatedData)
      .then(() => {
        navigate(
          `${removeWildcard(
            ROUTERS.RestaurantMenu.root.replace(":restaurantId", restaurantId)
          )}${ROUTERS.RestaurantMenu.myRestaurantMenu}`
        )
      })
      .catch((error) => console.log(error))
  }

  const deleteTableData = () => {
    deleteByOwnerMenuItemRequest(restaurantId, menuId)
      .then(() => {
        navigate(
          `${removeWildcard(
            ROUTERS.RestaurantMenu.root.replace(":restaurantId", restaurantId)
          )}${ROUTERS.RestaurantMenu.myRestaurantMenu}`
        )
      })
      .catch((error) => console.log(error))
  }

  return (
    <UpdateFormsContainer>
      <div className="flex flex-col gap-[30px] w-full max-md:gap-[15px]">
        <h3 className="text-[20px] font-[600] leading-[30px]">Изменить меню</h3>
        <div className="flex gap-[20px] max-md:flex-col">
          <div className="flex flex-col justify-between gap-[10px] w-full max-md:gap-[15px]">
            <PreviousDataDisplay label={"ID:"} value={menuItemData.id} />
            <PreviousDataDisplay
              label={"Название:"}
              value={menuItemData.name}
            />
            <PreviousDataDisplay
              label={"Тип столика:"}
              value={menuItemData.type}
            />
          </div>
					{menuItemData.image ? (
            <img
              src={menuItemData.image}
              alt=""
              className="w-[350px] rounded-[20px] max-md:w-full max-md:h-[200px]"
            />
          ) : (
            <div className="w-[350px] border rounded-[20px]"></div>
          )}
        </div>
        <PreviousDataDisplay
          label={"Описание:"}
          value={menuItemData.description}
        />
        <div className="grid grid-cols-2 gap-[20px]">
          <PreviousDataDisplay
            label={"Цена:"}
            value={`${menuItemData.price}`}
          />
          <PreviousDataDisplay
            label={"Статус:"}
            value={`${menuItemData.status}`}
          />
        </div>
        <Button
          text="Удалить"
          backgroundColor="#FF5050"
          spacingClass={"mx-auto px-[110px] py-[20px]"}
          onClick={deleteTableData}
        />
      </div>
      <Form update={updateMenuItemData} setDataForUpdate={setDataForUpdate} />
    </UpdateFormsContainer>
  )
}

export default UpdateRestaurantMenu
