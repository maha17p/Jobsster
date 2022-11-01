import React from 'react'
import { aboutUs } from '../assets'

const AboutPage = () => {
  return (
    <div className='flex h-pageHeight justify-center '>
        <div className="flex flex-col md:flex-row justify-center my-auto mx-auto  w-11/12 first-line:sm:10/12 md:9/12 lg:w-8/12 shadow-lg ">
        <div className="flex-1 bg-white px-8 py-4 flex items-center flex-col justify-center rounded-l-lg space-y-2 md:space-y-4 text-justify">
          <p className='uppercase text-2xl font-semibold'>About us</p>
          <h3>At Jobsster, our mission is to help people get jobs and post jobs. We foster a collaborative workplace that strives to create the best experience for job seekers and job providers. It is an unparalleled job portal that rewards both recruiters and applicants.</h3>
        </div>
        <div className=" flex-1 flex items-center flex-col justify-center  bg-primary text-white px-8 py-4 space-y-3 md:space-y-4 rounded-r-lg ">
        
         <img   className='h-40 w-40' src={aboutUs} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutPage