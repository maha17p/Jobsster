import React from "react";

const FormText = ({ type, name, labelText, value, handleChange }) => {
  return (
      <div>
        <label
          htmlFor={name}
          className="capitalize tracking-wide text-sm text-gray-400"
        >
          {labelText || name}
        </label>

        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          className="w-full px-4 py-[3px] outline-none border
ease-in-out 
        focus:border-primary focus:opacity-80 focus:border-2 rounded transition-all duration-100
      "
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
  );
};

export default FormText;
