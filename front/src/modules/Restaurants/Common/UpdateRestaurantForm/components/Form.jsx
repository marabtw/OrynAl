import FormCheckbox from "@ui/Field/FormCheckbox"
import FormInputTextWrapper from "@components/FormComponents/FormInputTextWrapper/FormInputTextWrapper"
import FormInputFileWrapper from "@components/FormComponents/FormInputFileWrapper/FormInputFileWrapper"
import FormSelectWrapper from "@components/FormComponents/FormSelectWrapper/FormSelectWrapper"
import FormSelect from "@ui/Select/FormSelect"
import { getAllCities, getAllServices } from "@modules/Management/api/api"

const Form = ({ dataForUpdate, setDataForUpdate }) => {
  const checkService = (service) => {
    if (service === "Место, где можно поработать") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        can_work: !dataForUpdate.can_work,
      }))
    } else if (service === "Под ритмом диджея") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        rainy_rhythm: !dataForUpdate.rainy_rhythm,
      }))
    } else if (service === "Живая музыка") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        live_music: !dataForUpdate.live_music,
      }))
    } else if (service === "Бар, где пиво без границ") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        unlimited_beer: !dataForUpdate.unlimited_beer,
      }))
    } else if (service === "Банкетный зал") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        banquet_hall: !dataForUpdate.banquet_hall,
      }))
    } else if (service === "С детской игровой комнатой") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        kids_playroom: !dataForUpdate.kids_playroom,
      }))
    } else if (service === "Кальянная") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        hookah: !dataForUpdate.hookah,
      }))
    } else if (service === "Своя кондитерская") {
      setDataForUpdate((prevState) => ({
        ...prevState,
        own_confectioner: !dataForUpdate.own_confectioner,
      }))
    }
  }

  return (
    <form className="flex flex-col gap-[30px] w-full px-[20px] py-[40px] border-[3px] border-[#ebebeb] rounded-[20px] ">
      <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
        <FormInputTextWrapper
          placeholder="Sandyq"
          label="Название:"
          onChange={(e) => {
            setDataForUpdate((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }}
        />
        <FormInputFileWrapper placeholder="Добавить логотип" label="Логотип:" />
      </div>
      <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
        <FormInputTextWrapper
          placeholder="Абай, 101"
          label="Адрес"
          onChange={(e) => {
            setDataForUpdate((prevState) => ({
              ...prevState,
              address: e.target.value,
            }))
          }}
        />
        <FormInputFileWrapper placeholder="Добавить фото" label="Фотографии:" />
      </div>
      <FormInputTextWrapper
        placeholder="Напишите краткое описание меню...."
        label="Описание"
        onChange={(e) => {
          setDataForUpdate((prevState) => ({
            ...prevState,
            description: e.target.value,
          }))
        }}
      />
      <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
        <div className="flex flex-col gap-[15px]">
          <h3 className="text-[15px] font-[600] left-[22.5px]">
            Режим работы ▼
          </h3>
          <div className="flex items-center gap-[10px]">
            <div className="w-1/2">
              <FormSelect
                placeholder={"10:00"}
                options={[{ value: "2006-01-02T15:04:05Z", label: "22.00" }]}
                onChange={(e) => {
                  setDataForUpdate((prevState) => ({
                    ...prevState,
                    modeFrom: e.value,
                  }))
                }}
              />
            </div>
            <p className="text-[#C6C6C6] text-[15px]">-</p>
            <div className="w-1/2">
              <FormSelect
                placeholder={"22:00"}
                options={[{ value: "2006-01-02T15:04:05Z", label: "22.00" }]}
                onChange={(e) => {
                  setDataForUpdate((prevState) => ({
                    ...prevState,
                    modeTo: e.value,
                  }))
                }}
              />
            </div>
          </div>
        </div>
        <FormSelectWrapper
          label={"Город"}
          placeholder={"Алматы"}
          options={getAllCities()}
          onChange={(e) => {
            setDataForUpdate((prevState) => ({
              ...prevState,
              city: e.value,
            }))
          }}
        />
      </div>
      <FormSelectWrapper
        label={"Статус русторана"}
        placeholder={"Активный"}
        options={[{label: "Активный",value: true}, {label: "Не активный",value: false}]}
        onChange={(e) => {
          setDataForUpdate((prevState) => ({
            ...prevState,
            status: e.value,
          }))
        }}
      />
      <div className="grid grid-cols-2 gap-[10px] max-md:grid-cols-1">
        {getAllServices().map((service) => (
          <FormCheckbox
            keyFor={service.id}
            label={service.name}
            onChange={() => checkService(service.name)}
          />
        ))}
      </div>
    </form>
  )
}
export default Form
