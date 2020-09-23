import React, { useContext } from "react"
import { ButtonComponent } from "."
import { AppContext, AppActions } from "./context"

export const ButtonPanel = () => {
  const { dispatch } = useContext(AppContext)

  const inputTypes = {
    CLEAR: "CLEAR",
    EQUAL: "EQUAL",
    NUMBER: "NUMBER",
    OPERATION: "OPERATION"
  }

  const handleClick = (inputValue, type) => {
    switch (type) {
      case inputTypes.CLEAR:
        return dispatch({ type: AppActions.CLEAR_EXPRESSION })
      case inputTypes.OPERATION:
        return dispatch({
          type: AppActions.UPDATE_EXPRESSION,
          payload: ` ${inputValue} `
        })
      case inputTypes.EQUAL:
        return dispatch({
          type: AppActions.CALCULATE
        })
      default:
        return dispatch({
          type: AppActions.UPDATE_EXPRESSION,
          payload: inputValue
        })
    }
  }

  return (
    <>
      <div className="calc-row">
        <ButtonComponent
          className="calc-button clear transparent"
          handleClick={handleClick}
          inputValue="C"
          type={inputTypes.CLEAR}
        />
        {/* placeholder div for visual alignment */}
        <div className="calc-button transparent"></div>
        <ButtonComponent
          className="calc-button transparent"
          handleClick={handleClick}
          inputValue="+/-"
          type={inputTypes.OPERATION}
        />
        <ButtonComponent
          className="calc-button transparent"
          handleClick={handleClick}
          inputValue="%"
          type={inputTypes.OPERATION}
        />
        <ButtonComponent
          className="calc-button transparent"
          handleClick={handleClick}
          inputValue="/"
          type={inputTypes.OPERATION}
        />
      </div>
      <div className="calc-row">
        <ButtonComponent
          className="calc-button solid"
          handleClick={handleClick}
          inputValue="7"
          type={inputTypes.NUMBER}
        />
        <ButtonComponent
          className="calc-button solid"
          handleClick={handleClick}
          inputValue="8"
          type={inputTypes.NUMBER}
        />
        <ButtonComponent
          className="calc-button solid"
          handleClick={handleClick}
          inputValue="9"
          type={inputTypes.NUMBER}
        />
        <ButtonComponent
          className="calc-button transparent"
          handleClick={handleClick}
          inputValue="x"
          type={inputTypes.OPERATION}
        />
      </div>
      <div className="calc-row">
        <ButtonComponent
          className="calc-button solid"
          handleClick={handleClick}
          inputValue="4"
          type={inputTypes.NUMBER}
        />
        <ButtonComponent
          className="calc-button solid"
          handleClick={handleClick}
          inputValue="5"
          type={inputTypes.NUMBER}
        />
        <ButtonComponent
          className="calc-button solid shadow-right"
          handleClick={handleClick}
          inputValue="6"
          type={inputTypes.NUMBER}
        />
        <ButtonComponent
          className="calc-button transparent"
          handleClick={handleClick}
          inputValue="-"
          type={inputTypes.OPERATION}
        />
      </div>
      <div className="calc-row">
        <ButtonComponent
          className="calc-button solid"
          handleClick={handleClick}
          inputValue="1"
          type={inputTypes.NUMBER}
        />
        <ButtonComponent
          className="calc-button solid"
          handleClick={handleClick}
          inputValue="2"
          type={inputTypes.NUMBER}
        />
        <ButtonComponent
          className="calc-button solid shadow-right"
          handleClick={handleClick}
          inputValue="3"
          type={inputTypes.NUMBER}
        />
        <ButtonComponent
          className="calc-button transparent"
          handleClick={handleClick}
          inputValue="+"
          type={inputTypes.OPERATION}
        />
      </div>
      <div className="calc-row">
        <ButtonComponent
          className="calc-button solid"
          handleClick={handleClick}
          inputValue="0"
          type={inputTypes.NUMBER}
        />
        <ButtonComponent
          className="calc-button transparent"
          handleClick={handleClick}
          inputValue="."
          type={inputTypes.OPERATION}
        />
        <ButtonComponent
          className="calc-button equal transparent"
          handleClick={handleClick}
          inputValue="="
          type={inputTypes.EQUAL}
        />
      </div>
    </>
  )
}
