import React,{ useEffect,useState }  from 'react'

import { useStateValue } from '../context/GlobalContext'

const Alert = () => {
    const [filled,setFilled] = useState(100)
    const {showAlert, alertType, alertText} = useStateValue()
    useEffect(() => {
        if(showAlert && filled > 0 ){
            setTimeout(() => setTimeout(() => setFilled(prev => prev -= 2),25))
        }
    },[filled])
  return (
    <div className='fixed top-[3.75rem]  right-0 ' >
        <div className='h-10 w-full bg-white px-8 text-sm  tracking-wider  shadow-sm rounded-sm relative'>
          <div className='h-full flex items-center justify-center px-2 space-x-2'>
            <div className={`${alertType === "danger" ? "bg-red-400" : alertType==="success" ? "bg-green-400" :"bg-white" }  w-5 h-5 rounded-full`}>
                <span className={`flex items-center justify-center h-full text-sm `}>!</span>
            </div>
            <div className='text-sm  tracking-wide  '>{alertText}</div>
          </div>
            <span style={{
                width:`${filled}%`,
                height:"2px",
                background:`${alertType === "danger" ? "red" : alertType==="success" ? "green" :"white" }`,
                position:"absolute",
                left:"0",
                right:"0",
                bottom:"0",
                transition: "width 0.5s linear",
            }}>  </span>
        </div>
    </div>
  )
}

export default Alert