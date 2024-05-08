import { useState, useEffect } from "react"

import {
  getByOwnerRestaurantMenuRequest,
  deleteByOwnerMenuItemRequest,
} from "../api/api"

import ListItem from "@components/ListItem/ListItem"
import ListCategories from "@components/ListCategories/ListCategories"
import { removeWildcard } from "@helpers/helpers"
import { ROUTERS } from "@router/Router.config"
import MenuCategoriesSlider from "./components/MenuCategoriesSlider"

const categories = [
  "ID",
  "Фото",
  "Название",
  "Тип блюда",
  "Описание",
  "Цена",
  "В наличии",
  "Действие",
]

const MyRestaurantsMenuList = ({ restaurantId }) => {
  const [menu, setMenu] = useState([])
  const [currentTypeOfMenu, setCurrentTypeOfMenu] = useState("")
  const [typesOfMenu, setTypesOfMenu] = useState([])
  const [filteredMenu, setFilteredMenu] = useState([])

  useEffect(() => {
    getByOwnerRestaurantMenuRequest(restaurantId)
      .then((res) => {
        setMenu(res.data)
        setTypesOfMenu(Object.keys(res.data))
        setCurrentTypeOfMenu(Object.keys(res.data)[0])
      })
      .catch((error) => console.log(error))
  }, [restaurantId])

  useEffect(() => {
    setFilteredMenu(
      menu[currentTypeOfMenu]?.map(({ id, name, type, description, price, available }) => {
        return {
          id,
          e1: "no image",
          name,
          type,
          description,
          price,
          available,
        }
      })
    )
  }, [currentTypeOfMenu])

  const deleteFoodById = async (foodId) => {
    await deleteByOwnerMenuItemRequest(restaurantId, foodId)
    getByOwnerRestaurantMenuRequest(restaurantId)
      .then((res) => {
        setMenu(res.data)
        setTypesOfMenu(Object.keys(res.data))
        setCurrentTypeOfMenu(Object.keys(res.data)[0])
      })
      .catch((error) => console.log(error))
  }

  const getContextMenuItems = (id) => {
    return [
      {
        action: "Изменить",
        to: `${removeWildcard(
          ROUTERS.RestaurantMenu.root.replace(":restaurantId", restaurantId)
        )}${ROUTERS.RestaurantMenu.updateFood.replace(":menuId", id)}`,
      },
      {
        action: "Удалить",
        onClick: () => deleteFoodById(restaurantId, id),
      },
    ]
  }

  return (
    <ul className="flex flex-col gap-[20px]">
      <ListCategories categories={categories} />
      <MenuCategoriesSlider
        menuTypes={typesOfMenu}
        getCategory={(type) => {
          setCurrentTypeOfMenu(type)
        }}
      />
      {filteredMenu?.length > 0 ? (
        filteredMenu.map((itemData, index) => (
          <ListItem
            key={itemData.id}
            elementData={itemData}
            index={index}
            menuActions={getContextMenuItems(itemData.id)}
          />
        ))
      ) : (
        <div className="flex justify-center items-center text-[#b0b0b0]">
          No menu items
        </div>
      )}
    </ul>
  )
}

export default MyRestaurantsMenuList
