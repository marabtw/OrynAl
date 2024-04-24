import React from "react"
import CreateOwnerForm from "../moduls/CreateOwnerForm/CreateOwnerForm"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"
import CreateFormsContainer from "../components/CreateFormsContainer/CreateFormsContainer"

const CreateOwner = () => {
  return (
    <PageContainer>
      <PageHeading location={"Создать владельца"} preLocation={"Владельцы"} />
      <CreateFormsContainer>
        <CreateOwnerForm />
      </CreateFormsContainer>
    </PageContainer>
  )
}

export default CreateOwner
