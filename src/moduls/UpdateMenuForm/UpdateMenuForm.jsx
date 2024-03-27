import { useState } from "react"
import Button from "../../ui/Button/Button"
import { dataMenuUpdate } from "../../data/myRestaurantData"
import Form from "./components/Form"
import InfoPanel from "../../components/InfoPanel/InfoPanel"

const UpdateMenuForm = () => {
  const [data, setData] = useState(dataMenuUpdate)
  return (
    <div className="grid grid-cols-2 gap-10 bg-white px-[40px] py-[80px] font-poppins rounded-[10px]">
      <div className="flex flex-col gap-[30px] w-full">
        <h3 className="text-[20px] font-[600] leading-[30px]">Изменить меню</h3>
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
				<div className="grid grid-cols-2 gap-[20px]">
					
        <InfoPanel label={"Цена:"} value={`${data.price}`} />
        <InfoPanel label={"Статус:"} value={`${data.status}`} />
				</div>
				<Button text="Удалить" className={"mx-auto"}/>
      </div>
      <Form data={data} />
    </div>
  )
}

export default UpdateMenuForm
