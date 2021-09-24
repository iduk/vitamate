import { useState } from 'react'

const TextInput = ({ label, id, type, value, placeholder, disabled, children, className, onChange }) => {
  return (
    <>
      <div className={'form-control w-full'}>
        <InputLabel label={label} />
        <div className="relative">
          <input
            type={type}
            className={className}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        </div>
      </div>
      {children}
    </>
  )
}
export default TextInput

const InputLabel = ({ id, label }) => {
  return (
    <label className="w-full" htmlFor={id}>
      {label}
    </label>
  )
}
