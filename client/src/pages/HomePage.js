import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  careerProgress,
  metaIcon,
  slackIcon,
  amazonIcon,
  linkedinIcon,
  googleIcon,
  twitterIcon,
} from "../assets";
import MetaData from "../components/MetaData";
const HomePage = () => {
  const jobTotal = [
    {
      id: 1,
      count: "1,9",
      moment: "K+",
      name: "Ready job vacancy",
    },
    {
      id: 2,
      count: "3,4",
      moment: "K+",
      name: "incorporated company",
    },
    {
      id: 3,
      count: "200",
      moment: "K+",
      name: "Job seekers active",
    },
  ];
  return (
    <>
      <MetaData title={"Homepage"} />

      <section className=" overflow-hidden  w-full min-h-pageMinHeight py-6 xl:py-0 space-y-6  ">
        <div className="  flex   ">
          <div className="flex flex-col md:flex-row my-auto items-center ">
            <div className="flex-1  w-full ">
              <div className="max-w-lg space-y-8 ">
                <h2 className="font-semibold text-4xl text-primary trackig-wide leading-relaxed">
                  The best jobsite for your
                  <span className="bg-primary text-secondary px-4 text-3xl py-1  tracking-wider rounded-full ml-2">
                    <span className="">future</span>
                  </span>
                </h2>
                <p className="text-gray-600 tracking-wide">
                  We help you find the best job to build your future and build a
                  better future of digital era.
                </p>
                <p className="animate-bounce ">
                  <Link
                    to="/role "
                    className="px-4 py-2 rounded-full capitalize  bg-primary hover:text-secondary text-white font-semibold "
                  >
                    Find / Post a Job
                  </Link>
                </p>

                <p className="text-gray-600 tracking-wide py-2">
                  Supported by 3k+ companies
                </p>
              </div>
              <div className="hidden md:flex">
                <img className="h-8 w-8 mr-4" src={metaIcon} alt="" />
                <img className="h-8 w-8 mr-4" src={googleIcon} alt="" />
                <img className="h-8 w-8 mr-4" src={amazonIcon} alt="" />
                <img className="h-8 w-8 mr-4" src={linkedinIcon} alt="" />
                <img className="h-8 w-8 mr-4" src={twitterIcon} alt="" />
              </div>
            </div>
            <div className="flex-1 flex items-center ">
              <div className="md:hidden mr-4 ">
                <img className="h-8 w-8 my-2" src={metaIcon} alt="" />
                <img className="h-8 w-8 my-2" src={googleIcon} alt="" />
                <img className="h-8 w-8 my-2" src={amazonIcon} alt="" />
                <img className="h-8 w-8 my-2" src={linkedinIcon} alt="" />
                <img className="h-8 w-8 my-2" src={twitterIcon} alt="" />
              </div>
              <div className="h-[80%] w-[80%] ">
                <img
                  className="py-8 "
                  src={careerProgress}
                  alt="Career Progress"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex bg-white py-6  rounded  divide-x">
          {jobTotal.map(({ name, count, id, moment }) => (
            <div
              key={id}
              className="flex-1 flex items-center justify-center flex-col px-2"
            >
              <p className="text-2xl sm:text-3xl text-primary">
                {count} <span className="text-secondary">{moment}</span>
              </p>
              <p className="text-sm font-semibold capitalize text-center mt-2">
                {name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
