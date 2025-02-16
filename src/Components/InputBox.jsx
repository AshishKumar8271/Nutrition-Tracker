import React from 'react';

const InputBox = ({name,children,onChange,value}) => {
  return (
    <div className="relative">
  <input
    type={name === 'name' ? 'text' : 'number'}
    name={name}
    id={name}
    value={value}
    className="peer border-2 border-gray-400 outline-none pl-2 pt-4 py-1.5 rounded-sm w-full focus:border-blue-500 text-gray-800"
    onChange={(e) => onChange(e)}
    required
  />
  <label
    htmlFor={name}
    className={`absolute text-gray-400 left-2 ${value ? '-top-2 text-sm': 'top-3 text-base'} cursor-text bg-white px-1 transition-all duration-200 ease-in-out peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500`}
  >
    {children}
  </label>
</div>

  )
}

export default React.memo(InputBox);