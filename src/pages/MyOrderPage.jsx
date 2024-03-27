import { useParams } from "react-router-dom"
import OrderInformation from "../moduls/OrderInformation/OrderInformation"


const MyOrderPage = () => {
  const { id } = useParams()
  return (
    <div className="py-[50px] px-[50px] font-poppins">
      <OrderInformation id={id}/>
    </div>
  )
}

export default MyOrderPage
