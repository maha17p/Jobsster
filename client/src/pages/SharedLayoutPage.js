import React from 'react'
import { Outlet } from 'react-router-dom'
const SharedLayoutPage = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default SharedLayoutPage