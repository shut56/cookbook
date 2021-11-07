import React from 'react'
import { useDispatch } from 'react-redux'

import { getFood } from '../../redux/reducers/foods'

const Button = ({ name }) => {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(getFood())
  }

  return (
    <button
      type="button"
      className="border rounded m-1 p-2"
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default Button
