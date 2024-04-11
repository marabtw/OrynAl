import Select from "react-select"

const SelectItems = ({placeholder="Иван Петров", options=[{value: "...", label: "..."}], placeholderIcon=false}) => {

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
    <div>
      <Select
        options={options}
        styles={customStyles}
        placeholder={`${placeholder} ${placeholderIcon ? "▼" : ""}`}
      />
    </div>
  )
}

export default SelectItems
