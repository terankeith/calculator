import React from "react"
import "./App.css"
import { Calculator } from "./pages"
import { AppProvider } from "./components/context/AppContext"
function App() {
  return (
    <AppProvider>
      <Calculator />
    </AppProvider>
  )
}

export default App
