import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import FormInput from "../components/FormInput";
import MetaData from "../components/MetaData";
import { useDispatchAction } from "../context/action";
import { useStateValue } from "../context/GlobalContext";
import { ButtonLink } from "../styles/ComponentStyle";

const ProfilePage = () => {
  const { user, showAlert } = useStateValue();
  const { updateUser, logoutUser } = useDispatchAction();
const navigate = useNavigate()
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [location, setLocation] = useState(user?.location);
  const submitHandler = (e) => {
    e.preventDefault();
    updateUser({ name, email, location });
  };
  const logoutHandler = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <>
      <MetaData title={(user && `${user.name}'s profile`) || "profile"} />
      <div className="flex h-pageHeight justify-center  ">
        <div className="flex flex-col md:flex-row justify-center my-auto mx-auto  w-11/12 first-line:sm:10/12 md:9/12 lg:w-8/12 shadow-lg ">
          <div className=" flex-1 block bg-primary text-white md:rounded-l-md rounded-t-md md:rounded-tr-none ">
            <h2 className="text-center uppercase  font-semibold tracking-wider text-xl italic py-2">
              Profile
            </h2>
            {/* Profile*/}
            <div className="divide-y divide-gray-700 ">
              <div className="py-2 px-4">
                <p className="uppercase text-secondary font-semibold text-lg">
                  <CgProfile className="inline mr-1" />
                  Hi {user?.name}!
                </p>
                <p className="text-gray-400 text-sm tracking-wider">
                  {user?.email}
                </p>
                <p className="text-gray-400 text-sm tracking-wider">
                  {user?.location}
                </p>
              </div>
              <div className="flex flex-col divide-y divide-gray-700 ">
                {user?.role === 1 && (
                  <>
                    <Link
                      to="/job_provider/all_job"
                      className="py-2 px-4 tracking-wider text-gray-200 hover:text-primary hover:bg-white transition-color ease-in-out duration-300"
                    >
                      Posted Jobs
                    </Link>
                    <Link
                      to="/job_provider/add_job"
                      className="py-2 px-4 tracking-wider text-gray-200 hover:text-primary hover:bg-white transition-color ease-in-out duration-300"
                    >
                      Add New Job
                    </Link>
                    <Link
                      to="/logout"
                      className="py-2 px-4 tracking-wider text-gray-200 hover:text-primary hover:bg-white transition-color ease-in-out duration-300"
                    >
                      Logout
                    </Link>
                  </>
                )}
                {user?.role === 2 && (
                  <>
                    <Link
                      to="/job_seeker/all_job"
                      className="py-2 px-4 tracking-wider text-gray-200 hover:text-primary hover:bg-white transition-color ease-in-out duration-300"
                    >
                      Available Jobs
                    </Link>
                    <Link
                      to="/job_seeker/my_jobs"
                      className="py-2 px-4 tracking-wider text-gray-200 hover:text-primary hover:bg-white transition-color ease-in-out duration-300"
                    >
                      My Jobs
                    </Link>
                    <p
                      onClick={logoutHandler}
                      className="py-2 px-4 tracking-wider text-gray-200 hover:text-primary hover:bg-white transition-color ease-in-out duration-300"
                    >
                      Logout
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <form className="flex-1  bg-white px-8 py-4 md:p-4 space-y-2  md:rounded-r-md rounded-b-md md:rounded-bl-none   ">
            {/* Alert */}
            {showAlert && <Alert />}

            {/* name input */}

            <FormInput
              type="text"
              name="name"
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />

            {/* email input */}
            <FormInput
              type="text"
              name="email"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />

            {/* password  input*/}
            <FormInput
              type="text"
              name="location"
              value={location}
              handleChange={(e) => setLocation(e.target.value)}
            />

            <ButtonLink
              bgColor={"primary"}
              textColor={"white"}
              text={"save changes"}
              clickHandler={submitHandler}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
