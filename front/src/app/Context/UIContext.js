import { createContext, useState } from "react"

const UIContext = createContext()

const UIContextProvider = ({ children }) => {
  const [openedContextMenuIndex, setOpenedContextMenuIndex] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

  return (
    <UIContext.Provider value={{ openedContextMenuIndex, setOpenedContextMenuIndex }}>
      {children}
    </UIContext.Provider>
  )
}

export { UIContext, UIContextProvider }
