import { useState } from 'react'

const Select = ({ id, label, value, options, onChange, placeholder }) => {
  const [select, setSelect] = useState('')

  return (
    <div className="form-control w-full">
      <select value={value} placeholder={placeholder} onChange={(e) => setSelect(e.target.value)}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
