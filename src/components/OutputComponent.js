import React, { useContext } from "react"
import { AppContext } from "./context/AppContext"

export const OutputComponent = () => {
  const { state } = useContext(AppContext)
  return (
    <div id="calc-output">
      <div className="solution">
        <div className="expression">{state.expression}</div>
        <div className="result">{state.result}</div>
      </div>
    </div>
  )
}
