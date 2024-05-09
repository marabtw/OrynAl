import { createContext, useEffect, useState } from "react"

const UIContext = createContext()

const UIContextProvider = ({ children }) => {
  const [openedContextMenuIndex, setOpenedContextMenuIndex] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <UIContext.Provider
      value={{
        openedContextMenuIndex,
        setOpenedContextMenuIndex,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export { UIContext, UIContextProvider }
