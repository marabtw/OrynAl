import UpdateMenuForm from "../moduls/UpdateMenuForm/UpdateMenuForm"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"

const UpdateMenuPage = () => {
  return (
    <PageContainer>
      <PageHeading location={"Изменить Меню"} preLocation={"Мои рестораны"} />
      <UpdateMenuForm />
    </PageContainer>
  )
}

export default UpdateMenuPage
