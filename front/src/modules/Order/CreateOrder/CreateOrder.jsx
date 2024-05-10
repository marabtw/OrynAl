import { useState } from "react"

import { createByUserOrder } from "../api/api"

import TableReservation from "./components/TableReservation/TableReservation"
import SelectMenu from "./components/SelectMenu/SelectMenu"
import Cart from "./components/Cart/Cart"

import { CartIcon } from "@ui/icons/icons"

const CreateOrder = ({ restaurantId }) => {
  const [showCart, setShowCart] = useState(false)
  const [dataForCreateOrder, setDataForCreateOrder] = useState({
    tableId: -1,
    cart: [],
    totalPrice: 0,
    restaurantId: +restaurantId,
    status: "Завершен",
  })

  const getTableId = (id) => {
    setDataForCreateOrder((prev) => {
      return { ...prev, tableId: id }
    })
  }

  const createOrder = () => {
    if (!isOrderValid()) return
    createByUserOrder(dataForCreateOrder)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally()
  }

  const getFoodForCart = (food) => {
    const isFoodInCart = dataForCreateOrder?.cart.some(
      (item) => item.id === food.id
    )
    if (!isFoodInCart) {
      setDataForCreateOrder((prev) => {
        return { ...prev, cart: [...prev.cart, food] }
      })
    } else {
      setDataForCreateOrder((prev) => {
        return {
          ...prev,
          cart: [...prev.cart.filter((order) => order.id !== food.id)],
        }
      })
    }
  }

  const isOrderValid = () => {
    return (
      dataForCreateOrder.restaurantId &&
      dataForCreateOrder.tableId &&
      dataForCreateOrder.tableId >= 0 &&
      dataForCreateOrder.cart.length > 0
    )
  }

  return (
    <div className="py-[100px]">
      <TableReservation restaurantId={restaurantId} getTableId={getTableId} />
      <div className="relative flex justify-between gap-[50px] mx-[180px] mt-[200px] max-2xl:mx-[80px] max-lg:mx-[20px]">
        <SelectMenu
          restaurantId={restaurantId}
          getFoodForCart={getFoodForCart}
          selectedFoodsId={dataForCreateOrder.cart.map((food) => food.id)}
        />
        <Cart
          show={showCart}
          cartOrders={dataForCreateOrder.cart}
          updateCart={setDataForCreateOrder}
          createOrder={createOrder}
        />
      </div>
      <div
        className="fixed z-[99999] w-[70px] h-[70px] bottom-[1%] right-[5%] p-[15px] border border-transparent rounded-full cursor-pointer bg-gray-800
				2xl:hidden
				"
        onClick={() => setShowCart(!showCart)}
      >
        <CartIcon className="w-full h-full text-white" />
      </div>
    </div>
  )
}

export default CreateOrder
