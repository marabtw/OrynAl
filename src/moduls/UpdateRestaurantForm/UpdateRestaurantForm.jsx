import { useState } from "react"
import Button from "../../ui/Button/Button"
import { dataServices, dataRestaurantUpdate } from "../../data/myRestaurantData"
import Form from "./components/Form"
import InfoPanel from "../../components/InfoPanel/InfoPanel"

const UpdateRestaurantForm = () => {
  const [data, setData] = useState(dataRestaurantUpdate)
  return (
    <div className="grid grid-cols-2 gap-x-7 gap-y-4 bg-white px-[40px] py-[80px] font-poppins rounded-[10px]">
      <div className="flex flex-col gap-[30px] w-full">
        <h3 className="text-[20px] font-[600] leading-[30px]">Изменить ресторан</h3>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between max-w-[50%] w-full ">
            <InfoPanel label={"ID:"} value={data.id} />
            <InfoPanel label={"Название:"} value={data.name} />
            <InfoPanel label={"Адрес:"} value={data.address} />
          </div>
          <img
            src={data.image}
            alt=""
            className="max-w-[50%] w-[350px] aspect-square rounded-[20px]"
          />
        </div>
        <div className="flex justify-between">
          {data.images.map((image) => (
            <img src={image} className="w-[32%] h-[150px] rounded-[20px]" />
          ))}
        </div>
        <InfoPanel label={"Описание:"} value={data.description} />
        <div className="flex justify-between gap-[20px]">
          <InfoPanel label={"Режим работы:"} value={data.workingHours} />
          <InfoPanel label={"Город:"} value={data.city} />
        </div>
        <InfoPanel label={"Сервис:"} value={data.services.join("; ")} />
      </div>
      <Form services={dataServices} data={data} />
			<div></div>
			<Button gradient={true} text="Изменить" className={"mx-auto px-[110px] py-[20px]"}/>
    </div>
  )
}

export default UpdateRestaurantForm
