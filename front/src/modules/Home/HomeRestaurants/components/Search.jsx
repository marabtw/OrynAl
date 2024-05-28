import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { axios } from "@lib/axios"
import Select from "react-select"

import { ROUTERS } from "@router/Router.config"
import { searchRestaurants } from "../../api"

import { removeWildcard } from "@helpers"
import { useToast } from "@hooks"
import { AuthContext } from "@context/AuthContext"

const Search = () => {
  const navigate = useNavigate()
  const showNotification = useToast()
  const { isAuthed } = useContext(AuthContext)

  const [searchQuery, setSearchQuery] = useState("")
  const [options, setOptions] = useState([])

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()

    if (searchQuery?.length >= 2) {
      searchRestaurants({
        searchQuery,
        cancelToken: cancelTokenSource.token,
      })
        .then((res) => {
          setOptions(
            res.data.items?.map((restaurant) => ({
              label: restaurant.name,
              value: restaurant.id,
            }))
          )
        })
        .catch((err) => {
          if (!axios.isCancel(err)) {
            showNotification("Запрос был отменен", "warning")
          }
          if (options?.length > 0) setOptions([])
        })
    }

    return () => {
      cancelTokenSource.cancel()
    }
  }, [searchQuery])

  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      width: "100%",
      height: "100%",
    }),
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      height: "100%",
      border: "5px solid #6AA7FC",
      borderRadius: "20px",
      paddingLeft: "20px",
      cursor: "text",
      color: "#447AFB",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#4277FB",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#4277FB" : "transparent",
      color: state.isSelected ? "#fff" : "#333",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#f2f3f6",
      },
    }),
    indicatorSeparator: (provided, state) => ({ display: "none" }),
    dropdownIndicator: (provided, state) => ({ display: "none" }),
    placeholder: (provided, state) => ({
      ...provided,
      color: "#447AFB",
    }),
  }

  return (
    <div
      htmlFor="restaurantSearch"
      className="relative w-full h-[90px] max-w-[1200px] 
			text-[20px] font-[500] 
			max-xl:h-[60px] max-xl:text-[16px]"
    >
      <Select
        options={options}
        styles={customStyles}
        placeholder={`${"Введите название Ресторана"}`}
        value={searchQuery}
        onChange={(e) => {
          if (isAuthed) {
            navigate(
              `${removeWildcard(
                ROUTERS.Orders.root
              )}${ROUTERS.Orders.createOrder.replace(":restaurantId", e.value)}`
            )
          } else {
            showNotification("Вы не авторизованы", "info")
          }
          setSearchQuery("")
					setOptions([])
        }}
        onInputChange={(e) => {
          setSearchQuery(e.trim())
        }}
      />
      <button
        className="absolute right-[20px] top-1/2 translate-y-[-50%] 
				px-[80px] py-[10px]
				border-none rounded-[8px] 
				text-white bg-[#6AA7FC]
				max-lg:px-[20px] max-lg:py-[5px]"
      >
        Найти
      </button>
    </div>
  )
}

export default Search
