import Select from "react-select"
import { SearchIcon } from "@ui/icons/icons"

const SearchRestaurant = ({
  placeholder = "Иван Петров",
  options = [],
  placeholderIcon = false,
  onChange,
}) => {
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      width: "100%",
    }),
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      border: "3px solid #EBEBEB",
      borderRadius: "20px",
      padding: "20px",
      cursor: "pointer",
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
      "&:hover": {
        backgroundColor: "#4277FB",
        color: "#fff",
      },
    }),
    indicatorSeparator: (provided, state) => ({ display: "none" }), // Убираем разделитель
    dropdownIndicator: (provided, state) => ({ display: "none" }), // Убираем стрелку
    placeholder: (provided, state) => ({
      ...provided,
      color: "#C6C6C6",
    }),
  }

  return (
    <div className="relative">
      <SearchIcon className="absolute top-1/2 left-[20px] text-[14px] text-[#c4c4c4] translate-y-[-50%]" />
      <Select
        options={options}
        styles={customStyles}
        placeholder={`${placeholder} ${placeholderIcon ? "▼" : ""}`}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchRestaurant
