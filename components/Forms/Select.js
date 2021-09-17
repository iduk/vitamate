import { useState } from 'react'
import Img from 'next/image'

const Select = ({ id, label, value, option, options, onChange, className, children }) => {
  const [select, setSelect] = useState('')

  return (
    <div className="form-control w-full">
      <div className="flex justify-between">
        <label>{label}</label>
      </div>
      <div className="relative">
        <select value={value} onChange={(e) => setSelect(e.target.value)}>
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
          <Img src="/images/ic-arrowdown.svg" width={24} height={24} alt="arrow" />
        </div>

        <p className={className}>{children}</p>
      </div>
    </div>
  )
}

export default Select
