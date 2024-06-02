import { useEffect, useState } from "react"
import { axios } from "@lib/axios"
import {
  getByUserAllOrders,
  getByOwnerAllOrders,
  updateOrder,
  updateByOwnerOrder,
} from "../api"
import ListCategories from "@components/ListCategories"
import OrdersHistoryItem from "./components/OrdersHistoryItem"
import { useParams } from "react-router-dom"
import { useLoading, useToast } from "@hooks"

import Pagination from "@components/Pagination/Pagination"

const categories = ["id", "Ресторан", "Адрес", "Дата", "Статус", "Действие"]

const OrdersHistory = () => {
  const showNotification = useToast()
  const setLoading = useLoading()
  const { restaurantId } = useParams()
  const [initialOrders, setInitialOrders] = useState([])

  const [totalPage, setTotalPage] = useState(0)
  const [params, setParams] = useState({
    pageIndex: 1,
    limit: 10,
  })

  const handleUpdateOrder = async (order, status) => {
    if (order.status === status) return
    const newOrderData = { ...order, status }
    setLoading(true)
    try {
      if (restaurantId) {
        await updateByOwnerOrder({
					restaurantId,
          orderId: order.id,
          body: newOrderData,
        })
      } else {
        await updateOrder({
          orderId: order.id,
          body: newOrderData,
        })
      }
      setParams({
        pageIndex: 1,
        limit: 10,
      })
    } catch (err) {
      showNotification(err, "error")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()
    const fetchOrders = async () => {
      setLoading(true)
      try {
        let data = null
        if (restaurantId) {
          data = await getByOwnerAllOrders({
            restaurantId,
            params,
            cancelToken: cancelTokenSource.token,
          })
        } else {
          data = await getByUserAllOrders({
            params,
            cancelToken: cancelTokenSource.token,
          })
        }
        setInitialOrders(data.data.items)
        const newTotalPage = Math.ceil(data.data.totalItems / params.limit) || 0
        if (totalPage !== newTotalPage) setTotalPage(newTotalPage)
      } catch (err) {
        if (axios.isCancel(err)) {
          showNotification("Запрос был отменен", "warning")
        } else {
          showNotification(err.toString(), "error")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchOrders()

    return () => {
      cancelTokenSource.cancel()
    }
  }, [params])

  return (
    <ul className="flex flex-col gap-[30px]">
      <ListCategories categories={categories} />
      {initialOrders?.map((order, index) => (
        <OrdersHistoryItem
          key={order.id}
          order={order}
          index={index}
          handleUpdateOrder={handleUpdateOrder}
        />
      ))}
      <Pagination
        totalPage={totalPage}
        getCurrentPage={(index) => {
          if (params.pageIndex === index) return
          setParams((prev) => {
            return { ...prev, pageIndex: index }
          })
        }}
      />
    </ul>
  )
}

export default OrdersHistory
