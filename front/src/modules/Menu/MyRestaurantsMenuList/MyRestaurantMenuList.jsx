import { useState, useEffect } from "react"
import { axios } from "@lib/axios"

import { ROUTERS } from "@router/Router.config"
import { getRestaurantMenuRequest, deleteByOwnerMenuItemRequest } from "../api"

import { useLoading, useToast } from "@hooks"
import { isArraysEqualByIdWithSet } from "@utils/index"
import { removeWildcard } from "@helpers"

import ListItem from "@components/ListItem/ListItem"
import ListCategories from "@components/ListCategories"
import MenuCategoriesSlider from "./components/MenuCategoriesSlider"
import Pagination from "@components/Pagination/Pagination"

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

const MyRestaurantMenuList = ({ restaurantId }) => {
  const setLoading = useLoading()
  const showNotification = useToast()

  const [menu, setMenu] = useState([])
  const [currentTypeOfMenu, setCurrentTypeOfMenu] = useState("")
  const [typesOfMenu, setTypesOfMenu] = useState([])
  const [filteredMenu, setFilteredMenu] = useState([])

  useEffect(() => {
    setLoading(true)
    const cancelToken = axios.CancelToken.source()

    getRestaurantMenuRequest({ restaurantId, cancelToken })
      .then(({ data }) => {
        setMenu(data)
        setTypesOfMenu(Object.keys(data))
        setCurrentTypeOfMenu(Object.keys(data)[0])
        showNotification("Данные успешно загружены", "success")
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          showNotification("Запрос был отменен", "warning")
        } else {
          showNotification(err.toString(), "error")
        }
      })
      .finally(() => {
        setLoading(false)
      })

    return () => {
      cancelToken.cancel()
    }
  }, [restaurantId])

  useEffect(() => {
    menu[currentTypeOfMenu]
      ? setFilteredMenu(
          menu[currentTypeOfMenu].map(
            ({ id, image, name, type, description, price, status }) => {
              return {
                id,
                image,
                name,
                type,
                description,
                price,
                foodStatus: status,
              }
            }
          )
        )
      : setFilteredMenu([])
  }, [currentTypeOfMenu])

  const deleteFoodById = async (foodId) => {
    setLoading(true)
    try {
      await deleteByOwnerMenuItemRequest(restaurantId, foodId)
      const { data } = await getRestaurantMenuRequest(restaurantId)
      setMenu(data)
      setTypesOfMenu(Object.keys(data))
      setCurrentTypeOfMenu(Object.keys(data)[0])
      showNotification("deleted", "success")
    } catch (err) {
      showNotification(err.toString(), "error")
    } finally {
      setLoading(false)
    }
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
      {filteredMenu?.length > 0 && (
        <MenuCategoriesSlider
          menuTypes={typesOfMenu}
          getCategory={(type) => {
            setCurrentTypeOfMenu(type)
          }}
        />
      )}
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

export default MyRestaurantMenuList
