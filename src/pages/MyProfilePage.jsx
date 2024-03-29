import MyProfile from "../moduls/MyProfile/MyProfile"
import PageHeading from "../ui/Heading/PageHeading"

const MyProfilePage = () => {
  return (
    <div className="px-[60px] py-[50px] font-poppins">
      <PageHeading location={"Мой аккаунт"} />
      <MyProfile />
    </div>
  )
}

export default MyProfilePage
