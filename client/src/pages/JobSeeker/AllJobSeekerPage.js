import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { accessDenied, empty } from "../../assets";
import AccessDenied from "../../components/AccessDenied";

import AvailableJobsContainer from "../../components/AvailableJobsContainer";
import EmptyItems from "../../components/EmptyItems";
import Loading from "../../components/Loading";
import SearchJobContainer from "../../components/SearchJobContainer";
import { useDispatchAction } from "../../context/action";
import { useStateValue } from "../../context/GlobalContext";

const AllJobPage = () => {
  const {
    jobs,
    isLoading,
    searchPosition,
    searchLocation,
    filterStatus,
    filterJobType,
    showLinkAlert,
    alertLinkText,
    totalJobs,
    page,
    user,
    allJobs,
    filterExperience
  } = useStateValue();
  const { getAllJobs, toGoAnotherAccount, clearFilters, popGetJobs } = useDispatchAction();
  const navigate = useNavigate()

  const alertHandler = () => {
    toGoAnotherAccount()
    navigate("/register")
  }
  const addHandler = () => {
    if(user.role ===1){
    navigate("/job_provider/add_job");
    }else if(user.role ===2){
      clearFilters()
    }
  };

  
  useEffect(() => {
    if (user) {
      popGetJobs();
    }
  }, [user.role]);
  useEffect(() => {
    getAllJobs();
  }, [page, searchPosition, searchLocation, filterStatus, filterJobType,filterExperience]);
  


  if (isLoading) {
    return <Loading />;
  }
  if (showLinkAlert) {
    return (
      <AccessDenied
        accountName={"Job Seeker account"}
        alertText={alertLinkText}
        alertHandler={alertHandler}
        alertImage={accessDenied}
      />
    );
  }
  if (totalJobs === 0) {
    return (
      <>
        <SearchJobContainer />
        <EmptyItems user={user} addHandler={addHandler} empty={empty} />
      </>
    );
  }
  return (
    <>
      <SearchJobContainer
      allJobs={allJobs}
      />
      <AvailableJobsContainer
        jobs={jobs}
        totalJobs={totalJobs}
   
      />
    </>
  );
};

export default AllJobPage;
