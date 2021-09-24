import { useState } from 'react'

const Checkbox = ({ label, id, name, checked, onChange, disabled, labelClass }) => {
  return (
    <>
      <div className="form-checkbox flex-shrink-0">
        <label htmlFor={id} className="inline-flex items-center py-2">
          <input type="checkbox" id={id} name={name} checked={checked} onChange={onChange} disabled={disabled} />
          <p className={`${labelClass} ml-3`}>{label}</p>
        </label>
      </div>
    </>
  )
}
export default Checkbox
