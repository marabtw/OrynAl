import { useState, useEffect } from "react"
import { axios } from "@lib/axios"

import { getRestaurantReviewsRequest } from "../../../../../api/index"
import { useLoading, useToast } from "@hooks"

import avatarIcon from "@assets/images/icons/avatarIcon.jpeg"
import RatingStars from "@components/RatingStars/RatingStars"

const CommentsContainer = ({ restaurantId }) => {
  const setLoading = useLoading()
  const showNotification = useToast()

  const [comments, setComments] = useState([])

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source()

    setLoading(true)
    getRestaurantReviewsRequest({ restaurantId })
      .then(({ data }) => {
        console.log(data)
        setComments(data.items)
      })
      .catch((err) => {
        showNotification(err, "error")
      })
      .finally(() => {
        setLoading(false)
      })

    return () => {
      cancelTokenSource.cancel()
    }
  }, [])

  return (
    <div
      className="mt-[50px] px-[40px] py-[20px] max-xl:px-[20px] max-xl:py-[15px] max-lg:mt-[20px]
			border border-[#F1F1F1] rounded-[34px] max-xl:rounded-[20px]
			bg-[#FDFDFD] shadow-[0px_16px_35px_-17px_rgba(0,0,0,.2)]"
    >
      <h2 className="text-[25px] font-[700] leading-[37.5px] max-lg:text-[18px] max-lg:left-[20px]">Отзывы</h2>
      <div className="flex flex-col w-full max-h-[260px] overflow-auto gap-[10px]">
        {comments?.length > 0 ? (
          comments?.map((comment) => (
            <div
              key={comment.id}
              className="flex px-[20px] py-[10px] gap-3 border border-[#f1f1f1] rounded-[14px] max-md:px-[10px]"
            >
              <img src={avatarIcon} alt="icon" className="w-[37px] h-[37px]" />
              <div className="flex flex-col gap-[5px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {comment.name && (
                      <h2 className="text-[18px] font-[500] leading-[27px] max-lg:text-[16px] max-lg:leading-[20px]">
                        {comment.name}
                      </h2>
                    )}
                    <h4 className="text-[14px] leading-[21px] text-[#979797] max-lg:text-[12px] max-lg:leading-[14px]">
                      {comment.data}
                    </h4>
                  </div>
                  <RatingStars textStyles={"max-md:text-[10px]"} rate={comment.rate} />
                </div>
                <p className="px-[15px] py-[10px] rounded-[10px] bg-[#f1f1f1] text-[14px] leading-[21px] max-lg:text-[12px] max-lg:leading-[15px]">
                  {comment.comment}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center px-[20px] py-[10px] gap-3 border border-[#f1f1f1] rounded-[14px]">
            <p className="text-center max-lg:text-[12px] max-lg:leading-[15px]">Комментарии не найдены</p>
          </div>
        )}
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
