import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import store from "./store/store"

import "@styles/global.css"
import App from "./app/App"
import { UIContextProvider } from "@context/UIContext"
import { AuthContextProvider } from "@context/AuthContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <UIContextProvider>
          {/* <Provider store={store}> */}
            <App />
          {/* </Provider> */}
        </UIContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
