import React, { useState } from "react";
import {
  BugSupport,
  PressSupport,
  SalesSupport,
  TechnicalSupport,
} from "../assets/ContactDetails";
import FormInput from "../components/FormInput";
import FormText from "../components/FormText";
import { ButtonLink } from "../styles/ComponentStyle";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const ContactPage = () => {
  const [values, setValues] = useState(initialState);

  const contactData = [
    {
      name: "Technical support",
      email: "support@example.com",
      phoneNum: "+1 234-567-89",
      img: <TechnicalSupport />,
    },
    {
      name: "Bugs support",
      email: "support@example.com",
      phoneNum: "+1 234-567-89",
      img: <BugSupport />,
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // updateChange({ name, value });
  };

  return (
    <div className="flex h-pageHeight justify-center  ">
      <div className="flex flex-col md:flex-row justify-center my-auto mx-auto  w-11/12 first-line:sm:10/12 md:9/12 lg:w-8/12 shadow-lg ">
        <form className="flex-1  bg-white px-8 py-4 md:p-4 space-y-2 rounded-l-lg  ">
          <p className="uppercase text-2xl font-semibold text-center">
            About us
          </p>
          <FormInput
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />

          {/* email input */}
          <FormInput
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
          {/* Job Details */}
          <FormText
            name="Message"
            value={values.email}
            handleChange={handleChange}
          />

          {/* button container */}
          <div className="text-center pt-4  ">
            <ButtonLink
              bgColor={"primary"}
              textColor={"white"}
              text={"Submit"}
              clickHandler={submitHandler}
            />
          </div>
        </form>
        <div className="md:flex-1  bg-primary text-white p-4 rounded-r-lg ">
          <div className="flex flex-col justify-center items-center h-full w-full">
            {contactData.map(({name, email, phoneNum, img}, index) => (
              <div key={index} className=" py-2 flex justify-between items-center ">
                <div className="p-4 bg-white rounded-md shadow-md w-14 h-14 flex items-center justify-center mr-4">
                  {img}
                </div>
                <div className="flex flex-col  text-justify   ">
                  <p className=" ">{name}</p>
                  <p className="text-sm text-gray-400">{email}</p>
                  <p className="text-sm text-gray-400">{phoneNum}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
