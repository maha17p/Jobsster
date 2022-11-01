import { useContext } from "react";
import { createContext, useReducer } from "react";

const StateContext = createContext();
const DispatchContext  = createContext();

const user = localStorage.getItem("user")
const userLocation = localStorage.getItem("userLocation")
const token = localStorage.getItem("token")
const userAppliedJobs  =  localStorage.getItem("myJobs")

const initialState = {
    value:0,
    isLoading:null,
    user:user ? JSON.parse(user):null ,
    token:token,
    userLocation:userLocation,
    alertText:"",
    alertLinkText:"",
    alertType:"",
    showAlert:null,
    showLinkAlert:null,
    singleJob:[],
    userAppliedJobs: userAppliedJobs ? JSON.parse(userAppliedJobs):[],
    isEditing:"",
    editJobId:"",
    position:"",
    company:"",
    jobLocation:"",
    status:"pending",
    jobType:"full-time",
    jobDetails:"",
    experince:"fresher",
    candidates:1,
    skills:"",
    salary:"",
    jobTypeList:['full-time', 'part-time', 'remote', 'internship'],
    statusList:['interview','declined','pending'],
    experinceList:['fresher', '1+', '2+', '5+','10+'],
    jobs: [],
    allJobs:[],
    totalJobs: 0,
    numOfPages: 1,
    page:1,
    filterStatus:"all",
    filterJobType:"all",
    filterExperience:"all",
    sort:"latest",
    sortList:['latest', 'oldest', 'a-z', 'z-a'],
    searchPosition:"",
    searchLocatioon:"",
    toGoAnother:false,
    isActive:false

}


const AppContextProvider = ({reducer,initialState,children}) => {
    const [state,dispatch] = useReducer(reducer, initialState)
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
};


const useStateValue = () => useContext(StateContext);

export {
    DispatchContext,
    initialState,
    AppContextProvider,
    useStateValue
}