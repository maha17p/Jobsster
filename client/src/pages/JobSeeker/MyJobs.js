import React from "react";
import moment from "moment";
import { useStateValue } from "../../context/GlobalContext";
import { Title } from "../../styles/ComponentStyle";
import AccessDenied from "../../components/AccessDenied";
import { useNavigate } from "react-router-dom";
import { empty } from "../../assets";

const MyJobs = () => {
  const myJobs = localStorage.getItem('myJobs') ? JSON.parse(localStorage.getItem('myJobs')):[];
const navigate = useNavigate()
  const applyJobHandler = () => {
    navigate('/job_seeker/all_job')
  }
  if(myJobs.length === 0){
    return <AccessDenied 
      alertHandler={applyJobHandler}
      alertText={`You haven't applied Job.`}
      accountName={'all jobs'}
      alertImage = {empty}
    
    />
  }
  return (
    <div className="py-8">
    
      <section className="">
        <div className=" grid-cols-1 grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4    ">
          {myJobs && myJobs.map(
            (
              { position, jobLocation, company, jobType, status, createdAt },
              index
            ) => {
              let date = moment(createdAt);
              date = date.format("MMM Do, YYYY");
              return (
                <div
                  key={index}
                  className="bg-white rounded shadow px-4  divide-y   "
                >
                  <header className="py-3">
                    <h1 className="text-sm font-bold uppercase">{position}</h1>
                    <p className="text-xs text-gray-600">{jobType}</p>
                  </header>
                  <div className="py-3">
                    <h1 className="text-xs font-semibold uppercase">
                      {company}
                    </h1>
                    <p className="text-xs text-gray-600">{jobLocation}</p>
                  </div>

                  <footer className="py-3 flex items-center justify-between">
                    <div className="space-y-1">
                      <p>
                        <span className="font-semibold text-sm text-primary">
                          $2000
                        </span>
                        <span className="text-xs text-gray-600">/month</span>
                      </p>
                      <p className="text-xs text-gray-600">{date}</p>
                    </div>
                    <div>
                      <p
                        className={`text-xs uppercase font-bold ${
                          status === "interview"
                            ? "text-green-500"
                            : status === "declined"
                            ? "text-red-500"
                            : "text-yellow-500"
                        }`}
                      >
                        {status}
                      </p>
                    </div>
                  </footer>
                </div>
              );
            }
          )}
        </div>
      </section>
    </div>
  );
};

export default MyJobs;
