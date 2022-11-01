import moment from "moment";

import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { VscPassFilled } from "react-icons/vsc";
import { MdSmsFailed, MdPending } from "react-icons/md";
import JobInfo from "./JobInfo";
const JobCenterDetails = ({jobLocation,jobType,status,createdAt}) => {
  
    let date = moment(createdAt);
    date = date.format("MMM Do, YYYY");
    return (
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
  )
}

export default JobCenterDetails