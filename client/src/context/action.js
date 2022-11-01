import axios from "axios";
import { useContext } from "react";
import { DispatchContext, useStateValue } from "./GlobalContext";

export const useDispatchAction = () => {
  const dispatch = useContext(DispatchContext);
  const {
    token,
    position,
    jobType,
    jobLocation,
    company,
    status,
    experience,
    salary,
    jobDetails,
    candidates,
    skills,
    editJobId,
    filterStatus,
    filterJobType,
    filterExperience,
    sort,
    page,
    searchPosition,
    searchLocation,
    userAppliedJobs,
  } = useStateValue();
  const formData = {
    position,
    jobType,
    jobLocation,
    company,
    status,
    experience,
    salary,
    skills,
    jobDetails,
    candidates,
  };
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  authFetch.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  const addUserDataToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("userLocation", location);
  };
  const addAppliedJobsToLocalStorage = (userAppliedJobs) => {
    localStorage.setItem("myJobs", JSON.stringify(userAppliedJobs));

  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("location");
  };

  const increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const changePage = (page) => {
    dispatch({
      type: "CHANGE_PAGE",
      payload: { page },
    });
  };
  
  // clear Alert

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: "CLEAR_ALERT",
      });
    }, 3000);
  };

  // clear Alert

  const createAlert = ({alertText,alertType}) => {
    dispatch({
      type: "CREATE_ALERT",
      payload:{alertText,alertType}
    });
    clearAlert()
};

  //clear values
  const clearValues = () => {
    dispatch({
      type: "CLEAR_VALUES",
    });
  };

  //clearFIlters
  const clearFilters = () => {
    dispatch({
      type: "CLEAR_FILTERS",
    });
  };
  // Update Change

  const updateChange = ({ name, value }) => {
    dispatch({
      type: "UPDATE_CHANGE",
      payload: { name, value },
    });
  };

  const searchChange = (value) => {
    dispatch({
      type: "SEARCH_CHANGE",
      payload: { value },
    });
  };
  // user authentication
  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: "SETUP_USER_PENDING" });
    try {
      const { data } = await axios.post(`api/v1/auth/${endPoint}`, currentUser);
      const { user, token, location } = data;
      dispatch({
        type: "SETUP_USER_SUCCESS",
        payload: { user, token, location, alertText },
      });
      addUserDataToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: "SETUP_USER_FAILURE",
        payload: error.response.data.msg,
      });
    }
    clearAlert();
  };

  //updateuser
  const updateUser = async (currentUser) => {

    dispatch({ type: "USER_UPDATE_PENDING" });

    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);
      const { user, location, token } = data;
      dispatch({
        type: "USER_UPDATE_SUCCESS",
        payload: { user, location, token },
      });
      addUserDataToLocalStorage({ user, location, token });
    } catch (error) {
      dispatch({
        type: "USER_UPDATE_FAILURE",
        payload: error.response.data.msg,
      });
    }
    clearAlert();
  };

  //logout
  const logoutUser = () => {
    dispatch({ type: "LOGOUT_USER" });
    removeUserFromLocalStorage();
  };

  const createJob = async () => {
    dispatch({ type: "CREATE_JOB_PENDING" });
    try {
      const { data } = await authFetch.post("/jobs", { ...formData });
      dispatch({ type: "CREATE_JOB_SUCCESS", payload: data });
      clearValues();
    } catch (error) {
      dispatch({
        type: "CREATE_JOB_FAILURE",
        payload: error.response.data.msg,
      });
    }
    clearAlert();
  };

  const popGetJobs = async() => {
  

    dispatch({
      type:"POP_GET_JOBS_PENDING",
    })
    try {
      const {data} = await authFetch('/jobs/all_jobs');
      const {jobs}  = data;
      dispatch({
        type:"POP_GET_JOBS_SUCCESS",
        payload:{
          jobs
        }
      })
    }catch (error) {
      dispatch({
        type:"POP_GET_JOBS_FAILURE",
      payload: error.response.data.msg,

      })
    }
  }

  const getAllJobs = async () => {
    let url = `/jobs/all?page=${page}&status=${filterStatus}&jobType=${filterJobType}&experience=${filterExperience}&sort=${sort}`;

    if (searchPosition) {
      url = url + `&searchPosition=${searchPosition}`;
    }
    if (searchLocation) {
      url = url + `&searchLocation=${searchLocation}`;
    }
    dispatch({ type: "GET_ALL_JOBS_PENDING" });
    try {
      const { data } = await authFetch(url);
      const { jobs, totalJobs, numOfPages } = data;
      dispatch({
        type: "GET_ALL_JOBS_SUCCESS",
        payload: {
          jobs,
          totalJobs,
          numOfPages,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_ALL_JOBS_FAILURE",
        payload: error.response.data.msg,
      });
    }
  };

  const getJobs = async () => {
    let url = `/jobs?page=${page}&status=${filterStatus}&jobType=${filterJobType}&experience=${filterExperience}&sort=${sort}`;

    if (searchPosition) {
      url = url + `&searchPosition=${searchPosition}`;
    }
    if (searchLocation) {
      url = url + `&searchLocation=${searchLocation}`;
    }
    dispatch({ type: "GET_JOBS_PENDING" });
    try {
      const { data } = await authFetch(url);
      const { jobs, totalJobs, numOfPages } = data;
      dispatch({
        type: "GET_JOBS_SUCCESS",
        payload: {
          jobs,
          totalJobs,
          numOfPages,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_JOBS_FAILURE",
        payload: error.response.data.msg,
      });
    }
  };

  const getSingleJob = async ({ id }) => {
    dispatch({
      type: "GET_SINGLE_JOB_PENDING",
    });
    try {
      const { data } = await authFetch(`/jobs/all/${id}`);
      const { job } = data;
      dispatch({
        type: "GET_SINGLE_JOB_SUCCESS",
        payload: job,
      });
    } catch (error) {
      dispatch({
        type: "GET_SINGLE_JOB_FAILURE",
        payload: error.response.data.msg,
      });
    }
  };

  const setEditJob = (id) => {
    dispatch({
      type: "SET_EDIT_JOB",
      payload: { id },
    });
  };

  const editJob = async () => {
    dispatch({ type: "EDIT_JOB_PENDING" });
    try {
      await authFetch.patch(`/jobs/${editJobId}`, {
        position,
        company,
        jobLocation,
        jobType,
        status,
        experience,
        salary,
        jobDetails,
        skills,
        candidates,
      });
      dispatch({ type: "EDIT_JOB_SUCCESS" });
      clearValues();
    } catch (error) {
      dispatch({
        type: "EDIT_JOB_FAILURE",
        payload: error.response.data.msg,
      });
    }
    clearAlert();
  };

  const deleteJob = async (jobId) => {
    dispatch({ type: "DELETE_JOB_PENDING" });
    try {
      await authFetch.delete(`/jobs/${jobId}`);
      getJobs();
    } catch (error) {
      dispatch({
        type: "DELETE_JOB_FAILURE",
        payload: error.response.data.msg,
      });
    }
  };

  const toGoAnotherAccount = () => {
    dispatch({
      type: "GO_TO_ANOTHER_ACCOUNT",
    });
  };

  const applyJob = (job) => {
    
    const findIndex = userAppliedJobs?.findIndex(
      (userJob) => userJob._id === job._id
    );
    if (findIndex >= 0) {
      dispatch({
        type: "ERROR_APPLIED_JOBS",
        payload: {err:`${job.position} Job has already been applied`},
      });
      
    } else {
      dispatch({
        type: "USER_APPLIED_JOBS",
        payload: job,
      });
    }

    clearAlert();
  };

  return {
    increment,
    createAlert,
    clearAlert,
    clearFilters,
    changePage,
    updateChange,
    searchChange,
    setupUser,
    updateUser,
    logoutUser,
    createJob,
    getAllJobs,
    getJobs,
    getSingleJob,
    setEditJob,
    editJob,
    deleteJob,
    applyJob,
    toGoAnotherAccount,
    popGetJobs
  };
};
