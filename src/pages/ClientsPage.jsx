import { useState } from "react"
import ClientsList from "../moduls/ClientsList/ClientsList"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"

const ClientsPage = () => {
  const [data, setData] = useState([
    {
      id: "1223432412341",
      name: "Батырбек",
      surname: "Кайыпбай",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
    {
      id: "1223432412342",
      name: "Батырбек",
      surname: "Кайыпбай",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
    {
      id: "1223432412343",
      name: "Батырбек",
      surname: "Кайыпбай",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
    {
      id: "1223432412344",
      name: "Батырбек",
      surname: "Кайыпбай",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
  ])

  return (
    <PageContainer>
      <PageHeading location={"Клиенты"} />
      <ClientsList data={data} />
    </PageContainer>
  )
}

export default ClientsPage
