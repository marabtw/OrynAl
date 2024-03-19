import React from "react"

const Slider = ({ images }) => {
  return (
    <div className="slider">
      <div className="slider-container">
        {images.map((image) => (
          <img key={image + Math.random()} src={image} />
        ))}
      </div>
    </div>
  )
}

export default Slider
