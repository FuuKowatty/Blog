import React from 'react'

export function ButtonConfirm({children} : {children: React.ReactNode}) {
  return (
    <button className="px-4 py-2 bg-lightBlue font-bold rounded-md text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out">{children}</button>
  )
}
