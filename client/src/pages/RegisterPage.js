import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import FormCheckBox from "../components/FormCheckBox";
import FormInput from "../components/FormInput";
import { useDispatchAction } from "../context/action";
import { useStateValue } from "../context/GlobalContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  location: "",
  isMember: true,
  role: "",
};

const RegisterPage = () => {
  const navigate = useNavigate();

  const { isLoading, showAlert, user, toGoAnother } = useStateValue();
  const { setupUser } = useDispatchAction();

  const [values, setValues] = useState(initialState);

  const toggleMemberHandler = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { name, email, password, location, role } = values;

    if (values.isMember) {
      const currentUser = { email, password };
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Login Successful! Redirecting ...",
      });
    } else {
      const currentUser = { name, email, password, location, role };
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "User Created! Redirecting ...",
      });
    }
  };

  useEffect(() => {
    if (user && !toGoAnother) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user]);
  return (
    <div className="flex h-pageHeight justify-center  ">
      <div className="flex flex-col md:flex-row justify-center my-auto mx-auto  w-11/12 first-line:sm:10/12 md:9/12 lg:w-8/12 shadow-lg ">
        <form
        onSubmit={submitHandler}
        
        className="flex-1  bg-white px-8 py-4 md:p-4 space-y-2 rounded-l-lg  ">
          {/* title */}
          <h2 className="text-center uppercase  font-semibold tracking-wider text-xl italic">
            {values.isMember ? "Login" : "Sign Up"}
          </h2>

          {/* Alert */}
          {showAlert && <Alert />}

          {/* name input */}
          {!values.isMember && (
            <FormInput
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />
          )}

          {/* email input */}
          <FormInput
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />

          {/* password  input*/}
          <FormInput
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />
          {/* Location input */}
          {!values.isMember && (
            <FormInput
              type="text"
              name="location"
              value={values.location}
              handleChange={handleChange}
            />
          )}
          {/* Location input */}
          {!values.isMember && (
            <FormCheckBox
              title="Creating an account for"
              type="radio"
              name="role"
              itemList={[
                { name: "job provider", value: 1 },
                { name: "job seeker", value: 2 },
              ]}
              value={values.role}
              handleChange={handleChange}
            />
          )}
          {/* forgot password */}

          {values.isMember && (
            <Link
              to="forgot_password"
              className="text-center block text-sm text-secondary opacity-80 hover:tracking-wide hover:opacity-100 transition-all duration-200"
            >
              forgot password?
            </Link>
          )}

          {/* button container */}
          <div className="text-center  ">
            <button
            type="submit"
              className= {`px-6 py-2 cursor-pointer tracking-wider uppercase bg-primary text-white rounded-full text-xs  font-semibold transition-all duration-200 hover:text-secondary hover:tracking-widest`}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </form>
        <div className="md:flex-1  bg-primary text-white p-4 rounded-r-lg ">
          <h2 className="text-center uppercase  font-semibold tracking-wider text-xl italic">
            {!values.isMember ? "login" : "sign up"}
          </h2>
          <div className="flex justify-center flex-col items-center h-full space-y-8 ">
            <p className="text-sm tracking-wider">
              {!values.isMember
                ? "Already have an account ?"
                : `Don't you have an account ?`}{" "}
            </p>
            <button
              onClick={toggleMemberHandler}
              className="px-6 py-2 tracking-wider uppercase bg-white text-primary rounded-full text-xs  font-semibold transition-all duration-200 hover:text-secondary hover:tracking-widest"
            >
              {!values.isMember ? "login" : "sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
