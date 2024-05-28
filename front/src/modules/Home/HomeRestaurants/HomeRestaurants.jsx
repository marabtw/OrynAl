import React, { useEffect, useState } from "react"
import { axios } from "@lib/axios"

import {
  getAllRestaurantsRequest,
  getAllPopularRestaurantsRequest
} from "../api/index"

import { useLoading, useToast } from "@hooks"
import { isArraysEqualByIdWithSet } from "@utils"

import Restaurants from "./components/Restaurants"
import PopularRestaurants from "./components/PopularRestaurants"

const HomeRestaurants = React.forwardRef((props, ref) => {
  const setLoading = useLoading()
  const showNotification = useToast()

  const [restaurants, setRestaurants] = useState([])
  const [popularRestaurants, setPopularRestaurants] = useState([])
  const [restaurantsTotalPage, setRestaurantsTotalPage] = useState(0)
  const [popularRestaurantsTotalPage, setPopularRestaurantsTotalPage] =
    useState(0)
  const [restaurantsParams, setRestaurantsParams] = useState({
    pageIndex: 1,
    limit: 6,
  })
  const [popularRestaurantsParams, setPopularRestaurantsParams] = useState({
    pageIndex: 1,
    limit: 3,
  })

  const loadRestaurants = async (request, params, setData, setTotalPage) => {
    setLoading(true)
    const cancelTokenSource = axios.CancelToken.source()

    try {
      const { data } = await request({
        params,
        cancelToken: cancelTokenSource.token,
      })

      if (data.items.length === 0) {
        setData([])
      } else {
        const filteredItems = data.items.map(({ role, ...rest }) => rest)
        if (!isArraysEqualByIdWithSet(restaurants, filteredItems)) {
          setData(filteredItems)
        }
      }

      const newTotalPage = Math.ceil(data?.totalItems / params.limit) || 0
      setTotalPage(newTotalPage)
    } catch (err) {
      if (axios.isCancel(err)) {
        showNotification("Запрос был отменен", "warning")
      } else {
        showNotification(err.toString(), "error")
      }
    } finally {
      setLoading(false)
    }

    return () => {
      cancelTokenSource.cancel()
    }
  }

  useEffect(() => {
    loadRestaurants(
      getAllRestaurantsRequest,
      restaurantsParams,
      setRestaurants,
      setRestaurantsTotalPage
    )
  }, [restaurantsParams])

  useEffect(() => {
    loadRestaurants(
      getAllPopularRestaurantsRequest,
      popularRestaurantsParams,
      setPopularRestaurants,
      setPopularRestaurantsTotalPage
    )
  }, [popularRestaurantsParams])

  return (
    <div ref={ref} className="mt-[70px] px-[100px] max-xl:px-[20px]">
      <Restaurants
        setParams={setRestaurantsParams}
        restaurants={restaurants}
        totalPage={restaurantsTotalPage}
      />
      <PopularRestaurants
        setParams={setPopularRestaurantsParams}
        restaurants={popularRestaurants}
        totalPage={popularRestaurantsTotalPage}
      />
    </div>
  )
})

export default HomeRestaurants
