import React from 'react'

const Card = ({children,p ='p-4'}) => {
  return (
    <div className={`border-[1px] border-slate-300 shadow-sm rounded-2xl ${p}`}>
        {children}
    </div>
  )
}

export default Card