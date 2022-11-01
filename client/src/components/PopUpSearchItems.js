import React,{useEffect} from "react";
import { useDispatchAction } from "../context/action";
import { useStateValue } from "../context/GlobalContext";
import Loading from "./Loading";

const PopUpSearchItems = ({
  icon,
  text,
  type,
  name,
  value,
  updateValue,
  handleChange,
  jobs,
}) => {
  const {popGetJobs} = useDispatchAction()
  const {allJobs,isLoading,user} = useStateValue()
  const popUpHandler = (searchPositionName) => {
    updateValue((prev) => ({
      ...prev,
      ["searchPosition"]: searchPositionName,
    }));
  };
  
  if(isLoading){
    return <Loading />
  }

 


  return (
    <div className="flex space-x-2 relative items-center border border-gray-300 md:border-none rounded-full pr-10  ">
      <div className="h-8 w-8 rounded-full  bg-blue-100  ">
        <span className="flex justify-center items-center h-full text-primary">
          {icon}
        </span>
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={text}
        className="h-full w-full text-sm outline-none placeholder:tracking-wider placeholder:text-xs placeholder:text-gray-600 placeholder:capitalize 
      "
      />
      {allJobs && (
        <div className="z-30 absolute top-10 left-5 md:left-0 right-0 shadow-lg bg-white text-sm tracking-wide rounded-md divide-y ">
          {allJobs
            ?.filter((item) => {
              const searchTerm = value.toLowerCase();
              const jobPosition = item.position.toLowerCase();
              return (
                value &&
                jobPosition.includes(searchTerm) &&
                jobPosition !== searchTerm
              );
            })
            .slice(0, 5)
            .map((item) => {
              return (
                <p
                  key={item._id}
                  onClick={() => popUpHandler(item.position)}
                  className="cursor-pointer hover:bg-bgColor transition-colors duration-300 ease-in-out p-2"
                >
                  {item.position}
                </p>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default PopUpSearchItems;
