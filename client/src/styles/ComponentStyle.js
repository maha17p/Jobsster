const Title = ({ text }) => (
  <h3 className="italic text-3xl text-center tracking-wide font-semibold">
    {text}
  </h3>
);

const ButtonStyle = ({
  primary,
  secondary,
  label,
  rounded,
  clickHandler,
}) => (
  <button
    onClick={clickHandler}
    className={`bg-${primary} text-${secondary} px-4 py-1 rounded-${rounded}   text-sm  capitalize tracking-wider  font-semibold hover:text-secondary hover:shadow-lg transition-color duration-300 ease-in-out`}
  >
    {label}
  </button>
);

const ButtonLink = ({ text, bgColor, textColor, clickHandler }) => (
  <button
    onClick={clickHandler}
    className={`uppercase text-xs px-4 py-2 bg-${bgColor} text-${textColor} font-semibold rounded relative group`}
  >
    <span
      className={`absolute w-0 top-1/2 left-1/2 -translate-x-[55%] -translate-y-1/2 opactity-0 group-hover:opacity-100 group-hover:w-full h-full bg-${textColor} transition-all duration-300 ease-in-out group-hover:rounded-l  `}
    />
    <span
      className={`relative text-${textColor} ${
        bgColor === "primary"
          ? "group-hover:text-primary"
          : "group-hover:text-white"
      } `}
    >
      {text}
    </span>
  </button>
);


export { Title, ButtonStyle, ButtonLink };
