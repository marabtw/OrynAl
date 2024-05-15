import { useEffect } from "react"
import { useContext } from "react"
import { UIContext } from "@context/UIContext"

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

  return { openedContextMenuIndex, handleContextMenu, closeContextMenuFunction }
}
