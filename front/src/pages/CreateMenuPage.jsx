import CreateMenuForm from "../moduls/CreateMenuForm/CreateMenuForm"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"
import CreateFormsContainer from "../components/CreateFormsContainer/CreateFormsContainer"

const CreateMenu = () => {
  return (
    <PageContainer>
      <PageHeading location={"Создать меню"} preLocation={"Мои рестораны"} />
      <CreateFormsContainer>
        <CreateMenuForm />
      </CreateFormsContainer>
    </PageContainer>
  )
}

export default CreateMenu
