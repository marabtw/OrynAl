import { useState } from "react"
import Button from "../../ui/Button/Button"
import { dataServices, dataRestaurantUpdate } from "../../data/myRestaurantData"
import Form from "./components/Form"
import PreviousDataDisplay from "../../components/PreviousDataDisplay/PreviousDataDisplay"
import UpdateFormsContainer from "../../components/UpdateFormsContainer/UpdateFormsContainer"

const UpdateRestaurantForm = () => {
  const [data, setData] = useState(dataRestaurantUpdate)
  return (
    <UpdateFormsContainer>
      <div className="flex flex-col gap-[30px] w-full max-md:gap-[15px]">
        <h3 className="text-[20px] font-[600] leading-[30px] max-md:relative max-md:flex">
          Изменить ресторан
					<img
            src={data.image}
            alt=""
            className="absolute right-0 top-0 w-[40px] rounded-full md:hidden"
          />
        </h3>
        <div className="flex justify-between gap-[20px]">
          <div className="flex flex-col justify-between gap-[10px] w-full ">
            <PreviousDataDisplay label={"ID:"} value={data.id} />
            <PreviousDataDisplay label={"Название:"} value={data.name} />
            <PreviousDataDisplay label={"Адрес:"} value={data.address} />
          </div>
          <img
            src={data.image}
            alt=""
            className="max-w-[50%] w-[350px] h-full rounded-[20px] max-md:hidden"
          />
        </div>
        <div className="flex justify-between">
          {data.images.map((image) => (
            <img
              key={image}
              src={image}
              className="w-[32%] max-h-[150px] rounded-[20px]"
            />
          ))}
        </div>
        <PreviousDataDisplay label={"Описание:"} value={data.description} />
        <div className="flex justify-between gap-[20px]">
          <PreviousDataDisplay label={"Режим работы:"} value={data.workingHours} />
          <PreviousDataDisplay label={"Город:"} value={data.city} />
        </div>
        <PreviousDataDisplay label={"Сервис:"} value={data.services.join("; ")} />
      </div>
      <Form services={dataServices} data={data} />
      <div></div>
      <Button
        gradient={true}
        text="Изменить"
        spacingClass={"mx-auto px-[120px] py-[20px]"}
      />
    </UpdateFormsContainer>
  )
}

export default UpdateRestaurantForm
