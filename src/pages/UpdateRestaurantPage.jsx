import UpdateRestaurantForm from "../moduls/UpdateRestaurantForm/UpdateRestaurantForm"
import PageHeading from "../ui/Heading/PageHeading"

const UpdateRestaurantPage = () => {
  return (
    <div className="px-[50px] py-[50px]">
			<PageHeading location={"Изменить Ресторан"} preLocation={"Мои рестораны"}/>
			<UpdateRestaurantForm/>
    </div>
  )
}

export default UpdateRestaurantPage
