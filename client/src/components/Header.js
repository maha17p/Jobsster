import React, { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useStateValue } from "../context/GlobalContext";
import { FaCaretDown, FaUserCircle, FaUserTie } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatchAction } from "../context/action";
import {
  HomeNavList,
  JobProviderNavList,
  JobSeekerNavList,
} from "../constants/Data";
import DropDownItem from "./DropDownItem";
import { logo } from "../assets";

const Header = () => {
  const [toggle, setToggle] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const { user } = useStateValue();
  const { logoutUser } = useDispatchAction();

  const dropDownRef = useRef();
  // useEffect(() => {
  //   const mouseDownHandler = (e) => {
  //     if (!dropDownRef.current.contains(e.target)) {
  //       setDropDown(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", mouseDownHandler);

  //   return () => document.removeEventListener("mousedown", mouseDownHandler);
  // }, []);
  const dropDownHandler = () => {
    setDropDown((prev) => !prev);
  };
  const menuHandler = () => {
    setToggle(!toggle);
  };
  const logoutHandler = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <>
      <div className="h-headerHeight "></div>
      <div className="fixed inset-0 h-headerHeight bg-primary z-50 ">
        <header className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-maxWidth mx-auto text-white flex h-full">
          {/*Left  */}
          <button className="flex-1 md:hidden text-start  ">
            <div
              onClick={menuHandler}
              className="inline-block  space-y-1 cursor-pointer "
            >
              <div
                className={`w-5 h-0.5 bg-gray-50 ${
                  toggle ? "transform translate-y-[3px] rotate-[-45deg]" : ""
                } transition-transform ease-in-expo duration-300`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-gray-50 ${toggle ? "hidden" : ""}`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-gray-50 ${
                  toggle ? "transform translate-y-[-3px] rotate-[45deg]" : ""
                } transition-transform ease-in-expo duration-300`}
              ></div>
            </div>
          </button>
          <Link
            to="/"
            className=" justify-center flex-1  flex md:justify-start items-center "
          >
            <div className="flex items-center ">
              <img src={logo} alt="" />
            </div>

          </Link>

          {/* center */}
          <div className="flex-1 md:flex items-center justify-center h-full hidden ">
            {user?.role === 1 ? (
              <Navbar navList={JobProviderNavList} />
            ) : user?.role === 2 ? (
              <Navbar navList={JobSeekerNavList} />
            ) : (
              <Navbar navList={HomeNavList} />
            )}
          </div>

          {/* right */}
          <div className="flex-1 flex justify-end items-center divide-x  ">
            {!user ? (
              <Link
                to="/register"
                className=" tracking-wide bg-transparent  text-sm text-secondary mr-2   font-semibold  "
              >
                Sign Up
              </Link>
            ) : (
              <div className="relative mr-2 ">
                <button
                  ref={dropDownRef}
                  onClick={dropDownHandler}
                  className="  text-xs cursor-pointer font-bold bg-secondary text-primary uppercase px-4 py-1 rounded-md flex items-center space-x-1"
                >
                  <FaUserCircle className="mr-1" />
                  {user?.name}
                  <FaCaretDown />
                </button>
                <ul
                  onClick={dropDownHandler}
                  className={`absolute top-11 left-[-1rem] right-[-1rem] bg-white shadow-lg text-primary text-center divide-y list-none transition-transform ease-in-expo duration-300 ${
                    dropDown
                      ? "opacity-100 transform translate-y-[0]"
                      : "opacity-0 transform translate-y-[-20px]"
                  }`}
                >
        
                  <p className="py-1 px-4   tracking-wide font-semibold hover:text-white hover:bg-primary transition-color ease-in-out duration-300 cursor-pointer  ">
                    <Link
                      to={`${user.role === 1 ? '/job_provider/profile':'/job_seeker/profile'}`}
                      className="flex  items-center justify-around "
                    >
                      {" "}
                      <FaUserTie />
                      <span>Profile</span>
                    </Link>
                  </p>
                  <p
                    onClick={logoutHandler}
                    className="py-1 px-4  flex items-center justify-around  tracking-wide font-semibold hover:text-white hover:bg-primary transition-color ease-in-out duration-300 cursor-pointer "
                  >
                    <MdOutlineLogout /> <span>Logout</span>
                  </p>
                </ul>
              </div>
            )}

            <Link
              to="/role"
              className="tracking-wide bg-transparent text-secondary  pl-2 text-sm font-semibold hidden md:block "
            >
              Find / Post Jobs
            </Link>
          </div>
        </header>

        {/* navbar */}
        <div
          className={`fixed ${
            toggle ? "left-0" : "left-full"
          }  right-0 bottom-0 bg-white text-primary top-[4rem] md:hidden transition-left ease-in-expo duration-300 p-4 `}
        >
          {user?.role === 1 ? (
            <Navbar navList={JobProviderNavList} handler={menuHandler} />
          ) : user?.role === 2 ? (
            <Navbar navList={JobSeekerNavList} handler={menuHandler} />
          ) : (
            <Navbar navList={HomeNavList} handler={menuHandler} />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
