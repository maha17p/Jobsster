import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className=" w-full ">
      <Header />
      <div className="  px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-maxWidth mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
