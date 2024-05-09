import avatarIcon from "@assets/images/icons/avatarIcon.jpeg"
import RatingStars from "@components/RatingStars/RatingStars"

const CommentsContainer = ({ comments }) => {
  return (
    <div className="mt-[50px] px-[40px] py-[20px] bg-[#FDFDFD] border border-[#F1F1F1] rounded-[34px] shadow-[0px_16px_35px_-17px_rgba(0,0,0,.2)]">
      <h2 className="text-[25px] font-[700] leading-[37.5px]">Отзывы</h2>
      <div className="flex flex-col w-full h-[260px] overflow-auto gap-[10px]">
        {fakeComments?.map((comment) => (
          <div
            key={comment + Math.random()}
            className="flex px-[20px] py-[10px] gap-3 border border-[#f1f1f1] rounded-[14px]"
          >
            <img src={avatarIcon} alt="icon" className="w-[37px] h-[37px]" />
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-[18px] font-[500] leading-[27px]">
                    {comment.name}
                  </h2>
                  <h4 className="text-[14px] leading-[21px] text-[#979797]">
                    {comment.data}
                  </h4>
                </div>
                <RatingStars rate={comment.rate}/>
              </div>
              <p className="px-[15px] py-[10px] rounded-[10px] bg-[#f1f1f1] text-[14px] leading-[21px]">
                {comment.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const fakeComments = [
  {
    icon: "",
    name: "Shakh Manbayev",
    data: "29.03.2022",
    rate: 2,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    icon: "",
    name: "Shakh Manbayev",
    data: "29.03.2022",
    rate: 3.5,
    comment:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover ",
  },
  {
    icon: "",
    name: "Shakh Manbayev",
    data: "29.03.2022",
    rate: 3.5,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    icon: "",
    name: "Shakh Manbayev",
    data: "29.03.2022",
    rate: 3.5,
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
]

export default CommentsContainer
