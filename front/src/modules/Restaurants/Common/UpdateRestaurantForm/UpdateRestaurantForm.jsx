import { useEffect, useState, useContext, useCallback } from "react"
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
  getAllServicesRequest,
} from "../../api"

import { useLoading, useToast } from "@hooks"
import { removeWildcard } from "@helpers"
import {
  isObjectEqual,
  formatTimeString,
  isArraysEqualByIdWithSet,
} from "@utils"

import PreviousDataDisplay from "@components/PreviousDataDisplay/PreviousDataDisplay"
import UpdateFormsContainer from "@components/UpdateFormsContainer"
import Form from "./components/Form"
import RestaurantImagesSlider from "./components/RestaurantImagesSlider"
import Button from "@ui/Button/Button"

const UpdateRestaurantForm = () => {
  const { restaurantId } = useParams()
  const navigate = useNavigate()
  const setLoading = useLoading()
  const showNotification = useToast()

  const { user } = useContext(AuthContext)
  const [restaurantData, setRestaurantData] = useState([])
  const [services, setServices] = useState([])

  const [dataForUpdate, setDataForUpdate] = useState({
    name: "",
    address: "",
    description: "",
    city: "",
    modeFrom: "",
    modeTo: "",
    services: [],
    status: true,
  })

  useEffect(() => {
    const cancelTokenSource1 = axios.CancelToken.source()
    const cancelTokenSource2 = axios.CancelToken.source()

    const fetchServices = async () => {
      try {
        const { data } = await getAllServicesRequest({
          cancelToken: cancelTokenSource1.token,
        })
        if (data.length === 0) {
          if (services.length > 0) setServices([])
        } else {
          if (!isArraysEqualByIdWithSet(services, data)) {
            setServices(data)
          }
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          showNotification("Запрос был отменен", "warning")
        } else {
          showNotification(err.toString(), "error")
        }
      }
    }

    const fetchRestaurantData = async () => {
      try {
        const getData =
          user.role === "admin"
            ? getByAdminRestaurantRequest
            : getRestaurantRequest
        const { data } = await getData({
          restaurantId,
          cancelToken: cancelTokenSource2.token,
        })
        console.log(data)
        if (!isObjectEqual(restaurantData, data)) {
          console.log("object")
          setRestaurantData(data)
          setDataForUpdate(data)
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          showNotification("Запрос был отменен", "warning")
        } else {
          showNotification(err.toString(), "error")
        }
      }
    }

    const fetchData = async () => {
      setLoading(true)
      await Promise.all([fetchServices(), fetchRestaurantData()])
      showNotification("Данные успешно загрузились", "success")
      setLoading(false)
    }

    fetchData()

    return () => {
      cancelTokenSource1.cancel()
      cancelTokenSource2.cancel()
    }
  }, [restaurantId])

  const handleUpdateRestaurantData = useCallback(() => {
    if (isObjectEqual(dataForUpdate, restaurantData)) {
      showNotification("Данные не изменились", "info")
      return
    }

    setLoading(true)

    const updateRequest =
      user.role === "admin"
        ? updateByAdminRestaurantRequest
        : updateByOwnerRestaurantRequest

    const navigateAfter =
      user.role === "admin"
        ? `${removeWildcard(ROUTERS.Management.root)}${
            ROUTERS.Management.allRestaurants
          }`
        : `${removeWildcard(ROUTERS.Restaurant.root)}${
            ROUTERS.Restaurant.myRestaurants
          }`

    updateRequest(restaurantId, dataForUpdate)
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
  }, [restaurantId, user.role, dataForUpdate])

  const handleDeleteRestaurantData = useCallback(() => {
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
  }, [restaurantId])

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
            restaurantData?.services?.length > 0
              ? restaurantData.services
              : "no service"
          }
        />
      </div>
      <Form
        services={services}
        restaurantData={restaurantData}
        setDataForUpdate={setDataForUpdate}
      />
      {user.role === "admin" ? (
        <Button
          text="Удалить"
          spacingClass={"mx-auto px-[120px] py-[20px]"}
          backgroundColor={"#FF5050"}
          onClick={handleDeleteRestaurantData}
        />
      ) : (
        <div></div>
      )}
      <Button
        gradient={true}
        text="Изменить"
        spacingClass={"mx-auto px-[120px] py-[20px]"}
        onClick={handleUpdateRestaurantData}
      />
    </UpdateFormsContainer>
  )
}

export default UpdateRestaurantForm
