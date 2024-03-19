import React from "react"
import Slider from "./components/Slider/Slider"
import CommentsContainer from "./components/CommentsContainer/CommentsContainer"

const RestaurantInfo = ({ data }) => {
  return (
    <div>
      <div>
        <div>
          <img src={data.icon} alt="" />
          <div>
            <h1>{data.fullName}</h1>
            <p>{data.description}</p>
            <div>
              <div>{data.call}</div>
              <div>{data.workingHours}</div>
            </div>
          </div>
        </div>
        <div className="h-[300px] flex">
          {data.services.map((service) => (
            <div key={service + Math.random()}>
              <img src={service.icon} alt="icon" />
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Slider images={data.images} />
        <CommentsContainer comments={data.comments} />
      </div>
    </div>
  )
}

export default RestaurantInfo
