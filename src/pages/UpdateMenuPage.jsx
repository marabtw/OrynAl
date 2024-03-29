import UpdateMenuForm from '../moduls/UpdateMenuForm/UpdateMenuForm'
import PageHeading from '../ui/Heading/PageHeading'

const UpdateMenuPage = () => {
	return (
		<div className="px-[60px] py-[50px]">
			<PageHeading location={"Изменить Меню"} preLocation={"Мои рестораны"}/>
			<UpdateMenuForm/>
    </div>
	)
}

export default UpdateMenuPage
