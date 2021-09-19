import { useState } from 'react'

const TextInput = ({ label, id, type, placeholder, disabled, children, className }) => {
  const [value, setValue] = useState('')

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
            onChange={(e) => setValue(e.target.value)}
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
