import { useState } from "react"
import { CrossIcon } from "@ui/icons/icons"
import { v4 as uuidv4 } from "uuid"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from "swiper/modules"

const FormInputFile = ({ placeholder = "no placeholder" }) => {
  const id = uuidv4()
  const [selectedFiles, setSelectedFiles] = useState([])

  const handleFileChange = (event) => {
    const files = event.target.files
    const newSelectedFiles = [...selectedFiles]

    for (let i = 0; i < files.length; i++) {
      newSelectedFiles.push(URL.createObjectURL(files[i]))
    }

    setSelectedFiles(newSelectedFiles)
  }

  const deleteFile = (index) => {
    const newSelectedFiles = [...selectedFiles]
    URL.revokeObjectURL(newSelectedFiles[index])
    newSelectedFiles.splice(index, 1)
    setSelectedFiles(newSelectedFiles)
  }

  return (
    <div className="flex flex-col relative max-md:flex-row max-md:items-center max-md:gap-x-[10px]">
      <label htmlFor={`file-upload${id}`} className="relative w-full h-[80px] max-md:h-[60px]">
        <input
          id={`file-upload${id}`}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          multiple
        />
        <div
          className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full
			border-dashed border-[3px] border-[#ebebeb] rounded-[20px] text-[#C6C6C6] select-none cursor-pointer
			hover:border-[#60aafc] hover:text-[#60aafc] max-md:text-[14px]"
        >
          <span className="">+</span>
          <span>{placeholder}</span>
        </div>
      </label>
      {selectedFiles?.length > 0 && (
        <div className="w-full overflow-hidden border-dashed border-[3px] rounded-[20px] mt-[10px] p-[5px] max-md:mt-0">
          <Swiper slidesPerView={"auto"} spaceBetween={10} pagination={false}>
            {selectedFiles.map((file, index) => (
              <SwiperSlide key={index}>
                <div className="w-[40px] aspect-square relative rounded-lg overflow-hidden border">
                  <div
                    className="absolute flex justify-center items-center w-[20px] aspect-square top-0 right-0 cursor-pointer rounded-full bg-red-300
										hover:bg-red-400 hover:text-white	"
                    onClick={() => {
                      deleteFile(index)
                    }}
                  >
                    <CrossIcon />
                  </div>
                  <img src={file} alt={"Image"} className="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  )
}

export default FormInputFile
