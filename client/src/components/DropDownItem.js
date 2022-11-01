import React from 'react'
import { Link } from 'react-router-dom'

const DropDownItem = ({icon,text}) => {
  return (
    <li className='flex items-center mt-3 mx-auto'>
       <span>{icon}</span>
       <span>{text}</span>
    </li>
  )
}

export default DropDownItem