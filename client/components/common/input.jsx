import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setInputValue } from '../../redux/reducers/common'

const Input = () => {
  const dispatch = useDispatch()
  const { inputText } = useSelector((store) => store.common)

  function onChange(inputValue) {
    dispatch(setInputValue(inputValue))
  }

  return (
    <input
      value={inputText}
      type="text"
      className="border rounded p-1 m-2"
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Input
