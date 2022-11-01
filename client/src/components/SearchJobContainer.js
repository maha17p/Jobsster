import React, { useState } from "react";
import { VscBriefcase } from "react-icons/vsc";
import { MdLocationOn } from "react-icons/md";
import { ButtonStyle, Title } from "../styles/ComponentStyle";
import { useStateValue } from "../context/GlobalContext";
import { useDispatchAction } from "../context/action";
import PopUpSearchItems from "./PopUpSearchItems";
import DropDownFilters from "./DropDownFilters";

const initialState = {
  searchPosition:"",
  searchLocation:"",

}

const SearchJobContainer = () => {
  const [value,setValue] = useState(initialState)
  const {searchChange} = useDispatchAction()

  const changeHandler =(e) => {
    const {name,value} = e.target; 
    setValue(prev => ({...prev, [name]:value}))
  }
  const submitHandler = e => {
    e.preventDefault();
    searchChange(value)

    
  }

  

  return (
    <div className="bg-white w-full h-full  p-4  overflow-hidden space-y-2">

      <div className=" flex items-center justify-center flex-col space-y-3">
        <Title text={"Looking for a job now"} />
        <p className="text-xs text-gray-600">
          Type in the name of the position, company or job category you are
          looking for
        </p>
        
        <form onSubmit={submitHandler} className=" md:border border-gray-300 mx-auto  rounded-full flex items-center justify-between flex-col md:flex-row px-4">
          <div className=" flex flex-1 md:justify-between space-y-2 md:space-y-0  md:space-x-2 items-center flex-col md:flex-row py-2 px-4   ">
            <PopUpSearchItems
              icon={<VscBriefcase />}
              type="text"
              text="Position"
              name="searchPosition"
              value={value.searchPosition}
              updateValue = {setValue}
              handleChange={changeHandler}
            />
            <PopUpSearchItems
              icon={<MdLocationOn />}
              type="text"
              text="Location"
              name="searchLocation"
              value={value.searchLocation}
              updateValue = {setValue}
              handleChange={changeHandler}
            />
          
          </div>
          
          <div className=" flex justify-end">
            <ButtonStyle
              label={"search"}
              primary={'primary'}
              secondary={'white'}
              rounded={'full'}
            />
          </div>
        </form>
      </div>

      <DropDownFilters

      />
    </div>
  );
};

export default SearchJobContainer;
