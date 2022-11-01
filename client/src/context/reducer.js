export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };

    // Clear ALert

    case "CLEAR_ALERT":
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };

    //clear Values

    case "CLEAR_VALUES":
      return {
        ...state,
        position: "",
        company: "",
        jobLocation: "",
        jobType: "full-time",
        status: "pending",
        experience: "fresher",
        skills: "",
        jobDetails: "",
        candidates: 1,
        salary: "",
      };

    //ClearFilters
    case "CLEAR_FILTERS":
      return {
        ...state,
        filterStatus: "all",
        filterJobType: "all",
        searchLocation: "",
        searchPosition: "",
        filterExperience:"all"
      };

    //ChangePage

    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.payload.page,
      };

    // UpdateChange

    case "UPDATE_CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "SEARCH_CHANGE":
      return {
        ...state,
        searchPosition: action.payload.value["searchPosition"],
        searchLocation: action.payload.value["searchLocation"],
      };

    // user authentication

    case "SETUP_USER_PENDING":
      return {
        ...state,
        isLoading: true,
      };

    case "SETUP_USER_SUCCESS":
      return {
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.location,
        showAlert: true,
        alertText: action.payload.alertText,
        alertType: "success",
        page: 1,
        filterStatus: "all",
        filterJobType: "all",
        filterExperience:'all',
        sort: "latest",
      };
    case "SETUP_USER_FAILURE":
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertText: action.payload,
        alertType: "danger",
      };
    // user update

    case "USER_UPDATE_PENDING":
      return {
        ...state,
        isLoading: true,
      };

    case "USER_UPDATE_SUCCESS":
      return {
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.location,
        showAlert: true,
        alertText: "User Profile Updated!",
        alertType: "success",
      };
    case "USER_UPDATE_FAILURE":
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertText: action.payload,
        alertType: "danger",
      };

    //LogoutUser

    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
        token: null,
        userLocation: null,
      };

    //   Job Creation

    case "CREATE_JOB_PENDING":
      return { ...state, isLoading: true };

    case "CREATE_JOB_SUCCESS":
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertText: "New Job Created !",
        alertType: "success",
      };

    case "CREATE_JOB_FAILURE":
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertText: action.payload,
        alertType: "danger",
      };

    case "POP_GET_JOBS_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "POP_GET_JOBS_SUCCESS":
      return {
        ...state,
        isLoading: false,

        allJobs: action.payload.jobs,
      };
    case "POP_GET_JOBS_FAILURE":
      return {
        ...state,
        isLoading: false,

      };
    //GetJobs
    case "GET_ALL_JOBS_PENDING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_ALL_JOBS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        showLinkAlert: false,
        jobs: action.payload.jobs,
        totalJobs: action.payload.totalJobs,
        numOfPages: action.payload.numOfPages,
      };

    case "GET_ALL_JOBS_FAILURE":
      return {
        ...state,
        isLoading: false,
        showLinkAlert: true,
        alertType: "danger",
        alertLinkText: action.payload,
      };

    case "GET_JOBS_PENDING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_JOBS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        showLinkAlert: false,

        jobs: action.payload.jobs,
        totalJobs: action.payload.totalJobs,
        numOfPages: action.payload.numOfPages,
      };

    case "GET_JOBS_FAILURE":
      return {
        ...state,
        isLoading: false,
        showLinkAlert: true,
        alertType: "danger",
        alertLinkText: action.payload,
      };
    case "GET_SINGLE_JOB_PENDING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_SINGLE_JOB_SUCCESS":
      return {
        ...state,
        isLoading: false,
        singleJob: action.payload,
      };

    case "GET_SINGLE_JOB_FAILURE":
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertLinkText: action.payload,
      };

    case "SET_EDIT_JOB":
      const job = state.jobs.find((job) => job._id === action.payload.id);
      const {
        _id,
        position,
        company,
        jobLocation,
        jobType,
        status,
        experience,
        salary,
        skills,
        candidates,
        jobDetails
      } = job;
      return {
        ...state,
        editJobId: _id,
        isEditing: true,
        position,
        company,
        jobLocation,
        jobType,
        status,
        experience,
        salary,
        skills,
        candidates,
        jobDetails
      };

    //Edit Job
    case "EDIT_JOB_PENDING":
      return {
        ...state,
        isLoading: true,
      };

    case "EDIT_JOB_SUCCESS":
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "success",
        alertText: "Job Updated!",
      };

    case "EDIT_JOB_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload,
      };

    //Delete Job
    case "DELETE_JOB_PENDING":
      return {
        ...state,
        isLoading: true,
      };

    //applyJob

    case "USER_APPLIED_JOBS":
      return {
        ...state,
        userAppliedJobs: [...state.userAppliedJobs, action.payload],
        alertText: "Job has been applied !",
        alertType: "success",
        showAlert: true,
      };
    case "ERROR_APPLIED_JOBS":
      return {
        ...state,
        showAlert:true,
        alertText:action.payload.err,
        alertType:'danger'
      }


    //toGoanotherAccount
    case "GO_TO_ANOTHER_ACCOUNT":
      return {
        ...state,
        toGoAnother: true,
      };
    //toGoanotherAccount
    case "CREATE_ALERT":
      return {
        ...state,
        showAlert: true,
        alertText: action.payload.alertText,
        alertType: action.payload.alertType
      };

    default:
      return state;
  }
};
