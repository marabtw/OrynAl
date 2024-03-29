import React from "react"
import CreateOwnerForm from "../moduls/CreateOwnerForm/CreateOwnerForm"
import PageHeading from "../ui/Heading/PageHeading"

const CreateOwner = () => {
  return (
    <div className="p-[50px]">
			<PageHeading location={"Создать владельца"} preLocation={"Владельцы"}/>
      <div className="px-[40px] py-[60px] border-none rounded-[10px] bg-white">
        <CreateOwnerForm />
      </div>
    </div>
  )
}

export default CreateOwner
