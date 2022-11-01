import React from 'react'

const ButtonStyle = ({clickHandler ,textC,bgC,label,pX,pY}) => {
  return (
    <>
        <button onClick={clickHandler} className={`bg-${bgC} text-${textC} px-${pX} py-${pY} rounded-full capitalize tracking-wider text-sm font-semibold`}>{label}</button>
    </>
  )
}

export default ButtonStyle