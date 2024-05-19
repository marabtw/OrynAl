import { useEffect, useState } from "react"
import { useContext } from "react"
import { UIContext } from "@context/UIContext"
import { axios } from "@lib/axios"

export const useToast = () => {
  const { toast } = useContext(UIContext)
  if (!toast) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return toast
}

export const useLoading = () => {
  const { setIsLoading } = useContext(UIContext)

  const setLoading = (isLoading) => {
    setIsLoading(isLoading)
  }

  return setLoading
}

export const useContextMenu = (index) => {
  const { openedContextMenuIndex, setOpenedContextMenuIndex } =
    useContext(UIContext)

  const closeContextMenuFunction = () => {
    setOpenedContextMenuIndex(null)
  }

  const handleContextMenu = () => {
    if (openedContextMenuIndex === index) {
      setOpenedContextMenuIndex(null)
    } else {
      setOpenedContextMenuIndex(index)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openedContextMenuIndex === index &&
        !event.target.closest(".context-menu-wrapper")
      ) {
        closeContextMenuFunction()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [openedContextMenuIndex])

  return {
    openedContextMenuIndex,
    handleContextMenu,
    closeContextMenuFunction,
  }
}

export const useHeaderHeight = () => {
  const { headerHeight } = useContext(UIContext)
  return headerHeight
}

export const useCloudinary = () => {
  const uploadImages = async (files) => {
    const urls = []

    const uploadSingleImage = async (file) => {
      const formData = new FormData()
      formData.append("file", file)
      formData.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET_NAME
      )

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
          formData
        )
        return { url: response.data.url, publicId: response.data.public_id }
      } catch (error) {
        console.error("Error uploading image:", error)
        throw error
      }
    }

    try {
      for (const file of files) {
        const url = await uploadSingleImage(file)
        urls.push(url)
      }
      return urls
    } catch (error) {
      throw error
    }
  }

  const deleteImage = async (publicID) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/delete/${publicID}`
      )
      return response.data
    } catch (error) {
      console.error("Error deleting image:", error)

      throw error
    }
  }

  return {
    uploadImages,
    deleteImage,
  }
}
