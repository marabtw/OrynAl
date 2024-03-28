import React from "react"

const Slider = ({ images }) => {
  return (
    <div className="h-[286px] w-full">
      <div className="flex gap-[10px] w-[878px] overflow-hidden">
        {images.map((image) => (
          <img key={image + Math.random()} src={image} className="min-w-[286px] min-h-[286px] overflow-hidden" />
        ))}
      </div>
    </div>
  )
}

export default Slider
