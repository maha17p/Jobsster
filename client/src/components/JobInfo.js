import React from 'react'

const JobInfo = ({icon, text}) => {
  return (
    <div className='flex items-center space-x-2 '>
        <p className='text-[0.65rem] text-secondary'>{icon}</p>
        <p className='text-sm text-gray-600 capitalize tracking-wide '>{text}</p>
    </div>
  )
}

export default JobInfo