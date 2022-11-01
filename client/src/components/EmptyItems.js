import React from "react";
import { ButtonLink } from "../styles/ComponentStyle";

const EmptyItems = ({ user, addHandler, empty, clearFilter }) => {
  return (
    <div className=" flex py-8">
      <div className="m-auto space-y-3">
        <img
          className="h-[200px] w-[200px] flex items-center justify-center mx-auto"
          src={empty}
          alt="No jobs"
        />
        <p className="text-center  font-semibold text-2xl">
          {user.role === 1
            ? "You have not posted job."
            : user.role == 2
            ? "Cannot find the job you are looking for."
            : ""}
        </p>
        <div className="text-center space-x-2">
          <ButtonLink
            text={
              user.role === 1
                ? "Add Job"
                : user.role == 2
                ? "Reset Filters"
                : ""
            }
            bgColor={"primary"}
            textColor={"white"}
            clickHandler={addHandler}
          />
          {user && user.role ===1 && (
            <ButtonLink
              text={"Reset Filters"}
              bgColor={"white"}
              textColor={"primary"}
              clickHandler={clearFilter}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmptyItems;
