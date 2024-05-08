import { useEffect, useState } from "react"
import {
	getProfileRequest,
  updateProfileRequest,
  deleteProfileRequest,
} from "../api/api"

import UserDetails from "./components/UserDetails"
import UserUpdateForm from "./components/UserUpdateForm"

const MyProfile = () => {
  const [profileData, setProfileData] = useState({})

  useEffect(() => {
    getProfileRequest()
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
    updateProfileRequest(data)
      .then((res) => {
        console.log("success: ", res)
      })
      .catch((error) => {
        console.log("error: ", error)
      })
  }
  const deleteUser = () => {
    deleteProfileRequest()
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="flex justify-between gap-[30px] px-[40px] py-[60px] bg-white rounded-[10px] max-md:flex-col max-lg:py-[30px] max-lg:px-[10px]">
      <UserDetails currentUserData={profileData} deleteUser={deleteUser} />
      <UserUpdateForm
        currentUserData={profileData}
        updateUserData={updateUserData}
      />
    </div>
  )
}

export default MyProfile
