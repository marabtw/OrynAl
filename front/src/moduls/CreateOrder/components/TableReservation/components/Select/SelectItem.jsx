import Select from "react-select"

const SelectItem = ({
  placeholder = "21:00",
  options = [{ value: "...", label: "..." }],
}) => {
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      width: "100%",
    }),
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      border: "3px solid #fff",
      borderRadius: "10px",
      padding: "2px 12px",
      cursor: "pointer",
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "30px",
      boxShadow: "none",
			backgroundColor: "transparent",
			color: "#fff",
      "&:hover": {
        // borderColor: "#4277FB",
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
      color: "#fff",
    }),
  }

  return (
    <Select
      options={options}
      styles={customStyles}
      placeholder={`${placeholder} `}
    />
  )
}

export default SelectItem
