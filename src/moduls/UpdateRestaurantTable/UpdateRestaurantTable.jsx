import { useState } from "react"
import Button from "../../ui/Button/Button"
import { dataTableUpdate } from "../../data/myRestaurantData"
import Form from "./components/Form"
import InfoPanel from "../../components/InfoPanel/InfoPanel"

const UpdateRestaurantTable = () => {
  const [data, setData] = useState(dataTableUpdate)
  return (
    <div className="grid grid-cols-2 gap-10 bg-white px-[40px] py-[80px] font-poppins rounded-[10px]">
      <div className="flex flex-col gap-[30px] w-full">
        <h3 className="text-[20px] font-[600] leading-[30px]">Изменить столик</h3>
        <div className="flex gap-[30px]">
          <div className="flex flex-col justify-between max-w-[50%] w-full ">
            <InfoPanel label={"ID:"} value={data.id} />
            <InfoPanel label={"Название:"} value={data.name} />
            <InfoPanel label={"Тип столика:"} value={data.type} />
          </div>
          <img
            src={data.image}
            alt=""
            className="max-w-[50%] w-[350px] aspect-square rounded-[20px]"
          />
        </div>
        <InfoPanel label={"Описание:"} value={data.description} />
        <InfoPanel label={"Вместимость:"} value={`${data.capacity} человек`} />
				<Button text="Удалить" backgroundColor={"bg-[#FF5050]"} className={"mx-auto px-[90px] py-[20px]"}/>
      </div>
      <Form data={data} />
    </div>
  )
}

export default UpdateRestaurantTable
