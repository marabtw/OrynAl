import CreateMenuForm from "../moduls/CreateMenuForm/CreateMenuForm"
import PageHeading from "../ui/Heading/PageHeading"

const CreateMenu = () => {
  return (
    <div className="px-[60px] py-[50px]">
      <PageHeading location={"Создать меню"} preLocation={"Мои рестораны"} />
      <CreateMenuForm />
    </div>
  )
}

export default CreateMenu
