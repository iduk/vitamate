import { useState } from 'react'

const TextInput = ({ label, id, type, placeholder, children }) => {
  const [value, setValue] = useState('')

  return (
    <div className="form-control w-full">
      <div className="flex justify-between">
        <label htmlFor={id}>{label}</label>
        {children}
      </div>
      <input
        className="text-lg"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default TextInput
