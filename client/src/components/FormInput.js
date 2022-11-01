import React from 'react'

const FormInput = ( {type, name,labelText, value, handleChange}) => {
  return (
    <div className=''>
        <label htmlFor={name} className="capitalize tracking-wide text-sm text-gray-400" >{labelText || name}</label>
        <input 
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="border w-full px-4 py-[3px] outline-none focus:border-primary focus:opacity-80 focus:border-2 rounded transition-all duration-100"
        />
    </div>
  )
}

export default FormInput