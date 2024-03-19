import React from "react"

const CommentsContainer = ({ comments }) => {
  return (
    <div>
      <h2>отзывы</h2>
      <div>
        {comments.map((comment) => (
          <div key={comment + Math.random()}>
            <img src={comment.icon} alt="icon" />
            <div>
              <div>
                <h2>{comment.name}</h2>
                <h4>{comment.data}</h4>
              </div>
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsContainer
