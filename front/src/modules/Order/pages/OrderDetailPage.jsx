import { useParams } from "react-router-dom"
import PageWrapper from "@components/PageWrapper/PageWrapper"
import OrderDetail from "../OrderDetail/OrderDetail"

const OrderDetailsPage = () => {
  const { id } = useParams()
  return (
    <PageWrapper>
      <OrderDetail id={id}/>
    </PageWrapper>
  )
}

export default OrderDetailsPage
