import { useState } from 'react'

const RadioButton = ({ label, id, name, checked, onChange, disabled, labelClass }) => {
  return (
    <>
      <div className="form-radio">
        <label htmlFor={id} className="inline-flex py-2">
          <input
            type="radio"
            id={id}
            name={name}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className="flex-shrink-0"
          />
          <p className={`${labelClass} ml-3`}>{label}</p>
        </label>
      </div>
    </>
  )
}
export default RadioButton
