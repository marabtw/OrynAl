import React, { useState } from "react"
import ClientsList from "../moduls/ClientsList/ClientsList"
import PageHeading from "../ui/Heading/PageHeading"

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
    <div className="px-[60px] py-[50px]">
      <PageHeading location={"Клиенты"} />
      <ClientsList data={data} />
    </div>
  )
}

export default ClientsPage
