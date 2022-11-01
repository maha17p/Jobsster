import React from "react";
import { useDispatchAction } from "../context/action";
import { useStateValue } from "../context/GlobalContext";
import FormSelect from "./FormSelect";

const DropDownFilters = () => {
  const {  filterStatus, filterJobType,filterExperience, } = useStateValue();
  const { updateChange } = useDispatchAction();
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateChange({ name, value });
  };
  return (
    <div className="flex items-center justify-center space-x-0 md:space-x-6 space-y-2 md:space-y-0   flex-col md:flex-row">
      <FormSelect
        name={"filterStatus"}
        labelText={"Filter by status"}
        value={filterStatus}
        listOfItems={['all','interview','declined','pending']}
        handleChange={handleChange}
      />

      <FormSelect
        name={"filterJobType"}
        labelText={"Filter by Job Type"}
        value={filterJobType}
        listOfItems={['all','full-time', 'part-time', 'remote', 'internship']}
        handleChange={handleChange}
      />
      <FormSelect
        name={"filterExperience"}
        labelText={"Filter by Experience"}
        value={filterExperience}
        listOfItems={['all','fresher', `1+year's`, `2+year's`, `5+year's`,`10+year's`]}
        handleChange={handleChange}
      />
      


    </div>
  );
};

export default DropDownFilters;
