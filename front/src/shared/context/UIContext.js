import { createContext, useState } from "react"
import { ToastContainer, toast as showToast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { v4 as uuidv4 } from "uuid"

import Loading from "@components/Loading"

const UIContext = createContext(null)

const UIContextProvider = ({ children }) => {
  const [openedContextMenuIndex, setOpenedContextMenuIndex] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const generateToastId = () => {
    return uuidv4()
  }

  const toast = (message = "no message", type = "default") => {
    const options = {
      toastId: generateToastId(),
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    }

    const toastMethod =
      {
        success: showToast.success,
        error: showToast.error,
        warning: showToast.warning,
        info: showToast.info,
      }[type && type.trim().toLowerCase()] || showToast

    toastMethod(message ? message : "no message", options)
  }

  return (
    <UIContext.Provider
      value={{
        openedContextMenuIndex,
        setOpenedContextMenuIndex,
        isLoading,
        setIsLoading,
        toast,
      }}
    >
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isLoading && <Loading />}
      {children}
    </UIContext.Provider>
  )
}

export { UIContext, UIContextProvider }
