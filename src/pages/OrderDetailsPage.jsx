import { useParams } from "react-router-dom"
import OrderDetails from "../moduls/OrderDetails/OrderDetails"

const OrderDetailsPage = () => {
  const { id } = useParams()
  return (
    <div className="py-[50px] px-[60px] font-poppins">
      <OrderDetails id={id}/>
    </div>
  )
}

export default OrderDetailsPage
