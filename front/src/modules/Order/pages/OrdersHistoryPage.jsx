import OrdersHistory from "../OrdersHistory/OrdersHistory"
import PageWrapper from "@components/PageWrapper"
import PageHeading from "@ui/Heading/PageHeading"
import { useParams } from "react-router-dom"

const OrdersHistoryPage = () => {
  const { restaurantId } = useParams()
  return (
    <PageWrapper>
      <PageHeading location={"История заказов"} />
      <OrdersHistory restaurantId={restaurantId} />
    </PageWrapper>
  )
}

export default OrdersHistoryPage
