import CreateTableForm from "../moduls/CreateTableForm/CreateTableForm"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"
import CreateFormsContainer from "../components/CreateFormsContainer/CreateFormsContainer"

const CreateTablePage = () => {
  return (
    <PageContainer>
      <PageHeading location={"Создать столик"} preLocation={"Мои рестораны"} />
      <CreateFormsContainer>
        <CreateTableForm />
      </CreateFormsContainer>
    </PageContainer>
  )
}

export default CreateTablePage
