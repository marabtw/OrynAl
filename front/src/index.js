import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import store from "./store/store"

import "./app/globals.css"
import App from "./app/App/App"
import { UIContextProvider } from "./app/Context/UIContext"
import { AuthContextProvider } from "./app/Context/AuthContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <UIContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </UIContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
