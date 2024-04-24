import { useEffect, useState } from "react"
import AccoutInfo from "./components/AccoutInfo"
import UpdateAccoutForm from "./components/UpdateAccoutForm"
import {
  getProfileData,
  updateProfileData,
  deleteProfileData,
} from "./api/profileRequest"

const MyProfile = () => {
  const [profileData, setProfileData] = useState({})

  useEffect(() => {
    getProfileData()
      .then((response) => {
        setProfileData(() => {
          return response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const updateUserData = (data) => {
    updateProfileData(data)
      .then((res) => {
        console.log("success: ", res)
      })
      .catch((error) => {
        console.log("error: ", error)
      })
  }
  const deleteUser = (id) => {
    deleteProfileData(id)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="flex justify-between gap-[30px] px-[40px] py-[60px] bg-white rounded-[10px] max-md:flex-col max-lg:py-[30px] max-lg:px-[10px]">
      <AccoutInfo currentUserData={profileData} deleteUser={deleteUser} />
      <UpdateAccoutForm
        currentUserData={profileData}
        updateUserData={updateUserData}
      />
    </div>
  )
}

export default MyProfile
