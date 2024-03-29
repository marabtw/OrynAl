import CreateTableForm from "../moduls/CreateTableForm/CreateTableForm"
import PageHeading from "../ui/Heading/PageHeading"

const CreateTablePage = () => {
  return (
    <div className="px-[60px] py-[50px]">
			<PageHeading location={"Создать столик"} preLocation={"Мои рестораны"}/>
			<CreateTableForm/>
    </div>
  )
}

export default CreateTablePage
