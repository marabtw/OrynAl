import myApi from "../../../app/lib/axios"

export const getOrders = () => {
	const token = "dasfasdfa"
  const response = myApi.get("/api/orders", {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
  return response
}
