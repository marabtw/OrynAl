import OrdersHistoryList from "../moduls/OrdersHistoryList/OrdersHistoryList"
import PageHeading from "../ui/Heading/PageHeading"
import PageContainer from "../components/PageContainer/PageContainer"

const OrdersHistoryPage = () => {
  return (
		<PageContainer>
			<PageHeading location={"История заказов"}/>
			<OrdersHistoryList />
		</PageContainer>
	)
}

export default OrdersHistoryPage
