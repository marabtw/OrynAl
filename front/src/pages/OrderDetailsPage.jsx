import { useParams } from "react-router-dom"
import OrderDetails from "../moduls/OrderDetails/OrderDetails"
import PageContainer from "../components/PageContainer/PageContainer"

const OrderDetailsPage = () => {
  const { id } = useParams()
  return (
    <PageContainer>
      <OrderDetails id={id}/>
    </PageContainer>
  )
}

export default OrderDetailsPage
