import { useState } from "react"
import OwnersList from "../moduls/OwnersList/OwnersList"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"

const OwnersPage = () => {
  const [data, setData] = useState([
    {
      id: "1235432sdfsd4",
      name: "Батырбек",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
    {
      id: "1235432sdfsd3",
      name: "Батырбек",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
    {
      id: "1235432sdfsd2",
      name: "Батырбек",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
    {
      id: "1235432sdfsd1",
      name: "Батырбек",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
  ])
  return (
    <PageContainer>
      <PageHeading
        location={"Владельцы"}
        to={"/my-restaurants/owners/create"}
      />
      <OwnersList data={data} />
    </PageContainer>
  )
}

export default OwnersPage
