import React from "react"

const Slider = ({ images }) => {
  return (
    <div className="h-[286px] w-full overflow-hidden">
      <div className="flex gap-[30px] w-[878px] overflow-hidden">
        {images.map((image) => (
          <img key={image + Math.random()} src={image} className="min-w-[30%] w-[30%] min-h-[286px] overflow-hidden rounded-[20px]" />
        ))}
      </div>
    </div>
  )
}

export default Slider
