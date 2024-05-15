import ClientsList from "../Clients/ClientsList/ClientsList"
import PageWrapper from "@components/PageWrapper"
import PageHeading from "@ui/Heading/PageHeading"

const ClientsPage = () => {
  return (
    <PageWrapper>
      <PageHeading location={"Клиенты"} />
      <ClientsList />
    </PageWrapper>
  )
}

export default ClientsPage
