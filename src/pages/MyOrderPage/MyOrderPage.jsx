import { useParams } from "react-router-dom"
import OrderInformation from "../../moduls/OrderInformation/OrderInformation"


const MyOrderPage = () => {
  const { id } = useParams()
  return (
    <div className="font-poppins">
      <OrderInformation id={id}/>
    </div>
  )
}

export default MyOrderPage
