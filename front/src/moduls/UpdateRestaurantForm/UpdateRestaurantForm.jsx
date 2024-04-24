import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import Button from "../../ui/Button/Button"
import Form from "./components/Form"
import PreviousDataDisplay from "../../components/PreviousDataDisplay/PreviousDataDisplay"
import UpdateFormsContainer from "../../components/UpdateFormsContainer/UpdateFormsContainer"
import { AuthContext } from "../../app/Context/AuthContext"
import { useNavigate } from "react-router-dom"
import { ROUTERS } from "../../app/router/Router.config"
import {
  getRestaurantRequest,
  putRestaurantDataRequest,
  deleteRestaurantRequest,
} from "./api/api"

const UpdateRestaurantForm = () => {
  const navigate = useNavigate()
  const { restaurantId } = useParams()
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
  })

  useEffect(() => {
    getRestaurantRequest(restaurantId)
      .then((response) => {
        setRestaurantData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const deleteRestaurantData = () => {
    deleteRestaurantRequest(restaurantId)
      .then(() => {
        navigate(ROUTERS.Restaurants)
      })
      .catch((error) => console.log(error))
  }

  const UpdateRestaurantData = () => {
    const updatedUserData = {
      ...restaurantData,
      ...Object.entries(dataForUpdate).reduce((acc, [key, value]) => {
        if (value !== "") {
          acc[key] = value
        }
        return acc
      }, {}),
    }
    putRestaurantDataRequest(restaurantId, updatedUserData)
      .then(() => {
        navigate(ROUTERS.Restaurants)
      })
      .catch((error) => console.log(error))
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
        <h3 className="text-[20px] font-[600] leading-[30px] max-md:relative max-md:flex">
          Изменить ресторан
          <img
            src={restaurantData?.image}
            alt=""
            className="absolute right-0 top-0 w-[40px] rounded-full md:hidden"
          />
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
          <img
            src={restaurantData?.image}
            alt=""
            className="max-w-[50%] w-[350px] h-full rounded-[20px] max-md:hidden"
          />
        </div>
        <div className="flex justify-between">
          {restaurantData?.images?.map((image) => (
            <img
              key={image}
              src={image}
              className="w-[32%] max-h-[150px] rounded-[20px]"
            />
          ))}
        </div>
        <PreviousDataDisplay
          label={"Описание:"}
          value={restaurantData.description}
        />
        <div className="flex justify-between gap-[20px]">
          <PreviousDataDisplay
            label={"Режим работы:"}
            value={restaurantData.workingHours}
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
      <Form
        currentRestaurantData={restaurantData}
        dataForUpdate={dataForUpdate}
        setDataForUpdate={setDataForUpdate}
      />
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
