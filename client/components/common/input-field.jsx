import React from 'react'

const Input = ({
  id,
  label,
  onChange,
  onKeyPress,
  value = '',
  type = 'text'
}) => {
  const submit = (e) => {
    if (e.code === 'Enter' || e.which === 13) {
      onKeyPress()
    }
  }
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-semibold text-xs ml-2">{label}</label>
      <input
        id={id}
        value={value}
        type={type}
        className="border rounded p-1 m-2"
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(event) => submit(event)}
      />
    </div>
  )
}

export default Input
