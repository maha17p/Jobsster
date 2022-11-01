import React from "react";
import { useNavigate } from "react-router-dom";
import { jobApply, jobProvide } from "../assets";
import JobRoleContainer from "../components/JobRoleContainer";
import MetaData from "../components/MetaData";
import { useStateValue } from "../context/GlobalContext";



const RolePage = () => {
    const navigate = useNavigate()
  const {user} = useStateValue()

    const jobProviderHandler = () => {
        if(user){
            navigate("/job_provider/all_job")
         }else {
            navigate("/register")
         }

    }
    
    const jobSeekerHandler = () => {
      if(user){
        navigate("/job_seeker/all_job")
     }else {
        navigate("/register")
     }
    }
  return (
   <>
   <MetaData title={'Role'} />
   <div className="flex h-pageHeight justify-center  ">
      <div className="flex flex-col md:flex-row justify-center my-auto mx-auto  w-11/12 first-line:sm:10/12 md:9/12 lg:w-8/12 shadow-lg ">
        <div className="flex-1 bg-white px-8 py-4 flex items-center flex-col justify-center rounded-l-lg space-y-2 md:space-y-4  ">
          <JobRoleContainer
            roleImg={jobApply}
            btnName="job seeker"
            title={"Find a job"}
            bgColor={'primary'}
            textColor={"white"}
            handleClick= {jobSeekerHandler}
          />
        </div>
        <div className=" flex-1 flex items-center flex-col justify-center  bg-primary text-white px-8 py-4 space-y-3 md:space-y-4 rounded-r-lg ">
          <JobRoleContainer
            roleImg={jobProvide}
            btnName="job provider"
            title={"Post a job"}
            bgColor={'white'}
            textColor={"primary"}
            handleClick= {jobProviderHandler}

          />
        </div>
      </div>
    </div>
   </>
  );
};

export default RolePage;
