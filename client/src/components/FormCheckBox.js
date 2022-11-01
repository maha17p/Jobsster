import React from "react";

const FormCheckBox = ({
  title,
  type,
  name,
 itemList,
  value,
  handleChange,
}) => {
  return (
    <>
      <label className="capitalize tracking-wide text-sm text-gray-400">
        {title}
      </label>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {itemList.map((item,index) => (
            <li key={index} className="w-full  first-of-type:border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id={`${item.value}-checkbox-list`}
              name={name}
              type={type}
              value={item.value}
              onChange={handleChange}
              className="accent-primary"
            />
            <label
          id={`${item.value}-checkbox-list`}
              className="py-2 ml-2 text-xs w-full font-medium text-gray-900 dark:text-gray-300 uppercase"
            >
         {item.name}
            </label>
          </div>
        </li>
        ))}
      </ul>
    </>
  );
};

export default FormCheckBox;
