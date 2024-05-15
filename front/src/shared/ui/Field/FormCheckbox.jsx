import { useState } from "react"

const getRandomNumber = () => {
  return Math.floor(Math.random() * 99999999999)
}

const FormCheckbox = ({ label, onChange, initialChecked }) => {
  const [checked, setChecked] = useState(initialChecked)
  const randomNumber = getRandomNumber()

  return (
    <label
      htmlFor={`checkbox-${randomNumber}`}
      className="relative flex gap-x-[10px] items-center max-w-max max-md:text-[14px]"
    >
      <input
        id={`checkbox-${randomNumber}`}
        type="checkbox"
        className="hidden"
        onChange={() => {
          setChecked(!checked)
          onChange(label)
        }}
      />
      <span
        className={`p-[2px] w-[21px] aspect-square border border-[#EBEBEB] cursor-pointer`}
      >
        {checked && <div className="w-full h-full bg-[#05FF00]"></div>}
      </span>
      <p className="cursor-pointer">{label}</p>
    </label>
  )
}

export default FormCheckbox
