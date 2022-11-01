import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "../components/Alert";
import Job from "../components/Job";
import JobCenterDetails from "../components/JobCenterDetails";
import Loading from "../components/Loading";
import MetaData from "../components/MetaData";
import { useDispatchAction } from "../context/action";
import { useStateValue } from "../context/GlobalContext";
import { ButtonLink, ButtonStyle, FilterItem } from "../styles/ComponentStyle";

const JobDescription = () => {
  const { id } = useParams();
  const { getSingleJob, getAllJobs, createAlert } = useDispatchAction();
  const {
    singleJob,
    jobs,
    userAppliedJobs,
    isLoading,
    totalJobsResult,
    showAlert,
    user,
  } = useStateValue();
  const navigate = useNavigate();
  const filterJobs = jobs?.filter((job) => job?._id !== singleJob?._id);

  const getAppliedJobs = localStorage.getItem('myJobs') ? JSON.parse(localStorage.getItem('myJobs')) : [];



  const applyHandler = (job) => {
    const findIndex = getAppliedJobs.findIndex(userJob => userJob._id === job._id)
    if(findIndex >= 0){
      createAlert({alertText:"Job has been already applied",alertType:"danger"})
    }else{
     getAppliedJobs.push(job)
     createAlert({alertText:"Job has been applied successfully!",alertType:"success"})
    }
    localStorage.setItem("myJobs", JSON.stringify(getAppliedJobs));

  };
  const backAllJobHandler = () => {
    navigate(`${user.role ===1? '/job_provider/all_job':'/job_seeker/all_job'}`);
  };
  useEffect(() => {
    getAllJobs();
  }, [id]);
  useEffect(() => {
    getSingleJob({ id });
  }, [id]);
  if (isLoading) return <Loading />;
  return (
    <>
    <MetaData title={'Job Details'} />
    <div className="py-4">
      <ButtonLink
        bgColor={"primary"}
        textColor={"white"}
        text={"Back to all job"}
        clickHandler={backAllJobHandler}
      />
      <div className=" space-y-8">
        {singleJob && (
          <div className="bg-white px-4 py-1 divide-y-4 divide-primary shadow rounded">
            {/* job section*/}
            <section className="divide-y">
              {showAlert && <Alert />}
              <header className="flex items-center justify-between">
                <div className="flex space-x-4 items-center py-4">
                  <div className="h-8 w-8 bg-primary rounded ">
                    <p className="text-white flex items-center justify-center font-semibold h-full ">
                      {singleJob?.company?.charAt(0)}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-semibold tracking-wide  ">
                      {singleJob?.position}
                    </h4>
                    <p className="text-sm text-gray-800 tracking-widest">
                      {singleJob?.company}
                    </p>
                  </div>
                </div>
                {user.role === 2 && (
                  <ButtonLink
                    bgColor={"primary"}
                    textColor={"white"}
                    text={"Apply Now"}
                    clickHandler={() => applyHandler(singleJob)}
                  />
                )}
              </header>
              <JobCenterDetails {...singleJob} />
            </section>
            {/* job description*/}
            <section>
              <h3 className="py-3  font-semibold  tracking-wide uppercase">
                Job Description
              </h3>
              <div>
                <div>
                  <h4 className="text-gray-500 font-semibold tracking wide py-2">
                    Job Brief:
                  </h4>
                  <p className="text-gray-800 text-sm ">
                    {singleJob?.jobDetails}
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-500 font-semibold tracking wide py-2">
                    Skills Required:
                  </h4>
                  <p className="flex flex-wrap gap-2 items-center justify-center">
                    {singleJob?.skills?.split(",").map((item, index) => {
                      return (
                        <React.Fragment key={index}>
                          {item === " " ? null : (
                            <span
                              className="bg-primary text-white px-4 py-1 text-xs
                    rounded capitalize tracking-wider "
                            >
                              {item}
                            </span>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-500 font-semibold tracking wide py-2">
                    Experience Required :
                    {singleJob?.experience === "fresher" ? (
                      <span className="text-gray-800 capitalize ml-1  text-sm">
                        {singleJob?.experience}
                      </span>
                    ) : (
                     <>
                      <span className="text-gray-800 ml-1  text-sm">
                        {singleJob?.experience}
                      </span>
                      <span className="text-xs text-gray-600">years</span>
                     </>
                    )}
                  </h4>
                </div>
                <div>
                  <h4 className="text-gray-500 font-semibold tracking wide py-2 inline-bl">
                    Candidates Required :
                    <span className="text-gray-800 ml-1">
                      {singleJob?.candidates}
                    </span>
                  </h4>
                </div>
                <div>
                  <h4 className="text-gray-500 font-semibold tracking wide py-2 inline-bl">
                    Salary:
                    <span className="font-bold text-sm text-primary ml-1">
                      &#8377;{singleJob?.salary}
                    </span>
                    <span className="text-xs text-gray-600">/month</span>
                  </h4>
                </div>
              </div>
            </section>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2  gap-4  ">
          {filterJobs.map((job) => (
            <Job key={job._id} {...job} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default JobDescription;
