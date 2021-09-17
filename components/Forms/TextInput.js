import { useState } from 'react'

const TextInput = ({ label, id, type, placeholder, disabled, children, className }) => {
  const [value, setValue] = useState('')

  return (
    <div className={'form-control w-full'}>
      <InputLabel label={label} />

      <div className="relative">
        <input
          className={className}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
        />
        {children}
      </div>
    </div>
  )
}
export default TextInput

const InputLabel = ({ id, label }) => {
  return <label htmlFor={id}>{label}</label>
}
