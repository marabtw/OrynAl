import { useState } from "react"

const getRandomNumber = () => {
  return Math.floor(Math.random() * 99999999999)
}

const FormCheckbox = ({ data, key = "", onChange }) => {
  const [checked, setChecked] = useState(false)
  const randomNumber = getRandomNumber()

  return (
    <label
      htmlFor={`checkbox-${randomNumber}`}
      key={key}
      className="relative flex gap-[10px] items-center max-w-max"
    >
      <input
        id={`checkbox-${randomNumber}`}
        type="checkbox"
        name=""
        className="hidden"
				onChange={() => {
					setChecked(!checked)
					onChange()
				}}
      />
      <span
        className={`p-[2px] w-[21px] aspect-square border border-[#EBEBEB] cursor-pointer`}
      >
        {checked && <div className="w-full h-full bg-[#05FF00]"></div>}
      </span>
      <p className="cursor-pointer">{data}</p>
    </label>
  )
}

export default FormCheckbox
