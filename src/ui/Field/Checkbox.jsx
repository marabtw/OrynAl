import React, { useState } from "react"

const getRandomNumber = () => {
  return Math.floor(Math.random() * 99999999999)
}

const Checkbox = ({ data }) => {
	const [checked, setChecked] = useState(false)
  const randomNumber = getRandomNumber()

  return (
    <label htmlFor={`${data}-${randomNumber}`} className="relative flex gap-[10px]">
      <input id={`${data}-${randomNumber}`} type="checkbox" name="" className="hidden" onClick={() => setChecked(!checked)}/>
      <span className={`p-[2px] w-[21px] aspect-square border border-[#EBEBEB] cursor-pointer`}>
				{checked && (
					<div className="w-full h-full bg-[#05FF00]"></div>
				)}
			</span>
      <p className="cursor-pointer">{data}</p>
    </label>
  )
}

export default Checkbox
