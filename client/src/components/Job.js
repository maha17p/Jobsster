import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { VscPassFilled } from "react-icons/vsc";
import { MdSmsFailed, MdPending } from "react-icons/md";
import JobInfo from "./JobInfo";
import { useDispatchAction } from "../context/action";
import { useStateValue } from "../context/GlobalContext";
import { ButtonLink } from "../styles/ComponentStyle";

const Job = ({
  _id,
  company,
  createdAt,
  jobLocation,
  jobType,
  position,
  status,
  salary,
  experience,
}) => {
  const { setEditJob, deleteJob } = useDispatchAction();
  const { user } = useStateValue();

  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <div className="bg-white  px-4 py-1 divide-y shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] ease-in-out duration-100 rounded">
      <header className="flex space-x-4 items-center py-4">
        <div className="h-8 w-8 bg-primary rounded ">
          <p className="text-white flex items-center justify-center font-semibold h-full ">
            {company.charAt(0)}
          </p>
        </div>
        <div>
          <h4 className="text-semibold tracking-wide  ">{position}</h4>
          <p className="text-sm text-gray-800 tracking-widest">{company}</p>
        </div>
      </header>
      <div className="py-4 grid grid-cols-2 space-y-1">
        <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
        <JobInfo icon={<FaCalendarAlt />} text={date} />

        <JobInfo icon={<FaBriefcase />} text={jobType} />

        <div className="flex items-center space-x-2 ">
          <p className="text-[0.65rem] text-secondary">
            {status === "interview" ? (
              <VscPassFilled />
            ) : status === "pending" ? (
              <MdPending />
            ) : (
              <MdSmsFailed />
            )}
          </p>
          <p className="text-sm text-gray-600 capitalize tracking-wide ">
            {status}
          </p>
        </div>
      </div>
      <div className="flex items-center  py-4">
        <p className="flex-1 flex items-center justify-start">
          <span className="font-bold text-sm text-primary">  &#8377;{salary}</span>
          <span className="text-xs text-gray-600">/month</span>
        </p>

        <p className="flex-1 flex items-center justify-start">
          {experience === "fresher" ? (
            <span className="font-bold text-sm text-primary capitalize">
              {experience}
            </span>
          ) : (
            <>
              <span className="font-bold text-sm text-primary">{experience}</span>
              <span className="text-xs text-gray-600">years</span>
            </>
          )}
        </p>
      </div>
      <footer className=" py-4 flex items-center justify-between ">
      <p className="flex-1 flex items-center justify-start">
          <Link
            to={`/all_job/job_description/${_id}`}
            className="uppercase text-xs px-4 py-1 bg-primary text-white font-semibold rounded
              hover:text-secondary hover:shadow-md transition-color duration-300 ease-in-out
              "
          >
            View Job
          </Link>
        </p>
        {user?.role === 1 && (
          <>
              <p className="flex-1 flex items-center justify-start space-x-4">
              <Link
                to="/job_provider/add_job"
                onClick={() => setEditJob(_id)}
                className="bg-green-200 hover:bg-green-300 uppercase text-xs px-4 py-1   font-semibold rounded
                 transition-color duration-300 ease-in-out
                "
              >
                Edit
              </Link>
              <button
                onClick={() => deleteJob(_id)}
                className="bg-red-200 hover:bg-red-300 uppercase text-xs px-4 py-1   font-semibold rounded
                transition-color duration-300 ease-in-out"
              >
                Delete
              </button>
            </p>
          </>
        )}
      </footer>
    </div>
  );
};

export default Job;
