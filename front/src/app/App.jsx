import { useLocation } from "react-router-dom"
import Header from "@modules/Header/Header"
import Router from "@router/Router"
import { ROUTERS } from "@router/Router.config"
import { removeWildcard } from "@helpers/helpers"
import { useContext } from "react"
import { UIContext } from "@context/UIContext"
import Loading from "@components/Loading/Loading"

function App() {
  const currentPath = useLocation().pathname
  const { isLoading } = useContext(UIContext)

  return (
    <>
      {/* {isLoading && <Loading />} */}
      <div className="relative font-poppins">
        {currentPath !==
          `${removeWildcard(ROUTERS.Authorization.root)}${
            ROUTERS.Authorization.login
          }` && <Header />}
        <Router />
      </div>
    </>
  )
}

export default App
