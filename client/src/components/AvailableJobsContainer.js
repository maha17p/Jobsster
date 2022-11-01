import { useDispatchAction } from "../context/action";
import { ButtonLink, Title } from "../styles/ComponentStyle";
import Job from "./Job";
import PageBtnContainer from "./PageBtnContainer";
import { useStateValue } from "../context/GlobalContext";

const AvailableJobsContainer = ({
  jobs,
  totalJobs,
 
}) => {
  const { clearFilters } = useDispatchAction();
  const {user} = useStateValue()


  const clearFilterHandler = () => {
    clearFilters();
  };




  return (
    <div className="space-y-4 my-4">
      <Title text={user?.role === 1 ? "Posted Job" : "Available Jobs"} />

      <div className="flex justify-between items-center">
        <p className="font-bold text-sm text-gray-600">
          {totalJobs} Job's Found
        </p>
        <div className="space-x-4 flex items-center">
            <ButtonLink
              clickHandler={clearFilterHandler}
              text={"clear filters"}
              bgColor={'primary'}
              textColor={'white'}
              />
            
          </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 pb-8  ">
        {jobs?.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
      <PageBtnContainer />
    </div>
  );
};

export default AvailableJobsContainer;
