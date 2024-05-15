import { useEffect, useState } from "react"
import Select from "react-select"
import { SearchIcon } from "@ui/icons/icons"

import { searchByOwnerRestaurants } from "../../api"
import { useNavigate } from "react-router-dom"
import { ROUTERS } from "@router/Router.config"
import { removeWildcard } from "@helpers"

const SearchRestaurant = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const [options, setOptions] = useState([])

  useEffect(() => {
    if (searchQuery?.length >= 2) {
      searchByOwnerRestaurants(searchQuery)
        .then((res) => {
          setOptions(
            res.data.items?.map((restaurant) => {
              return {
                label: restaurant.name,
                value: restaurant.id,
              }
            })
          )
        })
        .catch((error) => {
          setOptions([])
        })
    } else {
      setOptions([])
    }
  }, [searchQuery])

  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      width: "100%",
      minWidth: "300px",
    }),
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      border: "2px solid #c4c4c4",
      borderRadius: "20px",
      padding: "3px 5px 3px 30px",
      cursor: "text",
      fontSize: "15px",
      fontWeight: "600",
      lineHeight: "22.5px",
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
        backgroundColor: "#4277FB",
        color: "#fff",
      },
    }),
    indicatorSeparator: (provided, state) => ({ display: "none" }), // Убираем разделитель
    dropdownIndicator: (provided, state) => ({ display: "none" }), // Убираем стрелку
    placeholder: (provided, state) => ({
      ...provided,
      color: "#c4c4c4",
    }),
  }

  return (
    <div className="relative">
      <SearchIcon className="absolute top-[50%] left-[18px] text-[14px] text-[#c4c4c4] translate-y-[-50%] z-30 pointer-events-none" />
      <Select
        options={options}
        styles={customStyles}
        placeholder={`${"Search"}`}
        value={searchQuery}
        onChange={(e) => {
          navigate(
            `${removeWildcard(
              ROUTERS.Restaurant.root
            )}${ROUTERS.Restaurant.updateRestaurant.replace(
              ":restaurantId",
              e.value
            )}`
          )
          setSearchQuery("")
        }}
        onInputChange={(e) => {
          setSearchQuery(e)
        }}
      />
    </div>
  )
}

export default SearchRestaurant
