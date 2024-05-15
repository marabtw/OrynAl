import { useParams } from "react-router-dom"
import PageWrapper from "@components/PageWrapper"
import OrderDetail from "../OrderDetail"

const OrderDetailsPage = () => {
  const { restaurantId } = useParams()
  return (
    <PageWrapper>
      <OrderDetail id={restaurantId}/>
    </PageWrapper>
  )
}

export default OrderDetailsPage
