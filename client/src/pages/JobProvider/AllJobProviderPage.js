import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { accessDenied, empty } from "../../assets";
import AccessDenied from "../../components/AccessDenied";

import AvailableJobsContainer from "../../components/AvailableJobsContainer";
import EmptyItems from "../../components/EmptyItems";
import Loading from "../../components/Loading";
import MetaData from "../../components/MetaData";
import PageBtnContainer from "../../components/PageBtnContainer";
import SearchJobContainer from "../../components/SearchJobContainer";
import { useDispatchAction } from "../../context/action";
import { useStateValue } from "../../context/GlobalContext";

const AllJobPage = () => {
  const { getJobs, toGoAnotherAccount, clearFilters, popGetJobs } =
    useDispatchAction();
  const {
    jobs,
    isLoading,
    searchPosition,
    searchLocation,
    filterStatus,
    filterJobType,
    showLinkAlert,
    totalJobs,
    alertLinkText,
    page,
    user,
    allJobs,
    filterExperience,
  } = useStateValue();
  const navigate = useNavigate();
  const seekerHandler = () => {};
  const clearFilterHandler = () => {
    clearFilters();
  };

  const alertHandler = () => {
    toGoAnotherAccount();
    navigate("/register");
  };
  const addHandler = () => {
    if (user.role === 1) {
      navigate("/job_provider/add_job");
    } else if (user.role === 2) {
      clearFilters();
    }
  };

  useEffect(() => {
    if (user) {
      popGetJobs();
    }
  }, [user.role]);

  useEffect(() => {
    getJobs();
  }, [
    page,
    searchPosition,
    searchLocation,
    filterStatus,
    filterJobType,
    filterExperience,
  ]);
  console.log({ allJobs });
  if (isLoading) {
    return <Loading />;
  }
  if (showLinkAlert) {
    return (
      <AccessDenied
        accountName={"Job Provider account"}
        alertText={alertLinkText}
        alertHandler={alertHandler}
        alertImage={accessDenied}
      />
    );
  }
  return (
    <>
      <MetaData title={"All Jobs"} />
      <SearchJobContainer allJobs={allJobs} />
      {totalJobs === 0 ? (
        <EmptyItems
          user={user}
          addHandler={addHandler}
          empty={empty}
          clearFilter={clearFilterHandler}
        />
      ) : (
        <AvailableJobsContainer
          jobs={jobs}
          totalJobs={totalJobs}
         
        />
      )}
    </>
  );
};

export default AllJobPage;
