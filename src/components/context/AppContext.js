import React, { useReducer, createContext, useEffect } from "react"
import PropTypes from "prop-types"

export const STATE_NAME = "CALCULATOR_STATE"

export const AppActions = {
  UPDATE_EXPRESSION: "UPDATE_EXPRESSION",
  CLEAR_EXPRESSION: "CLEAR_EXPRESSION",
  CALCULATE: "CALCULATE"
}

const initialState = {
  expression: "",
  result: 0
}

const persistedState = JSON.parse(sessionStorage.getItem(STATE_NAME))

const finalInitialState = { ...initialState, ...persistedState }

const appReducer = (state, action) => {
  switch (action.type) {
    case AppActions.UPDATE_EXPRESSION:
      //ability to do normal js equations
      let expression = state.expression + action.payload
      //if variable name = state variable name, you don't need to object syntax (name: name)
      return { ...state, expression }
    case AppActions.CLEAR_EXPRESSION:
      return { ...state, expression: "", result: 0 }
    case AppActions.CALCULATE:
      let result = eval(state.expression)
      return { ...state, result }
    default:
      return state
  }
}

export const AppContext = createContext()

export const AppProvider = props => {
  const [state, dispatch] = useReducer(appReducer, finalInitialState)

  useEffect(() => {
    sessionStorage.setItem(STATE_NAME, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.element
}
