import React from 'react'
import { ButtonLink } from '../styles/ComponentStyle'

const AccessDenied = ({alertText,accountName,alertHandler,alertImage}) => {
  return (
    <div className="h-pageHeight flex py-8">
    <div className="m-auto space-y-4">
      <img className="h-[200px] w-[200px] flex items-center justify-center mx-auto" src={alertImage} alt="No jobs" />
      <p className="text-center  font-semibold text-2xl max-w-md mx-auto">
       {alertText}
      </p>
      <div className="text-center">
        <ButtonLink
          text={accountName}
          bgColor={"primary"}
          textColor={"white"}
          clickHandler={alertHandler}
        />
      </div>
    </div>
  </div>
  )
}

export default AccessDenied