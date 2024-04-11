import MyProfile from "../moduls/MyProfile/MyProfile"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"

const MyProfilePage = () => {
  return (
    <PageContainer>
      <PageHeading location={"Мой аккаунт"} />
      <MyProfile />
    </PageContainer>
  )
}

export default MyProfilePage
