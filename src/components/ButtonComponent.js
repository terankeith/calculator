import React from "react"

export const ButtonComponent = ({
  className,
  inputValue,
  handleClick,
  type
}) => {
  return (
    <div className={className} onClick={() => handleClick(inputValue, type)}>
      {inputValue}
    </div>
  )
}
