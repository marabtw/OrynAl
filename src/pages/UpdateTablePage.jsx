import UpdateRestaurantTable from "../moduls/UpdateRestaurantTable/UpdateRestaurantTable"
import PageHeading from "../ui/Heading/PageHeading"

const UpdateTablePage = () => {
	return (
    <div className="px-[60px] py-[50px]">
			<PageHeading location={"Изменить столик"} preLocation={"Мои рестораны"}/>
			<UpdateRestaurantTable/>
    </div>
  )
}

export default UpdateTablePage
