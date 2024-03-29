import CreateRestaurantForm from "../moduls/CreateRestaurantForm/CreateRestaurantForm"
import PageHeading from "../ui/Heading/PageHeading"

const CreateRestaurantPage = () => {
  return (
    <div className="px-[40px] py-[60px]">
			<PageHeading location={"Создать ресторан"} preLocation={"Ресторан"}/>
      <div className="px-[40px] py-[60px] rounded-[10px] bg-white">
        <CreateRestaurantForm />
      </div>
    </div>
  )
}

export default CreateRestaurantPage
