import React from "react"

const CommentsContainer = ({ comments }) => {
  return (
    <div className="mt-[50px] px-[40px] py-[20px] bg-[#FDFDFD] border border-[#F1F1F1] rounded-[34px] shadow-[0px_16px_35px_-17px_rgba(0,0,0,.2)]">
      <h2 className="text-[25px] font-[700] leading-[37.5px]">Отзывы</h2>
      <div className="flex flex-col w-full h-[260px] overflow-auto gap-[10px]">
        {comments.map((comment) => (
          <div key={comment + Math.random()} className="flex px-[20px] py-[10px] gap-3 border border-[#f1f1f1] rounded-[14px]">
            <img src={comment.icon} alt="icon" className="w-[37px] h-[37px]"/>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[18px] font-[500] leading-[27px]">{comment.name}</h2>
                <h4 className="text-[14px] leading-[21px] text-[#979797]">{comment.data}</h4>
              </div>
              <p className="px-[15px] py-[10px] rounded-[10px] bg-[#f1f1f1] text-[14px] leading-[21px]">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsContainer
