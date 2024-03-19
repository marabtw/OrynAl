import React from "react"
import {
  StarFullIcon,
  StarHalfIcon,
  StarEmptyIcon,
} from "../../ui/icons/icons"

const ShowRating = ({ fontSize, rate }) => {

  return (
    <div className="flex" style={{ fontSize, color: "#ffb800" }}>
      {Array.from([0, 1, 2, 3, 4], (i) => {
        if (i < rate) return <StarFullIcon key={i} />
        if (i === rate) return <StarHalfIcon key={i}/>
        else return <StarEmptyIcon key={i} />
      })}
    </div>
  )
}

export default ShowRating
