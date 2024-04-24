import { useState } from "react"
import Button from "../../ui/Button/Button"
import { dataTableUpdate } from "../../data/myRestaurantData"
import Form from "./components/Form"
import PreviousDataDisplay from "../../components/PreviousDataDisplay/PreviousDataDisplay"
import UpdateFormsContainer from "../../components/UpdateFormsContainer/UpdateFormsContainer"

const UpdateRestaurantTable = () => {
  const [data, setData] = useState(dataTableUpdate)
  return (
    <UpdateFormsContainer>
      <div className="flex flex-col gap-[30px] w-full max-md:gap-[15px]">
        <h3 className="text-[20px] font-[600] leading-[30px]">
          Изменить столик
        </h3>
        <div className="flex justify-between gap-[20px] max-md:flex-col">
          <div className="flex flex-col justify-between gap-[10px] w-full max-md:gap-[15px]">
            <PreviousDataDisplay label={"ID:"} value={data.id} />
            <PreviousDataDisplay label={"Название:"} value={data.name} />
            <PreviousDataDisplay label={"Тип столика:"} value={data.type} />
          </div>
          <img
            src={data.image}
            alt=""
            className="w-[350px] aspect-square rounded-[20px] max-md:w-full max-md:h-[200px]"
          />
        </div>
        <PreviousDataDisplay label={"Описание:"} value={data.description} />
        <PreviousDataDisplay label={"Вместимость:"} value={`${data.capacity} человек`} />
        <Button
          text="Удалить"
          backgroundColor={"#FF5050"}
          spacingClass={"mx-auto px-[110px] py-[20px]"}
        />
      </div>
      <Form data={data} />
    </UpdateFormsContainer>
  )
}

export default UpdateRestaurantTable
