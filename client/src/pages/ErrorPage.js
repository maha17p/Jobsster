import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='h-pageHeight w-full flex items-center justify-center flex-col space-y-8'>
      <h1 className='text-6xl font-bold tracking-wide text-primary'>Oops<span className='text-8xl'>!</span></h1>
      <h3 className='flex items-center flex-col'>
        <span className='font-semibold text-lg'>404 - Page Not Found</span>
        <span className='text-xs text-gray-600 tracking-wider' >The page you are looking for does not seem to exist</span>
      </h3>
     
    <Link to="/" className='uppercase text-xs px-4 py-2 bg-primary text-white font-semibold rounded'>Go to Home</Link>
    </div>
  )
}

export default ErrorPage