import React, { useState } from "react"
import ClientsList from "../moduls/ClientsList/ClientsList"
import PageHeading from "../ui/Heading/PageHeading"

const ClientsPage = () => {
  const [data, setData] = useState([
    {
      id: "122343241234",
      name: "Батырбек",
      surname: "Кайыпбай",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
    {
      id: "122343241234",
      name: "Батырбек",
      surname: "Кайыпбай",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
    {
      id: "122343241234",
      name: "Батырбек",
      surname: "Кайыпбай",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
    {
      id: "122343241234",
      name: "Батырбек",
      surname: "Кайыпбай",
      callNumber: "+ 778 922 01 01",
      email: "+7778 891 32 01",
    },
  ])

  return (
    <div className="p-[60px]">
      <div className="mb-[40px]">
        <PageHeading text={"Клиенты"} />
      </div>
      <ClientsList data={data} />
    </div>
  )
}

export default ClientsPage
