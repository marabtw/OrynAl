import OrdersHistoryList from "../moduls/OrdersHistoryList/OrdersHistoryList"
import PageHeading from "../ui/Heading/PageHeading"

const OrdersHistoryPage = () => {
  return (
		<div className="px-[50px] py-[50px]">
			<PageHeading location={"История заказов"}/>
			<OrdersHistoryList />
		</div>
	)
}

export default OrdersHistoryPage
