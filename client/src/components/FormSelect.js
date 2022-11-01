const FormSelect = ({ name, value, labelText, handleChange, listOfItems }) => {
  return (
    <div className="">
      <label
        htmlFor={name}
        className="capitalize tracking-wide text-sm text-gray-400 block"
      >
        {labelText || name}
      </label>
      <div className="relative  flex items-center justify-between w-40 ">
        <select
          name={name}
          id={name}
          value={value}
          onChange={handleChange}
          className="  w-full px-8 py-0.5 border border-gray-300 capitalize rounded-md shadow-sm outline-none appearance-none focus:border-primary focus:border-2 tracking-wider text-sm"
        >
          {listOfItems?.map((item, index) => {
            return (
              <option key={index} value={item} className="appearance-none border-none py-2">
                {item}
              </option>
            );
          })}
        </select>
        <svg
          className="h-4 w-4 absolute right-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default FormSelect;
