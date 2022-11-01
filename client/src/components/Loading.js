import React from "react";

const Loading = ({ center }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-20 h-20 rounded-full  border-4 border-t-primary shadow animate-spin mx-auto mt-8"></div>
      <p className="font-bold py-2 tracking-wide ">Loading...</p>
      <p className="text-gray-600 text-sm font-semibold">This may take a few seconds,</p>
      <p className="text-gray-600 text-sm font-semibold">please don't close this page</p>
    </div>
  );
};

export default Loading;
