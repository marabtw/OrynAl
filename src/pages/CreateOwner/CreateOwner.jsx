import React from "react"
import CreateOwnerForm from "../../moduls/CreateOwnerForm/CreateOwnerForm"
import PageIndicatorHeading from "../../ui/Heading/PageIndicatorHeading"

const CreateOwner = () => {
  return (
    <div className="p-[50px]">
      <PageIndicatorHeading text={"Владельцы"} text2={"Создать владельца"} />
      <div className="px-[40px] py-[60px] border-none rounded-[10px] bg-white">
        <CreateOwnerForm />
      </div>
    </div>
  )
}

export default CreateOwner
