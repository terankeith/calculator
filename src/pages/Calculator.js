import React from "react"
import "../css/Calculator.css"
import { CalculatorComponent } from "../components"

export const Calculator = () => {
  return (
    <div className="wrapper">
      <h1>Calculator</h1>
      <CalculatorComponent />
    </div>
  )
}
