import React from "react"
import { OutputComponent, ButtonPanel } from "."

export const CalculatorComponent = () => {
  return (
    <div id="calculator">
      <OutputComponent />
      <div id="calc-input">
        <ButtonPanel />
      </div>
    </div>
  )
}
