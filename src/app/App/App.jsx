import { useLocation } from "react-router-dom"
import Header from "../../moduls/Header/Header"
import Router from "../router/Router"

function App() {
  const currentPath = useLocation().pathname

  return (
    <div className="mx-[50px] relative bg-white">
      <Header />
      <Router />
    </div>
  )
}

export default App
