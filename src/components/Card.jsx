import React from 'react'

const Card = ({children}) => {
  return (
    <div className='border-2 border-slate-300 shadow-md p-4'>
        {children}
    </div>
  )
}

export default Card