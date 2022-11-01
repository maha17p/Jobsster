import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import { useStateValue } from "../../context/GlobalContext";
import { useDispatchAction } from "../../context/action";
import Alert from "../../components/Alert";
import FormText from "../../components/FormText";
import MetaData from "../../components/MetaData";

const AddJobPage = () => {
  const {
    position,
    company,
    status,
    jobLocation,
    jobType,
    jobDetails,
    salary,
    experience,
    skills,
    experinceList,
    candidates,
    jobTypeList,
    statusList,
    showAlert,
    isEditing,
  } = useStateValue();
  const { updateChange, createJob, editJob } = useDispatchAction();

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateChange({ name, value });
  };
  return (
    <>
      <MetaData title={"Add Job"} />

      <div className="flex my-8">
        <div className="m-auto md:w-8/12 bg-white shadow-lg">
          <form onSubmit={submitHandler} className=" p-4 space-y-2">
            {/* title */}
            {/* title */}
            <h2 className="text-center uppercase  font-semibold tracking-wider text-xl italic">
              Post job
            </h2>
            {/* showAlert */}
            {showAlert && <Alert />}

            {/* position */}
            <FormInput
              name="position"
              value={position}
              handleChange={handleChange}
            />

            {/* company */}
            <FormInput
              name="company"
              value={company}
              handleChange={handleChange}
            />

            {/* Job Location */}
            <FormInput
              name="jobLocation"
              labelText="job location"
              value={jobLocation}
              handleChange={handleChange}
            />

            {/* Job Candidates */}
            <FormInput
              name="candidates"
              labelText="candidates required"
              value={candidates}
              handleChange={handleChange}
            />

            {/* skills */}
            <FormInput
              name="skills"
              labelText="skills"
              value={skills}
              handleChange={handleChange}
            />
            {/* salary */}
            <FormInput
              name="salary"
              labelText="salary per month"
              value={salary}
              handleChange={handleChange}
            />

            {/* job type */}
            <FormSelect
              name="jobType"
              labelText="job type"
              value={jobType}
              listOfItems={["full-time", "part-time", "remote", "internship"]}
              handleChange={handleChange}
            />
            {/* experience */}
            <FormSelect
              name="experience"
              value={experience}
              listOfItems={[
                "fresher",
                `1+year's`,
                `2+year's`,
                `5+year's`,
                `10+year's`,
              ]}
              handleChange={handleChange}
            />

            {/* Status */}
            <FormSelect
              name="status"
              value={status}
              listOfItems={["interview", "declined", "pending"]}
              handleChange={handleChange}
            />

            {/* Job Details */}
            <FormText
              labelText="Job Details"
              name="jobDetails"
              value={jobDetails}
              handleChange={handleChange}
            />

            {/* btnContainer */}
            <div className="text-start space-x-2  ">
              <button
                type="submit"
                className="px-6 py-2 my-2 tracking-wider uppercase bg-primary text-white rounded-full text-xs  font-semibold transition-all duration-200 hover:text-secondary hover:tracking-widest"
              >
                submit
              </button>
              <button className="px-6 py-2 my-2 tracking-wider uppercase bg-secondary text-primary font-bold rounded-full text-xs  transition-all duration-200 hover:text-white hover:tracking-widest">
                clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddJobPage;
