import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { axios } from "@lib/axios"

import { AuthContext } from "@context/AuthContext"
import { ROUTERS } from "@router/Router.config"
import {
  getByAdminRestaurantRequest,
  updateByAdminRestaurantRequest,
  updateByOwnerRestaurantRequest,
  deleteByAdminRestaurantRequest,
  getRestaurantRequest,
} from "../../api"

import { useLoading, useToast } from "@hooks"
import { removeWildcard } from "@helpers"
import { isObjectEqual, formatTimeString } from "@utils"

import PreviousDataDisplay from "@components/PreviousDataDisplay"
import UpdateFormsContainer from "@components/UpdateFormsContainer"
import Form from "./components/Form"
import RestaurantImagesSlider from "./components/RestaurantImagesSlider"
import Button from "@ui/Button/Button"

const UpdateRestaurantForm = () => {
  const { restaurantId } = useParams()
  const navigate = useNavigate()
  const setLoading = useLoading()
  const showNotification = useToast()

  const { userRole } = useContext(AuthContext)
  const [restaurantData, setRestaurantData] = useState([])

  const [dataForUpdate, setDataForUpdate] = useState({
    name: "",
    address: "",
    description: "",
    city: "",
    modeFrom: "",
    modeTo: "",
    can_work: false,
    live_music: false,
    banquet_hall: false,
    hookah: false,
    unlimited_beer: false,
    rainy_rhythm: false,
    kids_playroom: false,
    own_confectioner: false,
    status: true,
  })

  useEffect(() => {
    setLoading(true)
    const cancelToken = axios.CancelToken.source()

    const getData =
      userRole === "admin" ? getByAdminRestaurantRequest : getRestaurantRequest
    getData({ restaurantId, cancelToken })
      .then(({ data }) => {
        setRestaurantData(data)
        showNotification("getted", "success")
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
  }, [])

  const UpdateRestaurantData = () => {
    const updatedData = {
      ...restaurantData,
      ...Object.entries(dataForUpdate).reduce((acc, [key, value]) => {
        if (value !== "") {
          acc[key] = value
        }
        return acc
      }, {}),
    }

    if (isObjectEqual(updatedData, restaurantData)) {
      showNotification("Данные не изменились", "info")
      return
    }

    setLoading(true)

    const updateRequest =
      userRole === "admin"
        ? updateByAdminRestaurantRequest
        : updateByOwnerRestaurantRequest

    const navigateAfter =
      userRole === "admin"
        ? `${removeWildcard(ROUTERS.Management.root)}${
            ROUTERS.Management.allRestaurants
          }`
        : `${removeWildcard(ROUTERS.Restaurant.root)}${
            ROUTERS.Restaurant.myRestaurants
          }`

    updateRequest(restaurantId, updatedData)
      .then(() => {
        showNotification("Успешно обновлено", "success")
        navigate(navigateAfter)
      })
      .catch((err) => {
        showNotification(err.toString(), "error")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const deleteRestaurantData = () => {
    setLoading(true)
    deleteByAdminRestaurantRequest(restaurantId)
      .then(() => {
        showNotification("deleted", "success")
        navigate(
          `${removeWildcard(ROUTERS.Management.root)}${
            ROUTERS.Management.allRestaurants
          }`
        )
      })
      .catch((err) => {
        showNotification(err.toString(), "error")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const renameServices = () => {
    const services = []
    if (restaurantData.can_work) services.push("Место, где можно поработать")
    if (restaurantData.live_music) services.push("Живая музыка")
    if (restaurantData.banquet_hall) services.push("Банкетный зал")
    if (restaurantData.hookah) services.push("Кальянная")
    if (restaurantData.unlimited_beer)
      services.push("Бар, где пиво без границ ")
    if (restaurantData.rainy_rhythm) services.push("Под ритмом диджея ")
    if (restaurantData.kids_playroom)
      services.push("С детской игровой комнатой")
    if (restaurantData.own_confectioner) services.push("Своя кондитерская")
    return services
  }

  return (
    <UpdateFormsContainer>
      <div className="flex flex-col justify-between gap-[30px] w-full max-md:gap-[15px]">
        <h3 className="text-[20px] font-[600] max-md:text-center">
          Изменить ресторан
        </h3>
        <div className="flex justify-between gap-[20px]">
          <div className="flex flex-col justify-between gap-[10px] w-full ">
            <PreviousDataDisplay label={"ID:"} value={restaurantData?.id} />
            <PreviousDataDisplay
              label={"Название:"}
              value={restaurantData?.name}
            />
            <PreviousDataDisplay
              label={"Адрес:"}
              value={restaurantData?.address}
            />
          </div>
          <div className="max-w-[50%] w-[350px] rounded-[20px] border overflow-hidden">
            {restaurantData.image && (
              <img
                src={restaurantData?.image}
                alt=""
                className="w-[100%] h-full bg-cover"
              />
            )}
          </div>
        </div>
        <RestaurantImagesSlider images={restaurantData.images} />
        <PreviousDataDisplay
          label={"Описание:"}
          value={restaurantData.description}
        />
        <div className="flex justify-between gap-[20px]">
          <PreviousDataDisplay
            label={"Режим работы:"}
            value={`${formatTimeString(
              restaurantData.modeFrom
            )}-${formatTimeString(restaurantData.modeTo)}`}
          />
          <PreviousDataDisplay label={"Город:"} value={restaurantData.city} />
        </div>
        <PreviousDataDisplay
          label={"Сервис:"}
          value={
            renameServices().length > 0
              ? renameServices().join(" ")
              : "no service"
          }
        />
      </div>
      <Form restaurantData={restaurantData} setDataForUpdate={setDataForUpdate} />
      {userRole === "admin" ? (
        <Button
          text="Удалить"
          spacingClass={"mx-auto px-[120px] py-[20px]"}
          backgroundColor={"#FF5050"}
          onClick={deleteRestaurantData}
        />
      ) : (
        <div></div>
      )}
      <Button
        gradient={true}
        text="Изменить"
        spacingClass={"mx-auto px-[120px] py-[20px]"}
        onClick={UpdateRestaurantData}
      />
    </UpdateFormsContainer>
  )
}

export default UpdateRestaurantForm
